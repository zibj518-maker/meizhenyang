import { Maximize2, Plus } from 'lucide-react';

function CaseStudies({ cases, onSelect }) {
  return (
    <section className="cases-section section-dark section-pad-top">
      <div className="section-inner">
        <div className="section-label"><span>Selected static work</span><span>02 / 06</span></div>
        <div className="case-grid">
          {cases.map((item, index) => (
            <button key={item.id} className={`case-card case-card-${index + 1}`} onClick={() => onSelect(item)} aria-label={`查看作品：${item.title}`}>
              <div className={`case-media ${item.fit ? `media-${item.fit}` : ''}`}>
                <img src={item.poster} alt="" loading="lazy" decoding="async" />
                <span className="case-play"><Maximize2 size={15} /></span>
                <span className="case-plus"><Plus size={18} /></span>
              </div>
              <div className="case-meta"><span>{item.title}</span><span>{item.type}</span></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
