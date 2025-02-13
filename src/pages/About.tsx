import React, { useState } from 'react';
import '../styles/pages/About.css';
import { Award, Clock, Phone, Mail, MapPin, Facebook, Instagram, ChevronDown, ChevronUp, Users, CheckCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do you offer any warranties on your work?",
      answer: "Yes, we offer a warranty on all labor and parts provided by our company. Specific warranty terms depend on the service and parts used but typically range from 1 to 5 years."
    },
    {
      question: "What qualifies as an electrical emergency?",
      answer: "Any electrical issue that poses immediate safety risks or significantly disrupts your daily activities. This includes power outages, exposed wiring, burning smells, or electrical fires."
    },
    {
      question: "Do you install smart home devices?",
      answer: "Yes, we provide comprehensive smart home installation and integration services. Our team is experienced in setting up and configuring various smart home systems including lighting, security, and home automation."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>About Coastline Current Solutions</h1>
            <p className="subtitle">Powering the Central Coast Since 1983</p>
            <button className="primary-button">Contact Us Today</button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-tag">Our Story</span>
              <h2>Trusted Electrical Experts</h2>
              <p>With over 40 years of experience in the electrical industry, we are committed to providing the highest quality service to our community. Our team of certified electricians is equipped with the latest tools and ongoing training to handle everything from small residential fixes to large commercial projects.</p>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <Clock className="highlight-icon" size={24} />
                  <div className="highlight-text">
                    <h4>40+ Years</h4>
                    <p>Industry Experience</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Award className="highlight-icon" size={24} />
                  <div className="highlight-text">
                    <h4>10,000+</h4>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Users className="highlight-icon" size={24} />
                  <div className="highlight-text">
                    <h4>Certified Team</h4>
                    <p>Expert Electricians</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" size={24} />
                  <div className="highlight-text">
                    <h4>100% Satisfaction</h4>
                    <p>Guaranteed Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-images">
              <div className="image-grid">
                <div className="image-placeholder main-image">
                  <span>Professional Team</span>
                </div>
                <div className="image-placeholder">
                  <span>At Work</span>
                </div>
                <div className="image-placeholder">
                  <span>Customer Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Business Section */}
      <section className="family-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Family Owned</span>
            <h2>Local Business, Global Standards</h2>
          </div>
          <div className="family-grid">
            <div className="family-images">
              <div className="image-grid">
                <div className="image-placeholder main-image">
                  <span>Family Business</span>
                </div>
                <div className="image-placeholder">
                  <span>Team Meeting</span>
                </div>
                <div className="image-placeholder">
                  <span>Customer Service</span>
                </div>
              </div>
            </div>
            <div className="text-content">
              <p>As a family-operated business, we take immense pride in serving our local community with the highest standards of electrical services. Our deep roots in the Central Coast region have helped us build lasting relationships based on trust and excellence.</p>
              <p>Every project we undertake reflects our commitment to quality, safety, and customer satisfaction. We're not just service providers – we're your neighbors, committed to making our community better and safer.</p>
              <button className="primary-button">Schedule a Service</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder circular"><span>RB</span></div>
              </div>
              <div className="testimonial-content">
                <div className="rating">★★★★★</div>
                <p>"My mum had Caileb and Jesse from Coastal Current Solutions install a new electric oven for her. She was really happy with their work. They were friendly, on time and she would highly recommend them to anyone else."</p>
                <div className="author">- Rhonda Butt</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder circular"><span>JN</span></div>
              </div>
              <div className="testimonial-content">
                <div className="rating">★★★★★</div>
                <p>"Big shoutout to team at Coastline Current Solutions! My hot water system died on me, and they came out quick to sort it. While they were here, they even fixed up the dodgy lighting in my shed without me even asking. Legends!"</p>
                <div className="author">- Jordan Nikora</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <div className="image-placeholder circular"><span>TM</span></div>
              </div>
              <div className="testimonial-content">
                <div className="rating">★★★★★</div>
                <p>"Massive thank you to the team at Coastline Current Solutions. They went above and beyond to provide outstanding service to our family when we were in need. The team were very friendly and reliable and showed up on time."</p>
                <div className="author">- Tristen Mar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQs</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  {activeAccordion === index ? 
                    <ChevronUp className="faq-icon" /> : 
                    <ChevronDown className="faq-icon" />
                  }
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact Us</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={20} className="contact-icon" />
                  <p>92 Wells St, EAST GOSFORD NSW 2250</p>
                </div>
                <div className="contact-item">
                  <Phone size={20} className="contact-icon" />
                  <p>02 4304 5913</p>
                </div>
                <div className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <p>sales@coastlinecurrentsolutions.com.au</p>
                </div>
              </div>
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <Facebook size={20} />
                  </a>
                  <a href="#" aria-label="Instagram" className="social-icon">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <div className="image-placeholder">
                <span>Location Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                </ul>
              </div>
              <div className="legal-links">
                <h3>Legal</h3>
                <ul>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p> 2024 by Coastline Current Solutions Pty Ltd All Rights Reserved.</p>
              <p>Designed and Developed by My Digital Group</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
