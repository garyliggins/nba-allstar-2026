import React from 'react';
import { Link } from 'react-router-dom';
import image0 from '../images/image0.JPEG';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">February 13-15, 2026</p>
          <h1 className="hero-title">NBA All-Star Weekend Events</h1>
          <p className="hero-description">
            Party with SupremeTeam LA, LA Function, 92.3 The Real, Iheart Media, Headliner Market Group and more at the hottest All-Star Weekend events in Los Angeles
          </p>

          {/* Featured Image */}
          <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
            <img
              src={image0}
              alt="NBA All-Star Weekend"
              style={{maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '8px'}}
            />
          </div>

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
              Four incredible events making up an unforgettable weekend
            </p>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <span className="event-number">01</span>
              <h3>event 1</h3>
              <p>
                The league's sharpest shooters battle it out from beyond the arc in this high-stakes shooting competition. Watch precision meet pressure as players have 60 seconds to sink as many threes as possible.
              </p>
              <Link to="/event1" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">02</span>
              <h3>event 2</h3>
              <p>
                Witness gravity-defying athleticism as the NBA's most explosive dunkers showcase creativity, power, and style. Each dunk is a masterpiece of aerial artistry that pushes the boundaries of what's possible.
              </p>
              <Link to="/event2" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">03</span>
              <h3>event 3</h3>
              <p>
                An obstacle course testing speed, ball-handling, passing accuracy, and shooting. Players race against the clock while demonstrating their complete skill set in this fan-favorite competition.
              </p>
              <Link to="/event3" className="event-link">
                Learn More →
              </Link>
            </div>

            <div className="event-card">
              <span className="event-number">04</span>
              <h3>event 4</h3>
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
            <h2 className="section-title">All Events Will Sell Out!</h2>
            <p className="section-subtitle">
              Don't miss your chance to attend the best events all weekend long
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
