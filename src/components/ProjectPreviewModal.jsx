import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

function ProjectPreviewModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastWheelAt = useRef(0);
  const touchStart = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    setActiveIndex(0);
    document.body.classList.add('project-preview-open');

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') setActiveIndex((index) => Math.max(0, index - 1));
      if (event.key === 'ArrowRight') setActiveIndex((index) => Math.min(project.gallery.length - 1, index + 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('project-preview-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery || [project.image];
  const goTo = (direction) => {
    setActiveIndex((index) => Math.min(gallery.length - 1, Math.max(0, index + direction)));
  };
  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 8) return;
    event.preventDefault();
    const now = Date.now();
    if (now - lastWheelAt.current < 360) return;
    lastWheelAt.current = now;
    goTo(event.deltaY > 0 ? 1 : -1);
  };
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };
  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const distanceX = touchStart.current.x - (touch?.clientX ?? touchStart.current.x);
    const distanceY = touchStart.current.y - (touch?.clientY ?? touchStart.current.y);
    touchStart.current = null;
    const distance = Math.abs(distanceX) >= Math.abs(distanceY) ? distanceX : distanceY;
    if (Math.abs(distance) < 42) return;
    goTo(distance > 0 ? 1 : -1);
  };

  return (
    <div className="project-preview-modal" role="dialog" aria-modal="true" aria-label={`${project.title} 完整预览`} onWheel={handleWheel}>
      <header className="project-preview-header">
        <div>
          <span>{project.eyebrow}</span>
          <h2>{project.title}</h2>
        </div>
        <button className="project-preview-close" onClick={onClose} aria-label="关闭完整预览"><X size={21} /></button>
      </header>
      <div className="project-preview-stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button className="project-preview-nav" onClick={() => goTo(-1)} disabled={activeIndex === 0} aria-label="上一张"><ArrowLeft size={20} /></button>
        <div className="project-preview-image-wrap">
          <img key={gallery[activeIndex]} className="project-preview-image" src={gallery[activeIndex]} alt={`${project.title} ${activeIndex + 1}`} decoding="async" />
        </div>
        <button className="project-preview-nav" onClick={() => goTo(1)} disabled={activeIndex === gallery.length - 1} aria-label="下一张"><ArrowRight size={20} /></button>
      </div>
      <footer className="project-preview-footer">
        <div className="project-preview-counter"><strong>{String(activeIndex + 1).padStart(2, '0')}</strong><span>/ {String(gallery.length).padStart(2, '0')}</span></div>
        <div className="project-preview-thumbs" aria-label="项目图片目录">
          {gallery.map((image, index) => (
            <button key={image} className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} aria-label={`查看第 ${index + 1} 张`}>
              <img src={image} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default ProjectPreviewModal;
