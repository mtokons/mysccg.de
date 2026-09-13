# WordPress Migration: Hostinger → Oracle VPS (Plugin Method)
Target VPS: `92.5.129.88` (Ubuntu, Nginx, MariaDB, PHP-FPM already installed)
Method: All-in-One WP Migration plugin
Web root: `/var/www/wordpress`
Database: `wordpress_db` / user `wp_user`

---

## PRECONDITIONS (verify before starting)
- [ ] Nginx serves `http://92.5.129.88` and shows the WordPress installer or a working site.
- [ ] MariaDB is running: `sudo systemctl status mariadb`
- [ ] `wordpress_db` and `wp_user` exist with full privileges (created in Phase 2).
- [ ] PHP-FPM socket path confirmed via `ls /var/run/php/`.
- [ ] SSH access to VPS confirmed: `ssh -i <key.pem> ubuntu@92.5.129.88`

---

## STEP 1 — Finish the WordPress installer on the VPS
1. Visit `http://92.5.129.88` in a browser.
2. Select language → Continue.
3. Enter DB details when prompted (only if not already in `wp-config.php`):
   - Database Name: `wordpress_db`
   - Username: `wp_user`
   - Password: `<the password set in Phase 2>`
   - Database Host: `localhost`
   - Table Prefix: `wp_` (default is fine — this is a temporary site)
4. Run the install.
5. Site title/admin fields: use placeholder values (e.g. `Migration Temp`, `admin` / a strong temp password). These will be **overwritten** by the migration import — don't worry about making them meaningful.
6. Log in to `/wp-admin` with the temp admin credentials.

**Verification:** `/wp-admin` dashboard loads successfully.

---

## STEP 2 — Install the plugin on BOTH sites

### On Hostinger (source site):
1. Log in to Hostinger site's `/wp-admin`.
2. Plugins → Add New → search "All-in-One WP Migration" → Install → Activate.

### On Oracle VPS (destination site):
1. Log in to `http://92.5.129.88/wp-admin`.
2. Plugins → Add New → search "All-in-One WP Migration" → Install → Activate.

**Note:** The free plugin version has a default export/import file size limit (~512MB depending on version). If the Hostinger site's export exceeds that, either:
- Install the **"All-in-One WP Migration File Extension"** add-on (free) to remove the size cap, OR
- Use the manual DB+files method instead for very large sites.

---

## STEP 3 — Export from Hostinger
1. On Hostinger site: **All-in-One WP Migration → Export**.
2. Under "Export to", choose **File**.
3. Wait for the plugin to bundle the database + `wp-content` (themes, plugins, uploads) into a single `.wpress` file.
4. Click **Download** to save the `.wpress` file locally (e.g. `~/Downloads/site-export.wpress`).

**Verification:** File downloaded, extension is `.wpress`, size matches expectations (roughly = DB size + uploads folder size).

---

## STEP 4 — Transfer the export file to the VPS
From your local machine:
```bash
scp -i <path-to-key.pem> ~/Downloads/site-export.wpress ubuntu@92.5.129.88:/tmp/
```

On the VPS, move it into the plugin's upload directory so the WordPress importer can see it:
```bash
sudo mkdir -p /var/www/wordpress/wp-content/ai1wm-backups
sudo mv /tmp/site-export.wpress /var/www/wordpress/wp-content/ai1wm-backups/
sudo chown -R www-data:www-data /var/www/wordpress/wp-content/ai1wm-backups
```

**Verification:**
```bash
ls -lh /var/www/wordpress/wp-content/ai1wm-backups/
```
File should be listed with correct size and `www-data` ownership.

---

## STEP 5 — Increase PHP limits for the import (needed on small VPS shapes)
Edit the PHP-FPM php.ini (adjust version number to match yours, check with `php -v`):
```bash
sudo nano /etc/php/*/fpm/php.ini
```
Set/confirm:
```ini
upload_max_filesize = 512M
post_max_size = 512M
memory_limit = 512M
max_execution_time = 300
max_input_time = 300
```
Save, then restart PHP-FPM:
```bash
sudo systemctl restart php*-fpm
```

