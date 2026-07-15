import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { profile } from '../data/portfolio';

function ImageModal({ item, onClose }) {
  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(item));
    return () => document.body.classList.remove('modal-open');
  }, [item]);

  if (!item) return null;
  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${item.title} 作品预览`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="image-modal-inner">
        <button className="modal-close" onClick={onClose} aria-label="关闭作品预览"><X size={22} /></button>
        <div className="modal-media"><img src={item.poster} alt={item.title} decoding="async" /></div>
        <div className="modal-caption"><div><span>Selected work / {item.type}</span><h2>{item.title}</h2></div><a href={`mailto:${profile.email}?subject=${encodeURIComponent(item.title)} 项目交流`}>Talk about this project <ArrowUpRight size={17} /></a></div>
      </div>
    </div>
  );
}

export default ImageModal;
