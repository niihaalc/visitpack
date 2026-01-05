import React from 'react'

const About = () => {
  return (
     <>
  
      <section className="bg-dark py-5">
        <div className="container text-center text-light">
          <h1 className="fw-bold display-5"> About VisitPack  </h1>
          <p className="text-secondary fs-5 mt-3">
            A smart travel planning platform built around time, comfort, and meaningful experiences. </p>
        </div>
      </section>

  
      <section className="bg-dark py-5">
        <div className="container text-light">
          <h3 className="fw-bold mb-3">  What is VisitPack?</h3>
          <p className="text-secondary fs-5">
            VisitPack helps travelers explore destinations through thoughtfully curated
            packages and time-based itineraries. Instead of generic plans, VisitPack
            focuses on making the most out of the time a traveler actually has.</p>
        </div>
      </section>

    
      <section className="bg-dark py-5">
        <div className="container text-light">
          <h3 className="fw-bold mb-3">   Why I Built VisitPack </h3>
          <p className="text-secondary fs-5">
            VisitPack was born out of my passion for exploring places in a meaningful way
            and helping others experience travel without confusion or wasted time. </p>
          <p className="text-secondary fs-5">
            While planning trips for myself and for others, I realized how difficult it
            was to find itineraries that truly fit limited schedules. Many people want to
            travel but struggle to plan efficiently. </p>
          <p className="text-secondary fs-5">
            VisitPack solves this by offering smart, time-based travel packages that help
            people discover destinations comfortably, efficiently, and authentically. </p>
        </div>
      </section>

      <section className="bg-dark py-5">
        <div className="container text-light">
          <h3 className="fw-bold mb-3">  Why VisitPack? </h3>
          <ul className="text-secondary fs-5">
            <li>Time-based travel planning instead of generic packages</li>
            <li>Curated experiences focused on comfort and realism</li>
            <li>Ideal for short trips, weekends, and busy schedules</li>
            <li>Simple planning without overwhelming choices</li>
          </ul>
        </div>
      </section>

    
      <section className="bg-dark py-5">
        <div className="container text-light">
          <h3 className="fw-bold mb-4">    How It Works  </h3>

          <div className="row text-secondary fs-5">
            <div className="col-12 col-md-4 mb-3">
              <strong className="text-light">1.</strong> Choose your destination
            </div>
            <div className="col-12 col-md-4 mb-3">
              <strong className="text-light">2.</strong> Select your available time
            </div>
            <div className="col-12 col-md-4 mb-3">
              <strong className="text-light">3.</strong> Get a smart travel plan
            </div>
          </div>
        </div>
      </section>

  
      <section className="bg-dark py-5">
        <div className="container text-center text-light">
          <h3 className="fw-bold mb-3">   Our Vision </h3>
          <p className="text-secondary fs-5">
            To make travel planning simpler, smarter, and more meaningful by helping
            people use their time wisely and experience destinations authentically. </p>
        </div>
      </section>
    </>
  );
};

export default About
