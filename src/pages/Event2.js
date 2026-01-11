import React from 'react';
import { Link } from 'react-router-dom';

function Event2() {
  return (
    <div>
      {/* Event Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Saturday, February 15, 2026</p>
          <h1 className="hero-title">Slam Dunk Contest</h1>
          <p className="hero-description">
            Where gravity becomes optional and creativity knows no bounds
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
              <div className="info-value">Saturday, February 15, 2026<br/>8:15 PM ET</div>
            </div>

            <div className="info-box">
              <div className="info-label">Duration</div>
              <div className="info-value">Approximately 75 minutes</div>
            </div>

            <div className="info-box">
              <div className="info-label">Participants</div>
              <div className="info-value">4 High-Flying Athletes</div>
            </div>

            <div className="info-box">
              <div className="info-label">Prize</div>
              <div className="info-value">$100,000 Champion</div>
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
              The Slam Dunk Contest is basketball's most spectacular showcase of athleticism and creativity. Four of the NBA's most explosive dunkers compete in a two-round format, each attempting to create unforgettable moments that will be replayed for generations.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Dunkers have multiple attempts to execute their dunks perfectly, combining power, style, and innovation. From 360-degree spins to off-the-backboard alley-oops, from jumping over props to incorporating teammates, each participant brings their unique style and creativity to the court.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              Five judges score each dunk on a scale of 6-10, with a perfect 50 representing dunk perfection. The two highest scorers from the first round advance to the finals, where they battle head-to-head for the championship and eternal glory.
            </p>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link to="/contact" className="btn btn-primary">Get Tickets</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Makes A Perfect Dunk</h2>
          </div>

          <div className="events-grid">
            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">10</span>
              <h3>Creativity</h3>
              <p>
                Originality and innovation in approach. Has this been done before? What unique elements make this dunk memorable? The most creative dunks often become instant classics.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">10</span>
              <h3>Athleticism</h3>
              <p>
                Raw power, vertical leap, and body control. The difficulty of the dunk relative to human physical capabilities. Judges look for displays of extraordinary athletic ability.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">10</span>
              <h3>Execution</h3>
              <p>
                Clean finish and style points. How well was the dunk executed? Smooth landings and confident delivery elevate a good dunk to greatness.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">10</span>
              <h3>Overall Impact</h3>
              <p>
                The "wow factor" that makes crowds erupt. Some dunks transcend technical scoring and create moments that define careers. This is where legends are born.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event2;
