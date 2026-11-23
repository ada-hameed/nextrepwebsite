import React, { useEffect, useState } from "react";

import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCheckCircle, FaDumbbell, FaUsers, FaStar, FaClock, FaUserTie, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from "../api"; // <-- axios instance import
import Footer from "../components/Footer";
function About() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const [aboutContent, setAboutContent] = useState(null);
  const [activeMembers, setActiveMembers] = useState(0); 
  const [activeTrainers, setActiveTrainers] = useState(0);

  const imageBase = "http://localhost:5228/"; // image base (no /api)

  useEffect(() => {

    // About content
    api
      .get("/AboutMe/GetActiveAboutMe")
      .then((res) => {
        if (res.data.resp) setAboutContent(res.data.respObj);
      })
      .catch((err) => console.error(err));

    // Active membership count
    api
      .get("/Membership/GetActiveMemberships")
      .then((res) => {
        if (res.data.resp && res.data.respObj) {
          setActiveMembers(res.data.respObj.length);
        }
      })
      .catch((err) => console.error(err));

    // Active Trainers count
    api
      .get("/Trainer/GetAllTrainers")
      .then((res) => {
        if (res.data.resp && res.data.respObj) {
          setActiveTrainers(res.data.respObj.length);
        }
      })
      .catch((err) => console.error(err));

  }, []);

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="about-hero"
        style={{
          backgroundImage: "url('assets/img/about.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="hero-content text-center">
            <h1>About Our Gym</h1>
            <p>Building stronger bodies and sharper minds with world-class coaching and community.</p>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <FaUsers />
               <h3>{activeMembers} +</h3>
                <p className='about_text'>Active Members</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="stat-item">
                <FaUserTie />
                <h3>{activeTrainers} +</h3>
                <p className='about_text'>Certified Trainers</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <FaClock />
                <h3>24/7</h3>
                <p className='about_text'>Gym Access</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <FaMedal />
                <h3>5+ yrs</h3>
                <p className='about_text'>Trusted Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-area section-padding30">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img
                  src={
                    aboutContent && aboutContent.isActive
                      ? `${imageBase}${aboutContent.bannerImage}`
                      : "/assets/img/gallery/about.png"
                  }
                  alt="About Gym"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12">
              <div className="about-caption">
                <div className="section-tittle section-tittle3 mb-35">
                  <span>ABOUT OUR GYM</span>
                  <h2>
                    {aboutContent ? aboutContent.title :
                      "Safe Body building proper Solutions That Saves our Valuable Time!"}
                  </h2>
                </div>

                {aboutContent && aboutContent.descriptions ? (
                  aboutContent.descriptions.map((desc, index) => (
                    <div
                      key={index}
                      className={index === 0 ? "pera-top" : "mb-65 pera-bottom"}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    ></div>
                  ))
                ) : (
                  <>
                    <p className="pera-top">
                      Brook presents your services with flexible, convenient and custom layouts...
                    </p>
                    <p className="mb-65 pera-bottom">
                      You can select your favorite layouts with unlimited customization possibilities...
                    </p>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
  <Footer />
    </div>
  );
}

export default About;
