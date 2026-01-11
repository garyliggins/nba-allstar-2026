import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "When is NBA All-Star Weekend 2026?",
      answer: "NBA All-Star Weekend 2026 takes place from Friday, February 14th through Sunday, February 16th, 2026. The main events are Saturday (Skills Challenge, 3-Point Contest, and Slam Dunk Contest) and Sunday (All-Star Game)."
    },
    {
      question: "How can I purchase tickets?",
      answer: "Tickets can be purchased through our official website by visiting the Contact page and filling out the ticket request form. We'll respond within 24 hours with availability and pricing information. Tickets are also available through authorized ticket partners and the official NBA ticketing platform."
    },
    {
      question: "What events are included in the weekend?",
      answer: "The weekend features four major events: Skills Challenge (Saturday 6:30 PM), 3-Point Contest (Saturday 7:00 PM), Slam Dunk Contest (Saturday 8:15 PM), and the All-Star Game (Sunday 8:00 PM). Each event is sold separately or as part of weekend packages."
    },
    {
      question: "Are there VIP packages available?",
      answer: "Yes! We offer several VIP packages including courtside seating, pre-game meet and greets, exclusive merchandise, backstage access, and premium dining experiences. VIP packages provide unforgettable access to the weekend's events and exclusive opportunities to interact with NBA legends."
    },
    {
      question: "Where will the events take place?",
      answer: "All NBA All-Star Weekend 2026 events will take place at the same arena. Specific venue information will be announced soon. The location will provide world-class facilities for both players and fans, with state-of-the-art amenities throughout."
    },
    {
      question: "What is the ticket refund policy?",
      answer: "Tickets are generally non-refundable but may be transferred to another person. In the event of a cancelled or postponed event, full refunds will be issued. We recommend purchasing ticket insurance for additional protection. Specific terms and conditions are provided at purchase."
    },
    {
      question: "Can I bring children to the events?",
      answer: "Absolutely! NBA All-Star Weekend is a family-friendly event. Children under 2 years old can attend for free if sitting on a parent's lap. All other attendees, regardless of age, require a ticket. We recommend purchasing seats together when attending with children."
    },
    {
      question: "What items are prohibited at the venue?",
      answer: "Prohibited items include weapons, outside food and beverages, professional cameras with detachable lenses, laser pointers, and large bags. A complete list of prohibited items will be provided with your ticket confirmation. Security screening will be conducted at all entrances."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, parking is available at the venue and surrounding lots. We recommend arriving early as parking fills quickly for All-Star events. Premium parking passes are available for purchase. Public transportation and ride-sharing services are also convenient options."
    },
    {
      question: "Will there be food and beverages available?",
      answer: "Yes! The venue features numerous concession stands, restaurants, and bars offering a wide variety of food and beverage options. VIP ticket holders have access to exclusive dining areas with premium menu selections. All major credit cards are accepted."
    },
    {
      question: "How early should I arrive for events?",
      answer: "We recommend arriving at least 90 minutes before event start time. This allows time for parking, security screening, finding your seats, and enjoying pre-game entertainment. Doors typically open 2 hours before tip-off for most events."
    },
    {
      question: "Are the events broadcast on television?",
      answer: "Yes, all NBA All-Star Weekend events are broadcast nationally and internationally. Check your local listings for specific broadcast information. However, nothing compares to experiencing the energy and excitement live in the arena!"
    },
    {
      question: "What should I wear to the events?",
      answer: "Dress code is casual, but many fans wear jerseys of their favorite players. The arena is climate controlled, so dress comfortably. We recommend wearing comfortable shoes as you may do some walking. Team colors are always encouraged!"
    },
    {
      question: "Can I meet players or get autographs?",
      answer: "While player appearances are not guaranteed, VIP package holders have exclusive meet and greet opportunities. Autograph sessions and fan experiences may be scheduled throughout the weekend. Follow our social media channels for announcements about player appearances and special fan events."
    },
    {
      question: "What accessibility services are available?",
      answer: "The venue is fully accessible with wheelchair seating, accessible restrooms, elevators, and assistive listening devices. If you require accessibility accommodations, please indicate this when purchasing tickets or contact us in advance to ensure we can meet your needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="event-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Got Questions?</p>
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-description">
            Everything you need to know about NBA All-Star Weekend 2026
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{background: 'var(--dark-gray)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Still Have Questions?</h2>
            <p className="section-subtitle">
              Our team is here to help you with any additional questions
            </p>
            <div style={{marginTop: '2rem'}}>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
