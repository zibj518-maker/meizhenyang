import { ArrowUpRight } from 'lucide-react';

function Footer({ profile }) {
  return (
    <footer id="contact" className="footer-section section-dark">
      <div className="section-inner">
        <div className="footer-top"><span>Have a good idea?</span><span>Let&apos;s make it real.</span></div>
        <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={30} strokeWidth={1.5} /></a>
        <div className="footer-bottom"><div><strong>{profile.brand}</strong><span>{profile.role}</span></div><div className="footer-links">{profile.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div><div className="footer-location"><span>{profile.location}</span><span>© 2026</span></div></div>
      </div>
    </footer>
  );
}

export default Footer;
