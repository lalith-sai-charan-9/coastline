import React from 'react';
import { 
  Phone, 
  Zap, 
  Building2, 
  Shield, 
  Clock, 
  Wrench, 
  Star, 
  ChevronRight, 
  Heart, 
  Award, 
  CheckCircle, 
  Lightbulb,
  Power,
  Sun, 
  Network,
  Home as HomeIcon
} from 'lucide-react';
import '../styles/pages/Home.css';

const HomePage: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Expert Electrical Services for Your Home & Business</h1>
          <p>Professional, reliable, and affordable electrical solutions</p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <HomeIcon size={40} />
            <h3>Residential</h3>
            <p>Complete home electrical services</p>
            <button className="text-button">Learn More <ChevronRight size={16} /></button>
          </div>
          <div className="service-card">
            <Building2 size={40} />
            <h3>Commercial</h3>
            <p>Business electrical solutions</p>
            <button className="text-button">Learn More <ChevronRight size={16} /></button>
          </div>
          <div className="service-card">
            <Zap size={40} />
            <h3>Emergency</h3>
            <p>24/7 emergency services</p>
            <button className="text-button">Learn More <ChevronRight size={16} /></button>
          </div>
          <div className="service-card">
            <Sun size={40} />
            <h3>Solar</h3>
            <p>Solar panel installation</p>
            <button className="text-button">Learn More <ChevronRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature">
            <Shield size={32} />
            <h3>Licensed & Insured</h3>
            <p>Fully certified professionals</p>
          </div>
          <div className="feature">
            <Clock size={32} />
            <h3>24/7 Service</h3>
            <p>Always here when you need us</p>
          </div>
          <div className="feature">
            <Star size={32} />
            <h3>5-Star Service</h3>
            <p>Consistently rated 5 stars</p>
          </div>
          <div className="feature">
            <Heart size={32} />
            <h3>Customer First</h3>
            <p>Your satisfaction guaranteed</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose Us</h2>
        <div className="why-us-grid">
          <div className="why-us-card">
            <Award size={40} />
            <h3>Experience</h3>
            <p>Over 20 years of expertise</p>
          </div>
          <div className="why-us-card">
            <CheckCircle size={40} />
            <h3>Quality</h3>
            <p>Premium materials and workmanship</p>
          </div>
          <div className="why-us-card">
            <Lightbulb size={40} />
            <h3>Innovation</h3>
            <p>Latest technology and solutions</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="content-wrapper">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss your electrical needs</p>
          <button className="primary-button">Contact Us Today</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
