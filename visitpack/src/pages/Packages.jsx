import React from 'react'

import packagecalicut from "../assets/packagecalicut.jpg";
import packagemunnar from "../assets/packagemunnar.jpg";
import packagecochin from "../assets/packagecochin.jpg";
import packagevarkala from "../assets/packagevarkala.jpg";
import packagewayanad from "../assets/packagewayanad.jpg";
import packagealappuzha from "../assets/packagealappuzha.jpg";

import { useNavigate } from 'react-router-dom'

const Packages = () => {

const navigate = useNavigate();

  return (
   <section className="bg-dark py-5">
        <div className="container text-center text-light">
          <h1 className="fw-bold display-5">  Travel Packages</h1>
          <p className="text-secondary fs-5 mt-3">
            Curated itineraries designed around time, comfort, and local experiences.</p>

  <div className="row g-4 text-start">

      <div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img src={packagecalicut} className="card-img-top"alt="Calicut Package" />

    <div className="card-body d-flex flex-column">
      <h5 className="card-title fw-bold">Calicut Explorer</h5>
     
      <p className="text-secondary small mb-2">
        Explore beaches, heritage streets, and authentic Malabar food through a  time-optimized city experience.</p>

     
      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> Full Day <br />
        😌 <span className="text-secondary">Pace:</span> Relaxed
      </p>

    
      <ul className="small text-secondary mb-3 ps-3">
        <li>Kozhikode Beach & sunset views</li>
        <li>SM Street & Mananchira Square</li>
        <li>Malabar food experience</li>
      </ul>

      <p className="small mb-3">
        🍽 <span className="text-secondary">Food Focus:</span> Biriyani, halwa, seafood</p>

      <button className="btn btn-secondary  btn-sm mt-auto">  View Package</button>
    </div>
  </div>
</div>


     
     <div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img src={packagecochin} className="card-img-top" alt="Kochi Package"/>

    <div className="card-body d-flex flex-column">
    
      <h5 className="card-title fw-bold">Cochin Heritage Tour</h5>

      <p className="text-secondary small mb-2">
        Discover Kochi's colonial history, cultural landmarks, and vibrant café culture through a relaxed heritage experience.  </p>

      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> 6-8 Hours <br />
        🚶 <span className="text-secondary">Pace:</span> Moderate
      </p>

      <ul className="small text-secondary mb-3 ps-3">
        <li>Fort Kochi heritage walk</li>
        <li>Chinese Fishing Nets</li>
        <li>Jew Town & Mattancherry</li>
      </ul>

      <p className="small mb-3">
        ☕ <span className="text-secondary">Food Focus:</span> Cafés, seafood,
        local cuisine
      </p>

      <button className="btn btn-secondary  btn-sm mt-auto"> View Package </button>
    </div>
  </div>
</div>

    


     <div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img  src={packagevarkala} className="card-img-top" alt="Varkala Package" />

    <div className="card-body d-flex flex-column">
     
      <h5 className="card-title fw-bold">Varkala Cliff Escape</h5>

      <p className="text-secondary small mb-2">
        Experience Varkala's iconic cliff views, serene beaches, and peaceful coastal atmosphere in a relaxed seaside getaway.
      </p>

      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> 4-6 Hours <br />
        😌 <span className="text-secondary">Pace:</span> Relaxed
      </p>

      <ul className="small text-secondary mb-3 ps-3">
        <li>Varkala Cliff viewpoints</li>
        <li>Varkala Beach walk</li>
        <li>Sunset views over the Arabian Sea</li>
      </ul>

      <p className="small mb-3">
        🍽 <span className="text-secondary">Food Focus:</span> Cafés, seafood, coastal cuisine</p>

      <button className="btn btn-secondary  btn-sm mt-auto">  View Package </button>
    </div>
  </div>
</div>



<div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img  src={packagemunnar}  className="card-img-top"  alt="Munnar Package" />

    <div className="card-body d-flex flex-column">
     
      <h5 className="card-title fw-bold">Munnar Hills Retreat</h5>

      <p className="text-secondary small mb-2">
        Explore misty hill landscapes, lush tea plantations, and peaceful viewpoints in a calm and refreshing mountain escape. </p>

      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> 6-8 Hours <br />
        🌿 <span className="text-secondary">Pace:</span> Relaxed
      </p>

      <ul className="small text-secondary mb-3 ps-3">
        <li>Tea garden plantation walk</li>
        <li>Mattupetty Dam & lake views</li>
        <li>Echo Point and hill viewpoints</li>
      </ul>

      <p className="small mb-3">
        🍽 <span className="text-secondary">Food Focus:</span> Local Kerala meals, hill-side cafés</p>

      <button className="btn btn-secondary  btn-sm mt-auto">
        View Package
      </button>
    </div>
  </div>
</div>


      
     <div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img src={packagealappuzha} className="card-img-top" alt="Alappuzha Package"/>

    <div className="card-body d-flex flex-column">
     
      <h5 className="card-title fw-bold">
        Alappuzha Backwater Experience </h5>

      <p className="text-secondary small mb-2">
        Enjoy the peaceful charm of Kerala's backwaters with houseboat views,
        scenic canals, and a relaxed waterside atmosphere.
      </p>

      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> Full Day <br />
        😌 <span className="text-secondary">Pace:</span> Relaxed
      </p>

      <ul className="small text-secondary mb-3 ps-3">
        <li>Backwater cruise experience</li>
        <li>Houseboat views and canals</li>
        <li>Village life along waterways</li>
      </ul>

      <p className="small mb-3">
        🍽 <span className="text-secondary">Food Focus:</span> Kerala meals,  freshwater fish, traditional lunch </p>

      <button className="btn btn-secondary btn-sm mt-auto"> View Package </button>
    </div>
  </div>
</div>




    <div className="col-12 col-md-6 col-lg-4">
  <div className="card h-100 bg-dark text-light border-secondary">
    <img src={packagewayanad} className="card-img-top" alt="Wayanad Package" />

    <div className="card-body d-flex flex-column">
     
      <h5 className="card-title fw-bold">Wayanad Nature Trail</h5>

      
      <p className="text-secondary small mb-2">
        Explore Wayanad's lush forests, waterfalls, and wildlife-rich landscapes
        through a peaceful and nature-focused travel experience.
      </p>

      <p className="small mb-2">
        ⏱ <span className="text-secondary">Duration:</span> Full Day <br />
        🌿 <span className="text-secondary">Pace:</span> Moderate
      </p>

      <ul className="small text-secondary mb-3 ps-3">
        <li>Edakkal Caves exploration</li>
        <li>Soochipara Waterfalls visit</li>
        <li>Forest walks and viewpoints</li>
      </ul>

      <p className="small mb-3">
        🍽 <span className="text-secondary">Food Focus:</span> Local Kerala meals, traditional spices</p>

      <button className="btn btn-secondary btn-sm mt-auto">  View Package</button>
    </div>
  </div>
</div>

</div>





  <div className="text-center text-light mt-5">

  <h3 className="fw-bold mb-3"> Didn't find the perfect package?</h3>

  <p className="text-secondary fs-5 mb-4">Build a personalized itinerary based on your available time.</p>

  <div className="d-flex justify-content-center gap-3 flex-wrap">
    <button className="btn btn-primary px-4 "  onClick={() => navigate("/Planner") }>
      Use Time-Based Planner </button>

    <button className="btn btn-secondary px-4"  onClick={() => navigate("/Contact") }>
      Contact Us </button>
  </div>

</div>

        </div>
      </section>

  )
}

export default Packages
