import React from 'react';
import { Link } from 'react-router-dom';

function Event4() {
  return (
    <div>
      {/* Event Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Sunday, February 16, 2026</p>
          <h1 className="hero-title">All-Star Game</h1>
          <p className="hero-description">
            The brightest stars in basketball collide in the ultimate exhibition
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
              <div className="info-value">Sunday, February 16, 2026<br/>8:00 PM ET</div>
            </div>

            <div className="info-box">
              <div className="info-label">Duration</div>
              <div className="info-value">Approximately 3 hours</div>
            </div>

            <div className="info-box">
              <div className="info-label">Format</div>
              <div className="info-value">East vs West Conference</div>
            </div>

            <div className="info-box">
              <div className="info-label">Players</div>
              <div className="info-value">24 All-Stars Selected</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About The Game</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              The NBA All-Star Game is the pinnacle event of All-Star Weekend, bringing together the league's 24 best players for an unforgettable exhibition. Voted in by fans, players, and media, these elite athletes represent the absolute peak of basketball excellence.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              The Eastern Conference takes on the Western Conference in a showcase of incredible skill, athleticism, and entertainment. While competitive spirit runs deep, the All-Star Game allows players to demonstrate their full offensive arsenals without the defensive intensity of regular season play.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Expect highlight-reel dunks, no-look passes, deep three-pointers, and moments of brilliance that can only happen when the world's best play together. The game features special rules and an innovative format designed to maximize excitement and keep fans engaged until the final buzzer.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              The winning team shares a substantial prize pool donated to their chosen charities, adding meaningful stakes to the competition while supporting important causes across the country.
            </p>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link to="/contact" className="btn btn-primary">Get Tickets</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Format */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Game Format</h2>
          </div>

          <div className="events-grid">
            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">Q1</span>
              <h3>First Quarter</h3>
              <p>
                Teams establish their rhythm with 12 minutes of action. Starters showcase their skills while setting the tone for an entertaining evening of world-class basketball.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">Q2</span>
              <h3>Second Quarter</h3>
              <p>
                Reserves enter the game, bringing fresh energy and new dynamics. Every player gets meaningful minutes to shine on basketball's biggest stage before the halftime show.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">Q3</span>
              <h3>Third Quarter</h3>
              <p>
                Intensity picks up as teams begin playing for pride and bragging rights. Coaches mix lineups to create exciting combinations of talent rarely seen during the regular season.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">Q4</span>
              <h3>Final Quarter</h3>
              <p>
                The Elam Ending ensures a dramatic finish. The clock turns off and teams race to reach the target score first, guaranteeing the game ends on a made basket for maximum excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Selection */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Player Selection</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="info-box" style={{marginBottom: '2rem'}}>
              <div className="info-label">Fan Voting (50%)</div>
              <div className="info-value">Fans worldwide cast votes for their favorite players through NBA.com, the NBA app, and social media platforms.</div>
            </div>

            <div className="info-box" style={{marginBottom: '2rem'}}>
              <div className="info-label">Player Voting (25%)</div>
              <div className="info-value">Current NBA players vote for the peers they most respect, providing insider perspective on who truly deserves All-Star recognition.</div>
            </div>

            <div className="info-box" style={{marginBottom: '2rem'}}>
              <div className="info-label">Media Voting (25%)</div>
              <div className="info-value">A panel of basketball media members provides expert analysis and voting based on season performance and overall impact.</div>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <p style={{color: 'var(--light-gray)', fontSize: '1.1rem'}}>
                The two players with the most votes in each conference serve as team captains, drafting their rosters from the remaining All-Star pool.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event4;
