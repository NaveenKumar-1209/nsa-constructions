import { Link } from "react-router-dom";
import { Home as HomeIcon, Building, Wrench, Hammer } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Building Dreams, Creating Excellence</h1>
            <p>
              Professional construction services with over 15 years of
              experience in residential and commercial projects
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <Building size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="section-header">
            <h2>About NSA Constructions</h2>
            <p>Your trusted partner in construction excellence</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>15+ Years of Excellence</h3>
              <p>
                Since 2008, NSA Constructions has been delivering high-quality
                construction services across residential and commercial sectors.
                We pride ourselves on our commitment to quality, safety, and
                customer satisfaction.
              </p>
              <div className="stats">
                <div className="stat">
                  <h4>500+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h4>15+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h4>100%</h4>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <Hammer size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive construction solutions for all your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <HomeIcon size={40} />
              </div>
              <h3>Residential Construction</h3>
              <p>
                Custom homes, renovations, and residential projects tailored to
                your vision
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Building size={40} />
              </div>
              <h3>Commercial Construction</h3>
              <p>
                Office buildings, retail spaces, and commercial facilities built
                to last
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Wrench size={40} />
              </div>
              <h3>Renovation & Remodeling</h3>
              <p>
                Transform your existing space with our expert renovation
                services
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Get a free consultation and quote for your construction needs</p>
            <Link to="/contact" className="btn btn-white">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
