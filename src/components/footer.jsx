import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <p>© {new Date().getFullYear()}tutu raaj singhaniya</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/raaj__singhania"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/918709669804"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
