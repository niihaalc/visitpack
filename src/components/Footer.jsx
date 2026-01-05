import React from 'react'

const Footer = () => {
  return (
      <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3>VisitPack</h3>
          <p> Smart, time-based travel planning for meaningful journeys.  </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>Planner</li>
            <li>Packages</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@visitpack.com</p>
          <p>Kerala, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>©2025 VisitPack. All rights reserved.</p>
      </div>
    </footer>
  );
};
  

export default Footer
