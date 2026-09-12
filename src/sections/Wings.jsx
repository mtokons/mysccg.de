import { ArrowRight, Briefcase, Target, GraduationCap, Building2 } from 'lucide-react';
import styles from './Wings.module.css';

const WINGS = [
  {
    id: 'job-portal',
    color: 'wing-blue',
    accent: '#1a6cff',
    icon: <Briefcase size={28} />,
    label: 'Wing 01',
    title: 'Job Portal',
    tagline: 'Where Global Talent Meets German Employers',
    desc: 'We bridge German employers with globally skilled professionals through curated talent pipelines, pre-assessed candidates, and structured recruitment support.',
    forEmployers: ['Access to curated international talent', 'Pre-assessed, job-ready candidates', 'Workforce planning & recruitment support'],
    forCandidates: ['Apply with Recommendation pathways', 'Job-Training Support programs', 'CV refinement & interview coaching'],
  },
  {
    id: 'consultation',
    color: 'wing-orange',
    accent: '#ff6b2b',
    icon: <Target size={28} />,
    label: 'Wing 02',
    title: 'SCCG Consultation',
    tagline: 'High-Value Professional & Institutional Services',
    desc: 'Empowering institutions and individuals with strategic capacity building, IT solutions, and comprehensive career development programs.',
    forEmployers: ['Capacity building & institutional training', 'Technical workshops & conferences', 'IT solutions — complete suite'],
    forCandidates: ['Opportunity Card guidance', 'Skilled migration consulting', 'Career development programs'],
  },
  {
    id: 'academy',
    color: 'wing-green',
    accent: '#00c67a',
    icon: <GraduationCap size={28} />,
    label: 'Wing 03',
    title: 'SCCG Academy',
    tagline: 'Knowledge. Skills. Research.',
    desc: 'From language mastery to academic research placement, our academy provides the complete knowledge foundation for career success in Germany.',
    forEmployers: ['Employer-tailored training programs', 'Research collaboration pathways', 'TVET training solutions'],
    forCandidates: ['German Language School A1–B2', 'E-learning platform access', 'Bachelor / Master / PhD support'],
  },
  {
    id: 'ausbildung',
    color: 'wing-yellow',
    accent: '#f7c948',
    icon: <Building2 size={28} />,
    label: 'Wing 04',
    title: 'Ausbildung Center',
    tagline: 'Your Complete Ausbildung Success Roadmap',
    desc: 'End-to-end support for candidates pursuing vocational training in Germany — from degree verification to guaranteed placement assistance.',
    forEmployers: ['Employer-ready apprentice pipelines', 'Sector-specific candidate matching', 'Onboarding & integration support'],
    forCandidates: ['Degree verification & recognition', 'Full documentation support', 'Guaranteed placement assistance'],
  },
];

export default function Wings() {
  return (
    <section className={styles.wings} id="wings">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">▪ Strategic Framework</span>
          <h2 className="section-title">
            The Four Wings of <span className="gold-text">SCCG Career Lab</span>
          </h2>
          <p className="section-subtitle">
            A unified ecosystem designed to connect global talent with Germany's workforce needs — from discovery to placement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {WINGS.map((wing, i) => (
            <div
              key={wing.id}
              className={`${styles.card} ${wing.color} reveal reveal-delay-${(i % 4) + 1}`}
              style={{ '--accent': wing.accent }}
            >
              {/* Top */}
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  {wing.icon}
                </div>
                <span className={styles.wingLabel}>{wing.label}</span>
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{wing.title}</h3>
              <p className={styles.cardTagline}>{wing.tagline}</p>
              <p className={styles.cardDesc}>{wing.desc}</p>

              {/* Services */}
              <div className={styles.services}>
                <div className={styles.serviceGroup}>
                  <p className={styles.groupLabel}>For Employers</p>
                  {wing.forEmployers.map(item => (
                    <div key={item} className={styles.serviceItem}>
                      <span className={styles.dot} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className={styles.serviceGroup}>
                  <p className={styles.groupLabel}>For Candidates</p>
                  {wing.forCandidates.map(item => (
                    <div key={item} className={styles.serviceItem}>
                      <span className={styles.dot} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a href={`#${wing.id}`} className={styles.cardCta}>
                Explore Wing <ArrowRight size={14} />
              </a>

              {/* Glow */}
              <div className={styles.glow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
