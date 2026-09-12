import { CheckCircle, ArrowRight } from 'lucide-react';
import styles from './Journey.module.css';

const STEPS = [
  { num: '01', title: 'Degree Verification', desc: 'Official recognition and credential validation by German authorities.' },
  { num: '02', title: 'Language Preparation', desc: 'Structured A1–B2 German language coaching tailored for your industry.' },
  { num: '03', title: 'Career Development Plan', desc: 'Personalized roadmap aligned with your skills, goals, and sector demand.' },
  { num: '04', title: 'Interview Preparation', desc: 'Mock interviews, cultural briefings, and employer expectation training.' },
  { num: '05', title: 'Documentation & Application', desc: 'Complete application management — no paperwork left behind.' },
  { num: '06', title: 'Guaranteed Placement', desc: 'We do not stop until you are successfully placed in your Ausbildung role.' },
];

const SOLUTIONS = [
  'Sector-specific employer partnerships across Germany',
  'Direct submission to approved Ausbildung providers',
  'Post-placement mentoring & integration support',
  'Pathway to permanent residency guidance',
  'Alumni network & career progression support',
];

export default function Journey() {
  return (
    <section className={styles.journey} id="ausbildung">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">▪ Ausbildung Center — Wing 04</span>
          <h2 className="section-title">
            Candidate Journey Map — <span className="gold-text">Ausbildung</span>
          </h2>
          <p className="section-subtitle">
            A proven 6-step system that takes international candidates from qualification to 
            secured vocational placement in Germany.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Steps */}
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <div key={step.num} className={`${styles.step} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
            ))}
          </div>

          {/* Solutions Panel */}
          <div className={`${styles.solutions} reveal`}>
            <div className={styles.solutionsCard}>
              <span className={styles.solutionsLabel}>How SCCG Provides Solutions</span>
              <h3 className={styles.solutionsTitle}>
                Beyond Placement — <br />Full Career Integration
              </h3>
              <p className={styles.solutionsDesc}>
                SCCG Ausbildung Center doesn't just place candidates — we build complete 
                career trajectories in Germany's skilled trades and professional sectors.
              </p>
              {SOLUTIONS.map(s => (
                <div key={s} className={styles.solutionItem}>
                  <CheckCircle size={16} color="var(--yellow)" />
                  <span>{s}</span>
                </div>
              ))}
              <div className={styles.guarantee}>
                <div className={styles.guaranteeSeal}>
                  <span className={styles.sealBig}>100%</span>
                  <span className={styles.sealSub}>Placement<br />Commitment</span>
                </div>
                <p>We stay with every candidate until successful integration into the German workforce.</p>
              </div>
              <a href="#consultation" className="btn-primary" style={{ marginTop: '24px' }}>
                Start Your Journey <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
