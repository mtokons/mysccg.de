import { ArrowRight, Calendar, Phone, Mail } from 'lucide-react';
import styles from './Consultation.module.css';

export default function Consultation() {
  return (
    <section className={styles.section} id="consultation">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: CTA */}
          <div className={`${styles.left} reveal`}>
            <span className="section-tag">▪ Book a Consultation</span>
            <h2 className={styles.title}>
              Ready to Shape Your <br />
              <span className="gold-text">Germany Career?</span>
            </h2>
            <p className={styles.body}>
              Whether you're an international professional seeking opportunity, 
              an employer building a future-ready team, or an institution seeking 
              capacity building — our expert consultants are ready.
            </p>
            <div className={styles.options}>
              {[
                { icon: <Calendar size={18} />, label: 'Schedule a Meeting', sub: 'Book a 30-minute strategy session' },
                { icon: <Phone size={18} />, label: 'Call Our Team', sub: '+49 (0) 40 — SCCG Office' },
                { icon: <Mail size={18} />, label: 'Email Us', sub: 'info@mysccg.de' },
              ].map(opt => (
                <div key={opt.label} className={styles.option}>
                  <div className={styles.optIcon}>{opt.icon}</div>
                  <div>
                    <p className={styles.optLabel}>{opt.label}</p>
                    <p className={styles.optSub}>{opt.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`${styles.right} reveal`}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Start Your Journey</h3>
              <p className={styles.formSub}>Tell us about your goals and we'll connect you with the right wing.</p>

              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input className={styles.input} type="text" placeholder="Dr. Jane Smith" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input className={styles.input} type="email" placeholder="you@company.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Country</label>
                  <input className={styles.input} type="text" placeholder="Your Country" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>I'm interested in</label>
                <select className={styles.select}>
                  <option value="">Select a Wing</option>
                  <option>Job Portal — Employment Services</option>
                  <option>SCCG Consultation — Professional Services</option>
                  <option>SCCG Academy — Language & Education</option>
                  <option>Ausbildung Center — Vocational Training</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message (Optional)</label>
                <textarea className={styles.textarea} placeholder="Tell us about your background and goals..." rows={3} />
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Request Consultation <ArrowRight size={16} />
              </button>
              <p className={styles.privacyNote}>✓ Your data is protected under GDPR. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
