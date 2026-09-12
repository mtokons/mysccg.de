import { useCountUp } from '../hooks/useScrollReveal';
import styles from './Impact.module.css';

function StatCard({ num, suffix, label, desc }) {
  const ref = useCountUp(num);
  return (
    <div className={`${styles.stat} reveal`}>
      <div className={styles.statNum}>
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statDesc}>{desc}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className={styles.impact}>
      {/* Background */}
      <div className={styles.bg} />

      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={`${styles.left} reveal`}>
            <span className="section-tag">▪ Germany's Challenge</span>
            <h2 className={`section-title ${styles.title}`}>
              The Talent Gap <br />
              <span className="gold-text">We Exist to Bridge</span>
            </h2>
            <p className={styles.body}>
              Germany's aging workforce and expanding economy create an unprecedented demand
              for internationally trained professionals. SCCG Career Lab is uniquely positioned
              as the bridge between global brilliance and German opportunity.
            </p>
            <div className={styles.quote}>
              <div className={styles.quoteLine} />
              <p>
                "Connecting Global Talent. Empowering Careers.<br />
                <strong>Shaping Germany's Future Workforce.</strong>"
              </p>
            </div>
            <a href="#consultation" className="btn-primary" style={{ marginTop: '28px' }}>
              Partner With SCCG
            </a>
          </div>

          {/* Right — Stats */}
          <div className={styles.right}>
            <div className={styles.statsGrid}>
              <StatCard num={288000} suffix="+" label="Annual Workers Needed" desc="Foreign workers Germany needs each year by 2040 to sustain economic growth" />
              <StatCard num={12} suffix="M" label="Projected Labor Shortage" desc="Skilled professionals Germany will be short by 2040 without intervention" />
              <StatCard num={500} suffix="+" label="Professionals Supported" desc="Talent guided through SCCG's career and migration pathways to date" />
              <StatCard num={15} suffix="+" label="Industry Sectors" desc="From healthcare and IT to engineering and vocational trades" />
            </div>
          </div>
        </div>
      </div>

      {/* IHK Badge */}
      <div className={`${styles.ihkBadge} reveal`}>
        <div className={styles.ihkInner}>
          <div className={styles.ihkLogo}>IHK</div>
          <div>
            <p className={styles.ihkTitle}>Hamburg Chamber of Commerce Member</p>
            <p className={styles.ihkSub}>Recognized partner in Hamburg's skilled worker integration initiative</p>
          </div>
          <div className={styles.ihkVerified}>✓ Verified Partner</div>
        </div>
      </div>
    </section>
  );
}
