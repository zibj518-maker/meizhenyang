import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/portfolio';

function Services() {
  return (
    <section id="services" className="services-section section-light section-pad">
      <div className="section-inner">
        <div className="section-label light-label"><span>What I can bring</span><span>04 / 06</span></div>
        <div className="services-heading-row"><h2 className="display-title services-title">SERVICES</h2><p className="services-note">Good work lives between<br />strategy and expression.</p></div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number} className="service-item">
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ArrowUpRight className="service-arrow" size={19} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
