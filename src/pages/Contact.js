import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

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
          <div className="contact-grid">
            {/* Contact Form */}
            <div>
              <h2 style={{marginBottom: '2rem', color: 'var(--secondary)'}}>Send Us A Message</h2>
              
              {submitted ? (
                <div style={{
                  background: 'var(--mid-gray)',
                  padding: '3rem',
                  textAlign: 'center',
                  border: '2px solid var(--secondary)'
                }}>
                  <h3 style={{color: 'var(--secondary)', marginBottom: '1rem'}}>Thank You!</h3>
                  <p style={{color: 'var(--light-gray)'}}>
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Ticket Inquiry"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <h4>General Inquiries</h4>
                <p>
                  <a href="mailto:info@allstar2026.com">info@allstar2026.com</a><br/>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Ticket Sales</h4>
                <p>
                  <a href="mailto:tickets@allstar2026.com">tickets@allstar2026.com</a><br/>
                  <a href="tel:+15551234568">(555) 123-4568</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Sponsorship Opportunities</h4>
                <p>
                  <a href="mailto:sponsors@allstar2026.com">sponsors@allstar2026.com</a><br/>
                  <a href="tel:+15551234569">(555) 123-4569</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Media & Press</h4>
                <p>
                  <a href="mailto:press@allstar2026.com">press@allstar2026.com</a><br/>
                  <a href="tel:+15551234570">(555) 123-4570</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Office Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM ET<br/>
                  Saturday: 10:00 AM - 4:00 PM ET<br/>
                  Sunday: Closed
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

      {/* Map/Location Section */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              NBA All-Star Weekend 2026 Headquarters
            </p>
          </div>

          <div style={{maxWidth: '600px', margin: '2rem auto', textAlign: 'center'}}>
            <div className="info-box">
              <div className="info-label">Address</div>
              <div className="info-value">
                123 Arena Drive<br/>
                Suite 2026<br/>
                Basketball City, ST 12345
              </div>
            </div>

            <p style={{color: 'var(--light-gray)', marginTop: '2rem', lineHeight: '1.8'}}>
              Our headquarters is located in the heart of the arena district, easily accessible by public transportation and with ample parking available. Stop by during office hours for in-person assistance with tickets, sponsorships, or any questions about All-Star Weekend.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
