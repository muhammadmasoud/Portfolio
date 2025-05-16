import { Fragment } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'WEB DESIGN', id: 'web-design', color: 'light' },
    { title: 'MOBILE DESIGN', id: 'mobile-design', color: 'dark' },
    { title: 'LOGO DESIGN', id: 'logo-design', color: 'light' },
    { title: 'WEB APPLICATION\nDEVELOPMENT', id: 'web-app-dev', color: 'dark' },
    { title: 'MOBILE APPLICATION\nDEVELOPMENT', id: 'mobile-app-dev', color: 'light' },
    { title: 'PWA\nDEVELOPMENT', id: 'pwa-dev', color: 'dark' }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              className={`portfolio-grid-item ${item.color === 'dark' ? 'dark' : 'light'}`}
              key={index}
              id={item.id}
            >
              <Fragment>
                <div className="portfolio-item-content">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <div className="portfolio-item-line"></div>
                </div>
              </Fragment>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
