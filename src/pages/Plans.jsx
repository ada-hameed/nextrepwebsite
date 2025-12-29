import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaCheck, FaTimes, FaDumbbell } from "react-icons/fa";
import api from "../api"; // <-- axios instance
import Footer from "../components/Footer";
function Plans() {
  const [plans, setPlans] = useState([]);
  const [activeMembers, setActiveMembers] = useState(0);

  useEffect(() => {
    // Fetch Active Plans
    api
      .get("/GymPlans/GetActivePlans")
      .then((res) => {
        if (res.data.resp && res.data.respObj) {
          setPlans(res.data.respObj);
        }
      })
      .catch((err) => console.error("Failed to fetch plans:", err));

    // Fetch Active Membership Count
    api
      .get("/Membership/GetActiveMemberships")
      .then((res) => {
        if (res.data.resp && res.data.respObj) {
          setActiveMembers(res.data.respObj.length);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="plans-page">
      <Navbar />

      {/* Hero Section */}
      <div
        className="plans-hero-section"
        style={{
          background:
            "url('assets/img/plan1.png') center center / cover no-repeat",
        }}
      >
        <div className="container text-center">
          <div className="plans-hero-content">
            <div className="hero-badge">
              <span>MEMBERSHIP PLANS</span>
            </div>
            <h1>Choose Your Fitness Journey</h1>
            <p>
              Transform your body, mind, and life with our expertly designed gym
              memberships
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{activeMembers} +</span>
                <span className="stat-label">Active Members</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Gym Access</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Running</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <section className="premium-plans-area">
        <div className="container">
          <div className="row justify-content-center">
            {plans.map((plan) => (
              <div key={plan.id} className="col-lg-4 col-md-6 d-flex mb-5">
                <div className="pricing-card">
                  <div className="plan-header">
                    <div className="plan-icon">
                      <FaDumbbell />
                    </div>
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                  </div>

                  <div className="plan-price">
                    <div className="price-container">
                      <span className="currency">₹</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="plan-features">
                    <ul>
                      {plan.features.map((f) => (
                        <li key={f.id}>
                          {f.hasFeature ? (
                            <FaCheck className="check-icon" />
                          ) : (
                            <FaTimes className="cross-icon" />
                          )}
                          {f.feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="plan-btn">
                    <span>Choose Plan</span>
                    <div className="btn-arrow">→</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Plans;
