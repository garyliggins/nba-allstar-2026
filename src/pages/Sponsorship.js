import React from 'react';
import { Link } from 'react-router-dom';

function Sponsorship() {
  return (
    <div>
      {/* Page Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Partner With Excellence</p>
          <h1 className="hero-title">Sponsorship Opportunities</h1>
          <p className="hero-description">
            Align your brand with basketball's biggest weekend
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Sponsor All-Star Weekend</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              NBA All-Star Weekend 2026 offers unparalleled exposure to a global audience of millions. This premier basketball event attracts passionate fans, media coverage from around the world, and provides sponsors with exceptional opportunities to connect with diverse demographics.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              As a sponsor, your brand will receive prominent placement across all event marketing materials, in-arena signage, broadcast integration, digital platforms, and social media campaigns. You'll gain access to exclusive hospitality experiences, player meet and greets, and premium seating for your clients and employees.
            </p>

            <p style={{color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              Our sponsorship packages are customizable to meet your specific marketing objectives and budget. Whether you're looking to increase brand awareness, entertain key clients, or engage with the basketball community, we have opportunities that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sponsorship Tiers</h2>
            <p className="section-subtitle">
              Flexible packages designed to maximize your investment
            </p>
          </div>

          <div className="sponsor-tiers">
            <div className="tier-card">
              <div className="tier-name">Bronze</div>
              <div className="tier-price">$50,000</div>
              <ul className="tier-features">
                <li>Logo placement on event website</li>
                <li>Social media mentions (3 posts)</li>
                <li>10 general admission tickets</li>
                <li>Logo in printed programs</li>
                <li>Recognition in press releases</li>
                <li>Digital marketing assets</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '1rem'}}>
                Inquire Now
              </Link>
            </div>

            <div className="tier-card">
              <div className="tier-name">Silver</div>
              <div className="tier-price">$150,000</div>
              <ul className="tier-features">
                <li>All Bronze benefits included</li>
                <li>In-arena signage placement</li>
                <li>Social media mentions (10 posts)</li>
                <li>25 premium seating tickets</li>
                <li>VIP hospitality suite access</li>
                <li>Logo on event merchandise</li>
                <li>Broadcast logo integration</li>
                <li>Player meet and greet opportunity</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '1rem'}}>
                Inquire Now
              </Link>
            </div>

            <div className="tier-card featured">
              <div className="tier-name">Gold</div>
              <div className="tier-price">$350,000</div>
              <ul className="tier-features">
                <li>All Silver benefits included</li>
                <li>Title sponsor of specific event</li>
                <li>Premium courtside signage</li>
                <li>Social media mentions (25 posts)</li>
                <li>50 VIP seating tickets</li>
                <li>Exclusive hospitality experiences</li>
                <li>Naming rights opportunities</li>
                <li>Custom activation space</li>
                <li>Press conference participation</li>
                <li>Multi-player appearance package</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{marginTop: '1rem'}}>
                Inquire Now
              </Link>
            </div>

            <div className="tier-card">
              <div className="tier-name">Platinum</div>
              <div className="tier-price">$750,000+</div>
              <ul className="tier-features">
                <li>All Gold benefits included</li>
                <li>Presenting sponsor designation</li>
                <li>Maximum visibility placement</li>
                <li>Unlimited social media integration</li>
                <li>100 VIP tickets + hospitality</li>
                <li>Exclusive brand activations</li>
                <li>Custom partnership opportunities</li>
                <li>Executive access to all events</li>
                <li>Year-round NBA partnership perks</li>
                <li>Completely customizable package</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '1rem'}}>
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sponsor Benefits</h2>
          </div>

          <div className="events-grid">
            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">01</span>
              <h3>Global Exposure</h3>
              <p>
                Reach millions of viewers worldwide through broadcast coverage, streaming platforms, and social media. Your brand will be featured across multiple channels throughout the weekend.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">02</span>
              <h3>VIP Experiences</h3>
              <p>
                Provide unforgettable experiences for your clients and team with premium seating, hospitality suites, and exclusive access to players and NBA legends.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">03</span>
              <h3>Brand Activation</h3>
              <p>
                Create custom experiences and activations that engage fans directly. From interactive displays to product sampling, make your brand memorable.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">04</span>
              <h3>Digital Integration</h3>
              <p>
                Leverage our extensive digital platforms including the event website, mobile app, email campaigns, and social media to amplify your message.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">05</span>
              <h3>Media Coverage</h3>
              <p>
                Benefit from extensive media coverage including press releases, interviews, and features that highlight your partnership and commitment to basketball.
              </p>
            </div>

            <div className="event-card" style={{cursor: 'default'}}>
              <span className="event-number">06</span>
              <h3>Community Impact</h3>
              <p>
                Align your brand with positive community initiatives. Sponsorships support youth basketball programs and community development efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Become A Sponsor</h2>
            <p className="section-subtitle">
              Let's discuss how we can create a partnership that drives results for your brand
            </p>
            <div style={{marginTop: '2rem'}}>
              <Link to="/contact" className="btn btn-primary">Contact Our Sponsorship Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsorship;
