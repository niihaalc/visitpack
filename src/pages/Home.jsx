import React from 'react'
import { useNavigate } from 'react-router-dom'
import Calicut from "../assets/Calicut.jpg";
import Wayanad from "../assets/Wayanad.jpg";
import Cochin from "../assets/Cochin.jpg";
import Munnar from "../assets/Munnar.jpg";


const Home = () => {

  const navigate = useNavigate();
  return (
   <>

<section className="hero">
      <div className="hero-content">
        <h1>Plan Smarter. Travel Better.</h1>
        <p>  Discover time-based travel itineraries and authentic experiences  crafted just for you. </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/Planner") }>Plan Your Trip</button>
            <button className="btn-secondary" on onClick={() => navigate ("/Destinations")}>Explore Destinations</button>
          </div>
        </div>
</section>


<section className=" p-5 bg-dark">
  <h2 className="text-center text-light mb-4"> How VisitPack Works </h2>

  <div className="row g-4">
    <div className="col-md-4">
      <div className="card h-100 bg-dark text-light border-secondary">
        <div className="card-body text-center">
          <h5 className="card-title">Choose Destination</h5>
          <p className="card-text">  Explore curated destinations across Kerala.   </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card h-100 bg-dark text-light border-secondary">
        <div className="card-body text-center">
          <h5 className="card-title">Plan by Time</h5>
          <p className="card-text">  Select your available time and preferences.</p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card h-100 bg-dark text-light border-secondary">
        <div className="card-body text-center">
          <h5 className="card-title">Travel Smart</h5>
          <p className="card-text">  Get a perfectly timed travel itinerary. </p>
        </div>
      </div>
    </div>
  </div>
</section>


  <section className="py-5" style={{ backgroundColor: "#0b0b0b" }}>
  <div className="container">
    <h2 className="text-center text-light mb-4"> Featured Destinations</h2>

    <div className="row g-4">
     
      <div className="col-lg-3 col-md-6">
        <div className="card h-100 bg-dark text-light border-secondary">
          <img  src={Calicut}  className="card-img-top"  alt="Calicut"/>
          <div className="card-body">
            <h5 className="card-title">Calicut</h5>
            <p className="card-text">    Beaches, food culture, and rich history.  </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card h-100 bg-dark text-light border-secondary">
          <img  src={Wayanad}  className="card-img-top"  alt="Wayanad"/>
          <div className="card-body">
            <h5 className="card-title">Wayanad</h5>
            <p className="card-text">    Hills, waterfalls, and wildlife escapes.  </p>
          </div>
        </div>
      </div>

  
      <div className="col-lg-3 col-md-6">
        <div className="card h-100 bg-dark text-light border-secondary">
          <img src={Cochin} className="card-img-top" alt="Cochin" />
          <div className="card-body">
            <h5 className="card-title">Cochin</h5>
            <p className="card-text">     Heritage streets and modern coastal life.   </p>
          </div>
        </div>
      </div>

  
      <div className="col-lg-3 col-md-6">
        <div className="card h-100 bg-dark text-light border-secondary">
          <img  src={Munnar}  className="card-img-top"  alt="Munnar"/>
          <div className="card-body">
            <h5 className="card-title">Munnar</h5>
            <p className="card-text">    Tea gardens, misty hills, and calm nature.  </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="py-5" style={{ backgroundColor: "#0b0b0b" }}>
  <div className="container">
    <h2 className="text-center text-light mb-4">  Why VisitPack</h2>

    <div className="row g-4 text-center">
      <div className="col-md-3 col-sm-6">
        <div className="p-4 h-100 bg-dark text-light border border-secondary rounded">
          <h5>Time-Based Planning</h5>
          <p className="mt-2">    Trips planned perfectly around your available time.  </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="p-4 h-100 bg-dark text-light border border-secondary rounded">
          <h5>Authentic Experiences</h5>
          <p className="mt-2">    Explore real culture, food, and local destinations.  </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="p-4 h-100 bg-dark text-light border border-secondary rounded">
          <h5>Smart Itineraries</h5>
          <p className="mt-2">    Optimized routes without confusion or overload.  </p>
        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="p-4 h-100 bg-dark text-light border border-secondary rounded">
          <h5>Modern Design</h5>
          <p className="mt-2">    Clean, fast, and built for today’s travelers.  </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-5" style={{ backgroundColor: "#0b0b0b" }}>
  <div className="container text-center">
    <h3 className="text-light mb-3"> Turn your time into unforgettable travel experiences.</h3>

    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
      <button className="btn btn-primary px-4 py-2" onClick={() => navigate("/Planner") }>
        Plan Your Trip
      </button>

      <button className="btn btn-secondary px-4 py-2" onClick={() => navigate("/Destinations") }>
        Explore Destinations
      </button>
    </div>
  </div>
</section>


</>


  )
}

export default Home
