import React from "react";

import Wayanad from "../assets/Wayanad.jpg";
import Cochin from "../assets/Cochin.jpg";
import Munnar from "../assets/Munnar.jpg";
import Calicut from "../assets/Calicut.jpg";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Explore Destinations</h1>
          <p className="lead text-secondary mt-3">
            Handpicked locations across Kerala, curated for smart, time-based travel planning. </p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-lg-6">
            <div className="card bg-black text-light h-100 border-0 destination-card">
              <div className="position-relative">
                <img src={Wayanad} className="card-img-top" alt="Wayanad" />
                <span className="destination-tag">Nature</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Wayanad</h5>
                <p className="card-text text-secondary">  Forests, waterfalls, and peaceful nature escapes. </p>
              </div>
            </div>
          </div>

  
          <div className="col-12 col-lg-6">
            <div className="card bg-black text-light h-100 border-0 destination-card">
              <div className="position-relative">
                <img src={Cochin} className="card-img-top" alt="Cochin" />
                <span className="destination-tag">Heritage</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Cochin</h5>
                <p className="card-text text-secondary">  Historic forts, backwaters, and modern city life.</p>
              </div>
            </div>
          </div>

        
          <div className="col-12 col-lg-6">
            <div className="card bg-black text-light h-100 border-0 destination-card">
              <div className="position-relative">
                <img src={Munnar} className="card-img-top" alt="Munnar" />
                <span className="destination-tag">Hills</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Munnar</h5>
                <p className="card-text text-secondary">  Misty hills, tea gardens, and cool climate.</p>
              </div>
            </div>
          </div>

        
          <div className="col-12 col-lg-6">
            <div className="card bg-black text-light h-100 border-0 destination-card">
              <div className="position-relative">
                <img src={Calicut} className="card-img-top" alt="Calicut" />
                <span className="destination-tag">Food & Culture</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Calicut</h5>
                <p className="card-text text-secondary">  Beaches, food streets, and cultural heritage.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-5 pt-5 border-top border-secondary">
          <h2 className="fw-bold mb-3">Plan Your Trip Based on Time</h2>
          <p className="text-secondary mb-4"> Choose your destination, select your available hours, and get a smart itinerary instantly.</p>

          <button className="btn btn-primary px-4 py-2 fw-semibold" onClick={() => navigate("/Planner")}>
            Start Planning </button>
        </div>

      </div>
    </section>
  );
};

export default Destinations;
