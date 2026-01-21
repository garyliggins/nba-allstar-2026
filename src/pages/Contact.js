import React from 'react';

function Contact() {
  return (
    <div>
      {/* Page Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Get In Touch</p>
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-description">
            Have questions? We're here to help make your All-Star Weekend experience unforgettable
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '600px', margin: '0 auto'}}>
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <h4>General Inquiries</h4>
                <p>
                  <a href="mailto:info@supremeteamla.com">info@supremeteamla.com</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Ticket Sales</h4>
                <p>
                  <a href="mailto:info@supremeteamla.com">info@supremeteamla.com</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Sponsorship Opportunities</h4>
                <p>
                  <a href="mailto:info@supremeteamla.com">info@supremeteamla.com</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Media & Press</h4>
                <p>
                  <a href="mailto:info@supremeteamla.com">info@supremeteamla.com</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Follow Us</h4>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <a href="https://facebook.com/nba" style={{color: 'var(--secondary)', fontSize: '1.5rem'}} target="_blank" rel="noopener noreferrer">FB</a>
                  <a href="https://instagram.com/nba" style={{color: 'var(--secondary)', fontSize: '1.5rem'}} target="_blank" rel="noopener noreferrer">IG</a>
                  <a href="https://twitter.com/nba" style={{color: 'var(--secondary)', fontSize: '1.5rem'}} target="_blank" rel="noopener noreferrer">TW</a>
                  <a href="https://youtube.com/nba" style={{color: 'var(--secondary)', fontSize: '1.5rem'}} target="_blank" rel="noopener noreferrer">YT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
