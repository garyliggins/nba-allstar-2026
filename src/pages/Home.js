import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">February 14-16, 2026</p>
          <h1 className="hero-title">NBA All-Star Weekend</h1>
          <p className="hero-description">
            Experience the most electrifying weekend in basketball. Four unforgettable events showcasing the world's greatest players.
          </p>
          <div className="hero-cta">
            <Link to="/event1" className="btn btn-primary">Explore Events</Link>
            <Link to="/contact" className="btn btn-secondary">Get Tickets</Link>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Weekend Events</h2>
            <p className="section-subtitle">
              Four incredible competitions featuring the NBA's elite athletes
            </p>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <span className="event-number">01</span>
              <h3>3-Point Contest</h3>
              <p>
                The league's sharpest shooters battle it out from beyond the arc in this high-stakes shooting competition. Watch precision meet pressure as players have 60 seconds to sink as many threes as possible.
              </p>
              <Link to="/event1" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">02</span>
              <h3>Slam Dunk Contest</h3>
              <p>
                Witness gravity-defying athleticism as the NBA's most explosive dunkers showcase creativity, power, and style. Each dunk is a masterpiece of aerial artistry that pushes the boundaries of what's possible.
              </p>
              <Link to="/event2" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">03</span>
              <h3>Skills Challenge</h3>
              <p>
                An obstacle course testing speed, ball-handling, passing accuracy, and shooting. Players race against the clock while demonstrating their complete skill set in this fan-favorite competition.
              </p>
              <Link to="/event3" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">04</span>
              <h3>All-Star Game</h3>
              <p>
                The main event. The best players from both conferences compete in an exhibition showcase filled with incredible plays, highlight-reel moments, and unmatched star power on one court.
              </p>
              <Link to="/event4" className="event-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Be Part of History</h2>
            <p className="section-subtitle">
              Don't miss your chance to witness basketball excellence live
            </p>
            <div style={{marginTop: '2rem'}}>
              <Link to="/contact" className="btn btn-primary">Get Your Tickets Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
