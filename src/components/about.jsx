import React from "react";
import "./pages.css";
import "./about.css";

const About = () => {
  return (
    <div className="">
      {/* Header Section */}
      <section className="w-7xl h-60 m-auto my-8 text-center">
        <h1>About SwiftCourier</h1>
        <p>
          Fast, reliable, and secure delivery services — connecting people and
          businesses worldwide.
        </p>
      </section>

      {/* Company Overview */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          SwiftCourier is one of the leading courier and logistics companies in
          India. Since our founding in 2023, we have been committed to providing
          our customers with efficient and secure delivery services. We handle
          everything from documents to heavy shipments with utmost care and
          professionalism.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To deliver parcels quickly, safely, and cost-effectively, ensuring
            complete customer satisfaction and trust.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>

          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>✔️ Same-Day Delivery</li>
          <li>✔️ Express Parcel Delivery</li>
          <li>✔️ International Shipping</li>
          <li>✔️ Bulk Courier Services</li>
          <li>✔️ Real-time Tracking</li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p></p>
        <p>Phone: 8002722528</p>
        <p>Address: dak sthan gonawa, nawada, bihar, India</p>
      </section>
    </div>
  );
};

export default About;
