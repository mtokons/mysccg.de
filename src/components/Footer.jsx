import { Globe, ExternalLink, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>SCCG</span>
              <span className={styles.logoSub}>CAREER LAB</span>
            </div>
            <p className={styles.brandTagline}>
              "Connecting Global Talent. Empowering Careers. Shaping Germany's Future Workforce."
            </p>
            <div className={styles.social}>
              {[
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <TwitterXIcon />, label: 'Twitter/X' },
                { icon: <YouTubeIcon />, label: 'YouTube' },
                { icon: <Mail size={16} />, label: 'Email' },
                { icon: <Globe size={16} />, label: 'Web' },
              ].map(s => (
                <a key={s.label} href="#" className={styles.socialBtn} title={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          <div className={styles.cols}>
            {[
              {
                title: 'Four Wings',
                links: ['Job Portal', 'SCCG Consultation', 'SCCG Academy', 'Ausbildung Center'],
              },
              {
                title: 'Our Solutions',
                links: ['Capacity Building', 'Teacher Training', 'IT Solutions', 'Opportunity Card', 'Study & Research'],
              },
              {
                title: 'Company',
                links: ['Mission & Vision', 'Expert Panel', 'Partners', 'Career at SCCG', 'Contact Us'],
              },
              {
                title: 'Resources',
                links: ['German Job Portal', 'Language Testing', 'BAMF Resources', 'Visa Information', 'MYSCCG Login'],
              },
            ].map(col => (
              <div key={col.title} className={styles.col}>
                <p className={styles.colTitle}>{col.title}</p>
                {col.links.map(link => (
                  <a key={link} href="#" className={styles.colLink}>{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} SCCG Career Lab. All rights reserved. Hamburg, Germany.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
            <a href="#" className={styles.bottomLink}>Impressum</a>
            <a href="#" className={styles.bottomLink}>Datenschutz</a>
          </div>
          <div className={styles.ikbBadgeSmall}>IHK Hamburg Member</div>
        </div>
      </div>
    </footer>
  );
}
