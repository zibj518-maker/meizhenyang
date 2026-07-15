import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { timeline } from '../data/portfolio';

function Projects({ projects, activeProject, onChange, onPreview }) {
  const [activeTimeline, setActiveTimeline] = useState(2);
  const touchStart = useRef(null);
  const project = projects[activeProject];

  useEffect(() => {
    setActiveTimeline(Math.min(activeProject, timeline.length - 1));
  }, [activeProject]);

  const move = (direction) => {
    onChange((activeProject + direction + projects.length) % projects.length);
  };
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };
  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touchStart.current.x - (touch?.clientX ?? touchStart.current.x);
    const deltaY = touchStart.current.y - (touch?.clientY ?? touchStart.current.y);
    touchStart.current = null;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    move(deltaX > 0 ? 1 : -1);
  };

  return (
    <section id="projects" className="projects-section section-dark section-pad">
      <div className="section-inner">
        <div className="section-label"><span>Selected projects</span><span>05 / 06</span></div>
        <div className="projects-heading"><h2 className="display-title">PROJECT<br /><span>INDEX</span></h2><p>Some things I have helped<br />make more possible.</p></div>
        <div className="project-feature" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="project-visual">
            <div className={`project-frame ${project.imageFit ? `media-${project.imageFit}` : ''}`}><img src={project.image} alt="" loading="lazy" decoding="async" /><div className="project-frame-overlay"><span>{project.id} / {String(projects.length).padStart(2, '0')}</span><span>Static image / Art direction</span></div><button className="project-preview-button" onClick={() => onPreview(project)} aria-label={`预览项目：${project.title}`}><Maximize2 size={15} /><span>预览</span></button></div>
            <div className="visual-caption"><span>左右滑动查看更多</span><span>{project.year}</span></div>
          </div>
          <div className="project-info">
            <span className="project-eyebrow">{project.eyebrow}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="detail-block"><span className="detail-heading">我的角色与职责</span><ul>{project.role.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="detail-block"><span className="detail-heading">项目成果</span><div className="outcome-grid">{project.outcomes.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div>
          </div>
        </div>
        <div className="project-controls"><button className="circle-control" onClick={() => move(-1)} aria-label="查看上一个项目"><ArrowLeft size={19} /></button><span>{String(activeProject + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}</span><button className="circle-control" onClick={() => move(1)} aria-label="查看下一个项目"><ArrowRight size={19} /></button></div>
        <div className="project-index">{projects.map((item, index) => <button key={item.id} className={activeProject === index ? 'is-active' : ''} onClick={() => onChange(index)}><span>{item.id}</span>{item.title}</button>)}</div>
        <div className="timeline-wrap"><div className="timeline-title"><span>Project timeline</span><h3>项目交付历程</h3></div><div className="timeline-list">{timeline.map((item, index) => <button key={item.year} className={`timeline-item ${activeTimeline === index ? 'is-active' : ''}`} onClick={() => setActiveTimeline(index)}><span className="timeline-year">{item.year}</span><span className="timeline-dot" /><span className="timeline-copy"><strong>{item.title}</strong><small>{item.type}</small><em>{item.body}</em></span><ArrowUpRight size={17} /></button>)}</div></div>
      </div>
    </section>
  );
}

export default Projects;
