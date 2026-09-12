import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "SCCG Career Lab transformed my German language skills from A1 to B2 in just 8 months. Their systematic approach and dedicated coaches gave me the confidence to secure my engineering position in Hamburg.",
    name: "Arjun Mehta",
    role: "Mechanical Engineer, Hamburg",
    origin: "India",
    wing: "Academy"
  },
  {
    quote: "The Ausbildung Center handled every step of my application — degree verification, documentation, employer matching. I'm now completing my nursing apprenticeship in Berlin. It was truly seamless.",
    name: "Chidinma Okafor",
    role: "Nursing Apprentice, Berlin",
    origin: "Nigeria",
    wing: "Ausbildung"
  },
  {
    quote: "As an employer, finding qualified international talent was always a challenge. SCCG's Job Portal connected us with pre-screened, German-ready candidates who integrated into our team immediately.",
    name: "Klaus Bergmann",
    role: "HR Director, Mittelstand Company",
    origin: "Germany",
    wing: "Job Portal"
  },
  {
    quote: "The Opportunity Card consultation I received was precise, professional, and completely changed my trajectory. SCCG helped me understand exactly what Germany needed and how to position myself.",
    name: "Fatima Al-Rashid",
    role: "IT Specialist, Munich",
    origin: "Jordan",
    wing: "Consultation"
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">▪ Success Stories</span>
          <h2 className="section-title">
            Voices of the <span className="gold-text">SCCG Network</span>
          </h2>
        </div>

        <div className={`${styles.slider} reveal`}>
          {/* Big quote */}
          <div className={styles.quoteIcon}><Quote size={40} /></div>

          <div className={styles.quoteText}>
            "{t.quote}"
          </div>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              {t.name.charAt(0)}
            </div>
            <div>
              <p className={styles.authorName}>{t.name}</p>
              <p className={styles.authorRole}>{t.role} · Originally from {t.origin}</p>
            </div>
            <div className={styles.authorWing}>{t.wing}</div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.btn} onClick={prev}><ChevronLeft size={18} /></button>
            <div className={styles.dots}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`} onClick={() => setIdx(i)} />
              ))}
            </div>
            <button className={styles.btn} onClick={next}><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
