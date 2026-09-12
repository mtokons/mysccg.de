# 🚀 SCCG Career Lab — Firebase Deployment Guide

## Project Overview
- **Framework**: React 18 + Vite
- **Build Output**: `dist/` folder
- **Hosting**: Firebase Hosting
- **Project ID**: sccg-career-lab (update to your actual Firebase project ID)

---

## ✅ Prerequisites
1. A Google account
2. Node.js 18+ installed
3. The project files (this repository)

---

## Step 1: Create Firebase Project

1. Go to **https://console.firebase.google.com**
2. Click **"Create a project"**
3. Name it: `sccg-career-lab` (or `mysccg-de`)
4. Disable Google Analytics (optional)
5. Click **Create Project**

---

## Step 2: Enable Firebase Hosting

In your Firebase console:
1. Left sidebar → **Hosting**
2. Click **"Get Started"**
3. Follow the setup wizard (just click through — we'll deploy via CLI)

---

## Step 3: Install Firebase CLI (if not done)

```bash
npm install -g firebase-tools
```

---

## Step 4: Login to Firebase

```bash
firebase login
```
This opens your browser — log in with your Google account.

---

## Step 5: Initialize Firebase in Project

```bash
cd sccg-career-lab
firebase init hosting
```

When prompted:
- **Use an existing project** → select `sccg-career-lab`
- **Public directory**: type `dist`
- **Configure as single-page app**: YES (`y`)
- **Set up automatic builds with GitHub**: NO (for now)
- **Overwrite dist/index.html**: NO (`n`)

---

## Step 6: Build the Project

```bash
npm run build
```

---

## Step 7: Deploy to Firebase

```bash
firebase deploy
```

✅ Your site will be live at:
- `https://sccg-career-lab.web.app`
- `https://sccg-career-lab.firebaseapp.com`

---

## Step 8: Connect Custom Domain (mysccg.de)

1. In Firebase Console → **Hosting**
2. Click **"Add custom domain"**
3. Enter: `mysccg.de`
4. Firebase gives you **DNS records**
5. Go to your domain registrar (where mysccg.de is registered)
6. Add the DNS records Firebase provides (usually 2 A records)
7. Wait 24–48 hours for propagation
8. Firebase automatically provisions an **SSL certificate** (free)

---

## Re-Deployment (After Changes)

```bash
npm run build
firebase deploy
```

That's it! Every deployment takes ~30 seconds.

---

## Project Structure

```
sccg-career-lab/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom gold cursor
│   │   ├── Navbar.jsx          # Mega-menu navigation
│   │   └── Footer.jsx          # Full footer
│   ├── sections/
│   │   ├── Hero.jsx            # Animated hero with particle canvas
│   │   ├── Wings.jsx           # Four Strategic Wings
│   │   ├── Impact.jsx          # Stats & Germany's talent gap
│   │   ├── Journey.jsx         # Ausbildung Candidate Journey Map
│   │   ├── Network.jsx         # Global talent network + partners
│   │   ├── Testimonials.jsx    # Success story slider
│   │   └── Consultation.jsx    # Booking form + contact
│   ├── hooks/
│   │   └── useScrollReveal.js  # Scroll animations + counter
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Design tokens & global styles
├── firebase.json               # Firebase hosting config
├── .firebaserc                 # Firebase project reference
└── package.json
```

---

## Design System

| Token | Value |
|-------|-------|
| Primary Font | Cormorant Garamond (display) |
| Body Font | DM Sans |
| Impact Font | Bebas Neue |
| Gold | #c9a84c |
| Background | #050508 |
| Accent Blue | #1a6cff |
| Accent Green | #00c67a |
| Accent Orange | #ff6b2b |
| Accent Yellow | #f7c948 |

---

## Next Steps to Customize

1. **Logo**: Replace `SCCG` text with actual SVG logo in `Navbar.jsx`
2. **Photos**: Add real team photos in Testimonials
3. **Form Backend**: Connect Consultation form to Firebase Firestore or EmailJS
4. **Analytics**: Add Firebase Analytics or Google Analytics
5. **Blog/Content**: Add a News section (Firestore-powered)
6. **MYSCCG Portal**: Link to `portal.mysccg.de`
7. **Multilingual**: Add German (DE) translations with i18n

---

*Built with ❤️ for SCCG Career Lab — Hamburg, Germany*
