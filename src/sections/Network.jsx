import styles from './Network.module.css';

const REGIONS = [
  { flag: '🇧🇩', region: 'South Asia', countries: 'Bangladesh, India, Pakistan, Nepal, Sri Lanka', talent: 'IT, Healthcare, Engineering, Finance' },
  { flag: '🌍', region: 'Africa', countries: 'Nigeria, Ghana, Kenya, Ethiopia, Egypt', talent: 'Engineering, Medicine, Agriculture, Tech' },
  { flag: '🇸🇦', region: 'Middle East', countries: 'UAE, Saudi Arabia, Jordan, Lebanon', talent: 'Construction, Oil & Gas, IT, Banking' },
  { flag: '🌏', region: 'Southeast Asia', countries: 'Philippines, Vietnam, Indonesia, Thailand', talent: 'Nursing, Maritime, IT, Hospitality' },
  { flag: '🇧🇷', region: 'Latin America', countries: 'Brazil, Colombia, Mexico, Argentina', talent: 'Engineering, Design, IT, Sciences' },
];

const PARTNERS = [
  { name: 'IHK Hamburg', type: 'Chamber of Commerce' },
  { name: 'BAMF', type: 'Federal Migration Office' },
  { name: 'ZAV', type: 'International Placement' },
  { name: 'Make it in Germany', type: 'Federal Portal' },
  { name: 'Uni Hamburg', type: 'Research Partner' },
  { name: 'DAAD', type: 'Academic Exchange' },
  { name: 'AHK', type: 'German Chambers Abroad' },
  { name: 'GIZ', type: 'Development Cooperation' },
];

export default function Network() {
  return (
    <section className={styles.network} id="network">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">▪ Global Talent Ecosystem</span>
          <h2 className="section-title">
            A Worldwide Network for <span className="gold-text">Germany's Future</span>
          </h2>
          <p className="section-subtitle">
            We source, develop, and channel high-potential professionals from five key regions 
            into Germany's most in-demand sectors.
          </p>
        </div>

        {/* Region Cards */}
        <div className={styles.regions}>
          {REGIONS.map((r, i) => (
            <div key={r.region} className={`${styles.regionCard} reveal reveal-delay-${(i % 4) + 1}`}>
              <span className={styles.regionFlag}>{r.flag}</span>
              <h4 className={styles.regionName}>{r.region}</h4>
              <p className={styles.regionCountries}>{r.countries}</p>
              <div className={styles.regionDivider} />
              <p className={styles.regionLabel}>Key Talent Sectors</p>
              <p className={styles.regionTalent}>{r.talent}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className={`${styles.partnersSection} reveal`}>
          <div className={styles.partnersHeader}>
            <span className="section-tag">▪ Partners & Recognitions</span>
            <p className={styles.partnersNote}>Institutional credibility across Germany's workforce ecosystem</p>
          </div>
          <div className={styles.partnersGrid}>
            {PARTNERS.map(p => (
              <div key={p.name} className={styles.partnerBadge}>
                <span className={styles.partnerName}>{p.name}</span>
                <span className={styles.partnerType}>{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
