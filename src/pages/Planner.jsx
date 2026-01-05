

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import itineraryData from "../data/itineraryData";

const Planner = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      navigate("/login");
    } else {
      setCurrentUser(user);
    }
    setLoading(false);
  }, [navigate]);

  const [destination, setDestination] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [itinerary, setItinerary] = useState(null);
  const [savedPlans, setSavedPlans] = useState([]);
  const [editingPlanId, setEditingPlanId] = useState(null);

 
  useEffect(() => {
    if (!currentUser) return;
    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    setSavedPlans(plans.filter(p => p.userId === currentUser.id));
  }, [currentUser]);

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
        Loading planner...
      </div>
    );
  }

  if(!currentUser){
    return null;
  }


  const handleGeneratePlan = () => {
    if (!destination || !timeSlot) {
      alert("Please select destination and time");
      return;
    }

    if (!itineraryData[destination]?.[timeSlot]) {
      alert("No itinerary available for this selection");
      return;
    }

    setItinerary({
      destination,
      timeSlot,
      plan: itineraryData[destination][timeSlot],
    });
  };


  const handleSavePlan = () => {
    if (!itinerary || !currentUser) return;

    const plans = JSON.parse(localStorage.getItem("plans")) || [];

    if (editingPlanId) {
      const updatedPlan = {
        id: editingPlanId,
        userId: currentUser.id,
        destination,
        timeSlot,
        plan: itinerary.plan,
      };

      const updatedPlans = plans.map(p =>
        p.id === editingPlanId ? updatedPlan : p
      );

      localStorage.setItem("plans", JSON.stringify(updatedPlans));
      setSavedPlans(prev =>
        prev.map(p => (p.id === editingPlanId ? updatedPlan : p))
      );
    } else {
      const newPlan = {
        id: Date.now(),
        userId: currentUser.id,
        destination,
        timeSlot,
        plan: itinerary.plan,
      };

      localStorage.setItem("plans", JSON.stringify([...plans, newPlan]));
      setSavedPlans(prev => [...prev, newPlan]); // 🔑 KEY LINE
    }

    setEditingPlanId(null);
    setDestination("");
    setTimeSlot("");
    setItinerary(null);
  };


  const handleDeletePlan = (id) => {
    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    const updated = plans.filter(p => p.id !== id);
    localStorage.setItem("plans", JSON.stringify(updated));
    setSavedPlans(prev => prev.filter(p => p.id !== id));
  };


  const handleEditPlan = (plan) => {
    setDestination(plan.destination);
    setTimeSlot(plan.timeSlot);
    setItinerary(plan);
    setEditingPlanId(plan.id);
  };

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Time-Based Travel Planner</h1>
          <p className="lead text-secondary mt-3">
            Select your destination and available time to generate
            a smart, optimized travel itinerary.
          </p>
        </div>

     
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card bg-black text-light border-0 p-4">
              <div className="mb-3">
                <label className="form-label">Destination</label>
                <select
                  className="form-select bg-dark text-light border-secondary"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">Select destination</option>
                  {Object.keys(itineraryData).map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Available Time</label>
                <select
                  className="form-select bg-dark text-light border-secondary"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="">Select time duration</option>
                  <option value="2-4">2 - 4 Hours</option>
                  <option value="4-6">4 - 6 Hours</option>
                  <option value="6-8">6 - 8 Hours</option>
                  <option value="full">Full Day</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  className="btn px-4 py-2 fw-semibold"
                  style={{ backgroundColor: "#22c55e", color: "#0f172a", borderRadius: "30px" }}
                  onClick={handleGeneratePlan}
                >
                  Generate Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {itinerary && (
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card bg-black text-light border-0 p-4">
                <h3 className="fw-bold mb-3 text-center">Your Time-Based Itinerary</h3>

                <ul className="list-group list-group-flush">
                  {itinerary.plan.map((item, i) => (
                    <li key={i} className="list-group-item bg-black text-light border-secondary">
                      ⏱ {item}
                    </li>
                  ))}
                </ul>

                <div className="text-center mt-4">
                  <button className="btn btn-success" onClick={handleSavePlan}>
                    {editingPlanId ? "Update Plan" : "Save This Plan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      
        {savedPlans.length > 0 && (
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card bg-black text-light border-0 p-4">
                <h4 className="text-center text-success mb-4">
                  Your Saved Plans
                </h4>

                {savedPlans.map(plan => (
                  <div key={plan.id} className="mb-4 border-bottom pb-3">
                    <p className="fw-semibold">
                      {plan.destination} •{" "}
                      {plan.timeSlot === "full"
                        ? "Full Day"
                        : `${plan.timeSlot} Hours`}
                    </p>

                    <ul className="small text-secondary">
                      {plan.plan.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleEditPlan(plan)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDeletePlan(plan.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Planner;
