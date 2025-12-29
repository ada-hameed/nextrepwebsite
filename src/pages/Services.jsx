import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaClock, FaUser } from 'react-icons/fa';
import Footer from '../components/Footer';
function Services() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      {/* <div className="slider-area2 slider-area2--bg" style={{
        backgroundImage: "url('assets/img/about.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 text-center pt-70">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <section className="services-area pt-100 pb-150 section-bg" style={{
        backgroundImage: "url('assets/img/gallery/section_bg01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <section className="wantToWork-area w-padding">
          <div className="container">
            <div className="row align-items-end justify-content-between">
              <div className="col-lg-6 col-md-10 col-sm-10">
                <div className="section-tittle">
                  <span>OUR SERVICES FOR YOU</span>
                  <h2 className='services-title'>PUSH YOUR LIMITS FORWARD – We Offer to You</h2>
                </div>
              </div>
              {/* <div className="col-xl-2 col-lg-2 col-md-3">
                <Link to="/services" className="btn wantToWork-btn f-right">More Services</Link>
              </div> */}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">

            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaDumbbell size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">State-of-the-Art Equipment</Link></h5>
                  <p>NextRep Gym is equipped with modern fitness machines and free weights to give you the ultimate workout experience.</p>
                </div>
               
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaUser size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">Personal Training</Link></h5>
                  <p>Certified trainers provide one-on-one guidance and customized workout plans tailored to your fitness goals.</p>
                </div>
               
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaClock size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">Group Classes & Strategies</Link></h5>
                  <p>Join HIIT sessions, yoga, and specialized fitness programs designed to maximize results and push your limits.</p>
                </div>
                
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaAppleAlt size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">Nutrition Guidance</Link></h5>
                  <p>Our experts provide diet plans and nutrition counseling to complement your workouts and accelerate results.</p>
                </div>
                
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaHeartbeat size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">Health Monitoring</Link></h5>
                  <p>Track your progress with regular health checks and performance assessments conducted by our professionals.</p>
                </div>
               
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-cat text-center mb-50 p-4 shadow-sm rounded">
                <div className="cat-icon mb-3">
                  <FaDumbbell size={40} />
                </div>
                <div className="cat-cap">
                  <h5><Link to="/services">Personalized Fitness Plans</Link></h5>
                  <p>Whether beginner or advanced, we create fitness plans tailored to your schedule, goals, and lifestyle.</p>
                </div>
               
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services;
