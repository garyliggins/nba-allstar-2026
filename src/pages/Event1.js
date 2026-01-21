import React from 'react';
import { Link } from 'react-router-dom';

function Event1() {
  return (
    <div>
      {/* Event Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Friday February 13, 2026</p>
          <h1 className="hero-title">Friday Night Event</h1>
          <p className="hero-description">
            Friday night event at Academy LA
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="event-details">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Event Details</h2>
          </div>

          <div className="event-info-grid">
            <div className="info-box">
              <div className="info-label">Date & Time</div>
              <div className="info-value">Friday, February 13, 2026<br/>9:00 PM ET</div>
            </div>

            <div className="info-box">
              <div className="info-label">Duration</div>
              <div className="info-value">Approximately 60 minutes</div>
            </div>

            <div className="info-box">
              <div className="info-label">Participants</div>
              <div className="info-value">8 Elite Shooters</div>
            </div>

            <div className="info-box">
              <div className="info-label">Prize</div>
              <div className="info-value">$50,000 Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About The Contest</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              The 3-Point Contest brings together the NBA's most lethal long-range shooters for an intense battle of accuracy and consistency. Each participant has 60 seconds to shoot as many basketballs as possible from five designated spots around the three-point arc.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              With four standard balls worth one point each and one "money ball" worth two points at each rack, strategy becomes as important as shooting ability. Players must manage their time wisely while maintaining their shooting rhythm under the bright lights and roaring crowd.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              The top three scorers from the first round advance to the finals, where they compete for the championship and the bragging rights of being crowned the NBA's best three-point shooter.
            </p>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link to="/contact" className="btn btn-primary">Get Tickets</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Competition Format</h2>
          </div>

          <div className="events-grid">
            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">01</span>
              <h3>First Round</h3>
              <p>
                All eight participants compete. Each shooter gets 60 seconds to shoot from five spots around the arc. Four regular balls (1 point) and one money ball (2 points) at each spot.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">02</span>
              <h3>Finals</h3>
              <p>
                The top three scorers advance to the final round using the same format. All scores reset, and the highest score in the finals determines the champion.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">03</span>
              <h3>Championship</h3>
              <p>
                The winner receives $50,000 and eternal bragging rights as the league's premier three-point shooter. This prestigious title cements their legacy among the NBA's greatest marksmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event1;
