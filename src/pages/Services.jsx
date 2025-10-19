import { useState } from "react";
import {
  Home as HomeIcon,
  Building,
  Wrench,
  Hammer,
  Search,
  Trash2,
  Download,
} from "lucide-react";
import Calculator from "../components/Calculator";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions tailored to your needs</p>
        </div>
      </section>

      {/* Calculator Section */}
      <Calculator />

      {/* Services Section */}
      <section className="services-detailed">
        <div className="container">
          <div className="service-item">
            <div className="service-content">
              <div className="service-icon">
                <HomeIcon size={30} />
              </div>
              <h3>Residential Construction</h3>
              <p>
                From custom homes to multi-family developments, we bring your
                residential vision to life with quality craftsmanship and
                attention to detail.
              </p>
              <ul className="service-features">
                <li>Custom Home Building</li>
                <li>Home Additions & Extensions</li>
                <li>Multi-Family Housing</li>
                <li>Luxury Residential Projects</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="service-placeholder">
                <HomeIcon size={60} />
              </div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-icon">
                <Building size={30} />
              </div>
              <h3>Commercial Construction</h3>
              <p>
                Professional commercial construction services for offices,
                retail spaces, warehouses, and industrial facilities.
              </p>
              <ul className="service-features">
                <li>Office Buildings</li>
                <li>Retail & Shopping Centers</li>
                <li>Industrial Facilities</li>
                <li>Healthcare Facilities</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="service-placeholder">
                <Building size={60} />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <div className="service-icon">
                <Wrench size={30} />
              </div>
              <h3>Renovation & Remodeling</h3>
              <p>
                Transform your existing space with our expert renovation and
                remodeling services. We work with you to achieve your desired
                outcome.
              </p>
              <ul className="service-features">
                <li>Kitchen Remodeling</li>
                <li>Bathroom Renovations</li>
                <li>Basement Finishing</li>
                <li>Whole House Renovations</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="service-placeholder">
                <Wrench size={60} />
              </div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <div className="service-icon">
                <Hammer size={30} />
              </div>
              <h3>General Contracting</h3>
              <p>
                Full-service general contracting with project management,
                subcontractor coordination, and quality control throughout the
                entire process.
              </p>
              <ul className="service-features">
                <li>Project Management</li>
                <li>Subcontractor Coordination</li>
                <li>Quality Control</li>
                <li>Timeline Management</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="service-placeholder">
                <Hammer size={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we bring your project to life</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We meet with you to understand your vision, requirements, and
                budget
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>
                Our team creates detailed plans and designs for your approval
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Construction</h3>
              <p>
                We execute the project with quality materials and skilled
                craftsmanship
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Final inspection and handover of your completed project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for a free consultation and detailed quote</p>
            <a href="/contact" className="btn btn-white">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
