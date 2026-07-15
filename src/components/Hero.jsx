import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

function Hero({ profile }) {
  return (
    <section id="hero" className="hero-section section-dark">
      <ThreeScene />
      <div className="hero-grid" />
      <div className="hero-content section-inner">
        <div className="hero-kicker reveal-on-load"><span className="eyebrow-line" />Independent visual practice · 2026</div>
        <div className="hero-copy">
          <p className="hero-role reveal-on-load">{profile.role}</p>
          <h1 className="hero-title reveal-on-load"><span>MAKE</span><span>FORM</span><span className="hero-title-accent">MATTER.</span></h1>
          <p className="hero-intro reveal-on-load">{profile.intro}</p>
          <button className="circle-cta reveal-on-load" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="联系视觉设计师">
            <span>Start a conversation</span><ArrowUpRight size={19} />
          </button>
        </div>
        <div className="hero-side-note reveal-on-load">
          <span>Scroll to explore</span>
          <ArrowDownRight size={18} />
        </div>
        <div className="hero-identity reveal-on-load">
          <span className="identity-mark">M</span>
          <span><strong>{profile.brand}</strong><small>Graphic form / visual feeling</small></span>
        </div>
      </div>
      <div className="hero-bottom section-inner">
        <div className="recognition-list">
          {['Brand identity', 'Poster design', 'Packaging', 'Art direction'].map((item) => <span key={item}>{item}</span>)}
        </div>
        <span className="hero-index">01 <i>/</i> 06</span>
      </div>
    </section>
  );
}

export default Hero;
