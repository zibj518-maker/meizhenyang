import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function About({ profile }) {
  const [ref, visible] = useInView();
  return (
    <section id="about" ref={ref} className={`about-section section-dark ${visible ? 'is-visible' : ''}`}>
      <div className="section-inner">
        <div className="section-label"><span>About the practice</span><span>03 / 06</span></div>
        <h2 className="display-title about-title">ABOUT<br /><span>THE WAY</span></h2>
        <div className="about-content">
          <div className="about-marker">A01 <span>Profile</span></div>
          <div className="about-statement"><p>{profile.about}</p><button className="text-cta" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>一起聊聊 <ArrowUpRight size={17} /></button></div>
          <div className="about-orbit" aria-hidden="true"><span>CURIOUS</span><span>USEFUL</span><span>HUMAN</span><span className="orbit-core">M</span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
