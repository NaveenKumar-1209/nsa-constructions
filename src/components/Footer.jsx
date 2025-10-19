import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NSA Constructions</h3>
            <p>
              Building dreams and creating excellence since 2008. Your trusted
              construction partner.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>
              <Phone size={16} /> (555) 123-4567
            </p>
            <p>
              <Mail size={16} /> info@nsaconstructions.com
            </p>
            <p>
              <MapPin size={16} /> 123 Construction Ave, City, State 12345
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NSA Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
