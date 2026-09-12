import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const WORDS = ['Brilliance.', 'Excellence.', 'Innovation.', 'Leadership.', 'Ambition.'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // Rotating word
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setFading(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const lines = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * W, y: Math.random() * H,
      len: Math.random() * 200 + 100,
      angle: Math.random() * Math.PI,
      speed: Math.random() * 0.003 + 0.001,
      alpha: Math.random() * 0.06 + 0.02,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw lines
      lines.forEach(l => {
        l.angle += l.speed;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(
          l.x + Math.cos(l.angle) * l.len,
          l.y + Math.sin(l.angle) * l.len
        );
        ctx.strokeStyle = `rgba(201,168,76,${l.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw particles and connections
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Canvas background */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Gradient overlays */}
      <div className={styles.gradLeft} />
      <div className={styles.gradBottom} />

      {/* Decorative ring */}
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.orbitDot} />

      {/* Content */}
      <div className={styles.content}>
        {/* Badge */}
        <div className={`${styles.badge} ${styles.fadeUp}`} style={{ animationDelay: '0.2s' }}>
          <span className={styles.badgeDot} />
          Germany's Skilled Worker Strategy 2040 — Partner Platform
        </div>

        {/* Headline */}
        <h1 className={`${styles.headline} ${styles.fadeUp}`} style={{ animationDelay: '0.4s' }}>
          <span className={styles.headlineSmall}>Building Germany's</span>
          <span className={styles.headlineBig}>Future Workforce —</span>
          <span className={`${styles.headlineWord} ${fading ? styles.wordFade : styles.wordVisible}`}>
            One {WORDS[wordIdx]}
          </span>
        </h1>

        {/* Subtext */}
        <p className={`${styles.sub} ${styles.fadeUp}`} style={{ animationDelay: '0.6s' }}>
          Germany faces a multi-million skilled labor shortage by 2040, requiring ~288,000 foreign workers annually. 
          SCCG Career Lab trains, develops, and places high-potential international professionals 
          into the German workforce.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} ${styles.fadeUp}`} style={{ animationDelay: '0.8s' }}>
          <a href="#wings" className="btn-primary">
            Explore the Four Wings <ArrowRight size={16} />
          </a>
          <a href="#portal" className="btn-outline">
            <div className={styles.playBtn}><Play size={12} /></div>
            Watch Our Story
          </a>
          <a href="#consultation" className="btn-outline">Book a Consultation</a>
        </div>

        {/* Stats bar */}
        <div className={`${styles.stats} ${styles.fadeUp}`} style={{ animationDelay: '1s' }}>
          {[
            { num: '288K+', label: 'Annual Skilled Workers Needed' },
            { num: '4', label: 'Strategic Talent Wings' },
            { num: '50+', label: 'Partner Organizations' },
            { num: '10+', label: 'Countries Represented' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Regions ticker */}
      <div className={`${styles.ticker} ${styles.fadeUp}`} style={{ animationDelay: '1.2s' }}>
        <span className={styles.tickerLabel}>Global Talent From</span>
        <div className={styles.tickerTrack}>
          {['🇧🇩 South Asia', '🌍 Africa', '🇸🇦 Middle East', '🌏 Southeast Asia', '🇧🇷 Latin America', '🇧🇩 South Asia', '🌍 Africa', '🇸🇦 Middle East', '🌏 Southeast Asia', '🇧🇷 Latin America'].map((r, i) => (
            <span key={i} className={styles.tickerItem}>{r}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
