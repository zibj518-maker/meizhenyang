import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

function Navigation({ profile }) {
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const frameRef = useRef(0);
  const lastModeRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    const updateTheme = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = 0;
        const headerHeight = 72;
        const lightSection = [...document.querySelectorAll('.section-light')].some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= headerHeight / 2 && rect.bottom >= headerHeight / 2;
        });
        if (lastModeRef.current !== lightSection) {
          lastModeRef.current = lightSection;
          setLightMode(lightSection);
        }
      });
    };
    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
    window.addEventListener('resize', updateTheme);
    return () => {
      window.removeEventListener('scroll', updateTheme);
      window.removeEventListener('resize', updateTheme);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const goTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8 md:pt-6">
      <div className={`nav-bar mx-auto flex max-w-[1440px] items-center justify-between ${lightMode ? 'nav-light' : ''}`}>
        <button className="nav-home" onClick={() => goTo('#hero')} aria-label="返回首页">
          <span className="status-dot" />
          <span className="hidden sm:inline">Home</span>
          <span className="sm:hidden">{profile.shortName}</span>
        </button>
        <nav className="hidden items-center gap-2 md:flex" aria-label="主导航">
          {links.slice(1).map((link) => (
            <button key={link.href} className="nav-link" onClick={() => goTo(link.href)}>
              {link.label}
            </button>
          ))}
          <button className="contact-pill" onClick={() => goTo('#contact')}>
            联系我 <ArrowUpRight size={15} strokeWidth={1.8} />
          </button>
        </nav>
        <button
          className="icon-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          {links.map((link, index) => (
            <button key={link.href} onClick={() => goTo(link.href)}>
              <span>0{index + 1}</span>{link.label}
            </button>
          ))}
          <button onClick={() => goTo('#contact')}>
            <span>05</span>联系我 <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
