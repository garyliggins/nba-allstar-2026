import React from 'react';
import { Link } from 'react-router-dom';

function Event3() {
  return (
    <div>
      {/* Event Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Saturday, February 15, 2026</p>
          <h1 className="hero-title">Skills Challenge</h1>
          <p className="hero-description">
            Speed meets precision in basketball's ultimate obstacle course
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
              <div className="info-value">Saturday, February 15, 2026<br/>6:30 PM ET</div>
            </div>

            <div className="info-box">
              <div className="info-label">Duration</div>
              <div className="info-value">Approximately 45 minutes</div>
            </div>

            <div className="info-box">
              <div className="info-label">Participants</div>
              <div className="info-value">8 Versatile Players</div>
            </div>

            <div className="info-box">
              <div className="info-label">Prize</div>
              <div className="info-value">$25,000 Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About The Challenge</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              The Skills Challenge tests the complete basketball player. This timed obstacle course requires participants to demonstrate ball-handling, passing accuracy, agility, and shooting ability all in rapid succession. It's a showcase of the modern NBA player's versatility.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Players navigate through a challenging course featuring dribbling stations around obstacles, precision passing through targets, and shooting from multiple positions. Each element must be completed successfully before advancing, with the clock relentlessly ticking.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              The competition features head-to-head matchups in a bracket format. Speed is crucial, but accuracy determines advancement. One missed pass or failed shot can cost precious seconds and ultimately the competition.
            </p>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link to="/contact" className="btn btn-primary">Get Tickets</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Breakdown */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Course Breakdown</h2>
          </div>

          <div className="events-grid">
            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">01</span>
              <h3>Ball Handling</h3>
              <p>
                Navigate through a series of obstacles while maintaining control of the basketball. Players must weave through cones with precision and speed, showcasing elite dribbling skills.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">02</span>
              <h3>Passing Accuracy</h3>
              <p>
                Hit specific targets with chest passes and bounce passes. Precision is paramount as missed targets require retrieval and retry, eating valuable seconds off the clock.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">03</span>
              <h3>Three-Point Shot</h3>
              <p>
                Sink a three-pointer from a designated spot. Players can take multiple attempts, but the clock never stops. The pressure mounts with each miss as opponents complete their runs.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">04</span>
              <h3>Final Sprint</h3>
              <p>
                Complete a layup on the opposite end to stop the clock. The fastest times advance through the bracket until a champion is crowned in the final head-to-head matchup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event3;