**Note on 1GB RAM instances:** setting `memory_limit = 512M` per PHP process is fine only because swap is configured (Phase 1). Monitor with `free -h` during import; if you see OOM issues, reduce to `256M` and rely more on swap.

---

## STEP 6 — Import on the Oracle VPS
1. Go to `http://92.5.129.88/wp-admin` → **All-in-One WP Migration → Import**.
2. Choose **Import from File**.
3. Select the `.wpress` file (it should appear automatically since it's already in `ai1wm-backups`, or upload it directly through the browser if not).
4. Confirm the warning that the import will overwrite the destination database and files. Proceed.
5. Wait for the import to complete (can take several minutes depending on site size — do not close the browser tab).
6. When prompted, click **"Save Permalinks Structure"** — this re-saves permalinks automatically so Nginx rewrites work.

**Verification:** Log back into `/wp-admin` — you should now see the **original Hostinger site's admin credentials, content, plugins, and theme**, not the temp placeholders from Step 1.

---

## STEP 7 — Fix the site URL (only if domain isn't pointed here yet)
Since you're testing via IP (`92.5.129.88`) before DNS cutover, the imported site will still reference `https://yourdomain.com`. Install WP-CLI to fix this cleanly:

```bash
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

Temporarily point the site to the IP for testing:
```bash
cd /var/www/wordpress
sudo -u www-data wp search-replace 'https://yourdomain.com' 'http://92.5.129.88' --all-tables
```

**Important:** Reverse this exact command (swap the two URLs) right after DNS cutover in Step 9, or the live domain will keep redirecting to the bare IP.

---

## STEP 8 — Full test pass before DNS cutover
Check on `http://92.5.129.88`:
- [ ] Homepage loads with correct theme/styling
- [ ] Images in `wp-content/uploads` render (broken images = ownership/permission issue — re-run `chown -R www-data:www-data /var/www/wordpress`)
- [ ] Admin dashboard loads, plugins list matches the old site
- [ ] Contact forms / WooCommerce / any dynamic features work
- [ ] Permalinks work on inner pages (not just homepage) — if 404s appear, re-check the Nginx `try_files` line from the earlier server block

---

## STEP 9 — DNS cutover
1. At your DNS provider (Hostinger DNS or registrar), update the **A record** for `yourdomain.com` (and `www`) to `92.5.129.88`.
2. Wait for propagation (minutes to ~24h). Check with:
   ```bash
   dig yourdomain.com +short
   ```
3. Once it resolves to `92.5.129.88`, reverse the search-replace from Step 7:
   ```bash
   cd /var/www/wordpress
   sudo -u www-data wp search-replace 'http://92.5.129.88' 'https://yourdomain.com' --all-tables
   ```

---

## STEP 10 — SSL certificate
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Follow prompts (email, agree to terms, redirect HTTP→HTTPS: choose yes). Certbot auto-renews via a systemd timer — verify with:
```bash
sudo systemctl status certbot.timer
```

---

## STEP 11 — Cleanup
```bash
sudo rm -f /var/www/wordpress/wp-content/ai1wm-backups/site-export.wpress
```
- Deactivate/remove All-in-One WP Migration plugin if not needed ongoing (or keep it for future backups).
- Reset PHP limits in `php.ini` back down if 512M was only needed for the one-time import.
- Set up recurring backups (cron + Object Storage, or UpdraftPlus) before decommissioning Hostinger.
- Do not cancel the Hostinger plan until the new site has been stable for several days.

---

## Rollback plan (if something breaks)
- DNS: revert the A record back to Hostinger's IP — takes effect within the TTL window.
- The Hostinger source site is untouched by this entire process (export is read-only), so rollback is just a DNS change, not a data recovery operation.
