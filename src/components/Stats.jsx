import { profile } from '../data/portfolio';

function Stats() {
  return (
    <section className="stats-section section-light section-pad">
      <div className="section-inner">
        <div className="section-label light-label"><span>A little proof</span><span>06 / 06</span></div>
        <div className="stats-grid">{profile.stats.map((stat) => <article className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></article>)}</div>
        <div className="method-row"><span>How I work</span><p>Listen closely. Make the complex clear.<br />Leave room for a better question.</p><span className="method-index">L / 26</span></div>
      </div>
    </section>
  );
}

export default Stats;
