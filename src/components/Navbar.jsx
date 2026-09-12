import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import styles from './Navbar.module.css';

const megaMenuData = {
  expertise: {
    label: 'Areas of Expertise',
    cols: [
      { title: '💼 Job Portal', items: ['For Employers', 'For Job Seekers', 'Talent Network', 'Apply with Recommendation'] },
      { title: '🎯 Consultation', items: ['Capacity Building', 'Teacher & TVET Training', 'IT Solutions', 'Career Development'] },
      { title: '🎓 Academy', items: ['German Language School', 'E-Learning Platform', 'Study & Research Support', 'PhD Pathways'] },
      { title: '🏭 Ausbildung Center', items: ['Degree Verification', 'Language Preparation', 'Application Support', 'Placement Assistance'] },
    ],
  },
  solutions: {
    label: 'Our Solutions',
    cols: [
      { title: 'Professional Services', items: ['Capacity Building', 'Teacher Training', 'IT Solutions', 'Career Development'] },
      { title: 'Migration & Legal', items: ['Opportunity Card Guidance', 'Skilled Migration Consulting', 'Document Support', 'Insurance & Financial Advisory'] },
      { title: 'Education', items: ['Language School A1–B2', 'Study & Research', 'Translation Services', 'E-Learning'] },
    ],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>SCCG</span>
          <span className={styles.logoSub}>CAREER LAB</span>
        </a>

        {/* Desktop Links */}
        <div className={styles.links}>
          <a href="#home" className={styles.link}>Home</a>

          {Object.entries(megaMenuData).map(([key, menu]) => (
            <div
              key={key}
              className={styles.menuWrapper}
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`${styles.link} ${styles.hasMenu}`}>
                {menu.label} <ChevronDown size={14} />
              </button>
              <div className={`${styles.mega} ${activeMenu === key ? styles.megaOpen : ''}`}>
                <div className={styles.megaInner}>
                  {menu.cols.map((col) => (
                    <div key={col.title} className={styles.megaCol}>
                      <p className={styles.megaTitle}>{col.title}</p>
                      {col.items.map((item) => (
                        <a key={item} href="#" className={styles.megaItem}>{item}</a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className={styles.menuWrapper}
            onMouseEnter={() => setActiveMenu('about')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`${styles.link} ${styles.hasMenu}`}>
              About Us <ChevronDown size={14} />
            </button>
            <div className={`${styles.dropdown} ${activeMenu === 'about' ? styles.megaOpen : ''}`}>
              {['Mission & Vision', 'Expert Panel', 'Partners & Sponsorship', 'Career at SCCG', 'Contact'].map(i => (
                <a key={i} href="#" className={styles.dropItem}>{i}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <div className={styles.lang}><Globe size={14} /> EN</div>
          <a href="#portal" className="btn-primary" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>
            MYSCCG Portal
          </a>
          <button className={styles.burger} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ''}`}>
        {['Home', 'Job Portal', 'Consultation', 'Academy', 'Ausbildung', 'About Us', 'MYSCCG Portal'].map(item => (
          <a key={item} href="#" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{item}</a>
        ))}
      </div>
    </nav>
  );
}
