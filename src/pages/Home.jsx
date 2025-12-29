  import React, { useEffect, useState } from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { Link } from "react-router-dom";
  import { FaDumbbell, FaUserMd, FaClock } from "react-icons/fa";
  import api from "../api";
  import { API_BASE_URL } from "../api";
  const IMAGE_BASE = API_BASE_URL.replace("/api", "");

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Software Engineer",
      text: "NextRep Gym completely changed my fitness routine! The trainers are knowledgeable and really motivate you to push your limits.",
    },
    {
      name: "Ananya Sharma",
      role: "Graphic Designer",
      text: "I love the variety of group classes at NextRep Gym. From HIIT to yoga, every session is energizing and effective.",
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      text: "The personal training and nutrition guidance helped me reach my fitness goals faster than I imagined. Highly recommended!",
    },
  ];

  function Home() {
    const [content, setContent] = useState(null);
    const [aboutContent, setAboutContent] = useState(null);

    useEffect(() => {
      // HOME PAGE CONTENT
      api
        .get("/HomePageContent/GetActiveContent")
        .then((res) => {
          if (res.data.resp) {
            setContent(res.data.respObj);
          }
        })
        .catch((err) => console.error(err));

      // ABOUT CONTENT
      api
        .get("/AboutMe/GetActiveAboutMe")
        .then((res) => {
          if (res.data.resp) {
            setAboutContent(res.data.respObj);
          }
        })
        .catch((err) => console.error(err));
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div>
        <Navbar />
        <main>
          <div className="slider-area position-relative">
            <div className="slider-active">
              <div
                className="single-slider slider-height d-flex align-items-center"
                style={{
                  backgroundImage: `url("${
                    content?.isActive && content?.bannerImage
                      ? `${IMAGE_BASE}/${content.bannerImage}`
                      : "/assets/img/default-banner.jpg"
                  }")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                      <div className="hero__caption">
                        <span data-animation="fadeInLeft" data-delay="0.1s">
                          {content && content.isActive
                            ? "Welcome to NextRep Gym"
                            : "Welcome to NextRep Gym"}{" "}
                          {/* default span */}
                        </span>

                        <h1 data-animation="fadeInLeft" data-delay="0.4s">
                          {content && content.isActive
                            ? content.title
                            : "Build Perfect Body Shape for Good and Healthy Life"}{" "}
                          {/* default title */}
                        </h1>

                        <p
                          className="hero-description"
                          data-animation="fadeInLeft"
                          data-delay="0.6s"
                        >
                          {content && content.isActive
                            ? content.description
                            : "Join our gym community and achieve your fitness goals with expert trainers, modern equipment, and personalized workout plans."}{" "}
                          {/* default description */}
                        </p>

                        {/* Optional button */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="about-area section-padding30">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="about-img">
                    <img
                      src={
                        aboutContent?.isActive && aboutContent?.bannerImage
                          ? `${API_BASE_URL.replace(
                              "/api",
                              ""
                            )}/${aboutContent.bannerImage.replace(/^\//, "")}`
                          : "/assets/img/gallery/about.png"
                      }
                      alt="About Gym"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="about-caption">
                    <div className="section-tittle section-tittle3 mb-35">
                      <span>ABOUT OUR GYM</span>
                      <h2>
                        {aboutContent
                          ? aboutContent.title
                          : "Safe Body building proper Solutions That Saves our Valuable Time!"}
                      </h2>
                    </div>

                    {aboutContent && aboutContent.descriptions ? (
                      aboutContent.descriptions.map((desc, index) => (
                        <div
                          key={index}
                          className={
                            index === 0 ? "pera-top" : "mb-65 pera-bottom"
                          }
                          dangerouslySetInnerHTML={{ __html: desc }}
                        ></div>
                      ))
                    ) : (
                      <>
                        <p className="pera-top">
                          Brook presents your services with flexible, convenient
                          and custom layouts...
                        </p>
                        <p className="mb-65 pera-bottom">
                          You can select your favorite layouts with unlimited
                          customization possibilities...
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="services-area pt-100 pb-150 section-bg"
            style={{
              backgroundImage: "url('assets/img/gallery/section_bg01.png')",
            }}
          >
            <section className="wantToWork-area w-padding">
              <div className="container">
                <div className="row align-items-end justify-content-between">
                  <div className="col-lg-6 col-md-10 col-sm-10">
                    <div className="section-tittle section-tittle2">
                      <span>OUR SERVICES FOR YOU</span>
                      <h2>PUSH YOUR LIMITS FORWARD – We Offer to You</h2>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-3">
                    <Link to="/services" className="btn wantToWork-btn f-right">
                      More Services
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <div className="container">
              <div className="row">
                {/* Card 1: Equipment */}
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <FaDumbbell size={40} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <Link to="/services">State-of-the-Art Equipment</Link>
                      </h5>
                      <p>
                        NextRep Gym is equipped with modern fitness machines and
                        free weights to ensure a full-body workout experience for
                        all members.
                      </p>
                    </div>
                    <div className="img-cap">
                      <Link to="/services">
                        Discover More About Us <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: Personal Training & Health */}
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <FaUserMd size={40} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <Link to="/services">
                          Personal Training & Health Care
                        </Link>
                      </h5>
                      <p>
                        Our certified trainers provide personalized workout and
                        nutrition plans, ensuring you achieve your fitness goals
                        safely and effectively.
                      </p>
                    </div>
                    <div className="img-cap">
                      <Link to="/services">
                        Discover More About Us <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: Workout Strategies & Classes */}
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <FaClock size={40} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <Link to="/services">Workout Strategies & Classes</Link>
                      </h5>
                      <p>
                        Join our group classes, HIIT sessions, and specialized gym
                        programs designed to maximize results and push your limits
                        every day.
                      </p>
                    </div>
                    <div className="img-cap">
                      <Link to="/services">
                        Discover More About Us <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-area2 testimonial-area section-padding30 fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-11 col-sm-11">
                  <div className="about-img2">
                    <img src="assets/img/gallery/about2.png" alt="" />
                    {/* <div className="shape-qutaion d-none d-sm-block">
                      <img src="assets/img/gallery/qutaion.png" alt="" />
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-9 col-sm-9">
                  <div className="about-caption">
                    <div className="section-tittle mb-55">
                      <span>Client Feedback</span>
                      <h2>What Our Client think about our gym</h2>
                    </div>
                    <Slider {...settings}>
                      {testimonials.map((t, i) => (
                        <div key={i} className="single-testimonial">
                          <div className="testimonial-caption">
                            <p>{t.text}</p>
                            <div className="rattiong-caption">
                              <span>
                                {t.name}
                                <span>{t.role}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wantToWork-area w-padding">
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-lg-6 col-md-9 col-sm-9">
                  <div className="section-tittle">
                    <span>oUR TEAM MAMBERS</span>
                    <h2>Our Most Exprienced Trainers</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <Link to="/services" className="btn wantToWork-btn f-right">
                    More Services
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="team-area pb-150">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team1.png" alt="" />
                      <div className="team-caption">
                        <span>Creative derector</span>
                        <h3>
                          <a href="#">Jhon Sunsaev</a>
                        </h3>
                        <div className="team-social">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-globe"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team2.png" alt="" />
                      <div className="team-caption">
                        <span>Creative derector</span>
                        <h3>
                          <a href="#">Jhon Sunsaev</a>
                        </h3>
                        <div className="team-social">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-globe"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team3.png" alt="" />
                      <div className="team-caption">
                        <span>Creative derector</span>
                        <h3>
                          <a href="#">Jhon Sunsaev</a>
                        </h3>
                        <div className="team-social">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-globe"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <section
            className="wantToWork-area w-padding section-bg"
            style={{
              backgroundImage: "url('assets/img/gallery/section_bg02.png')",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                  <div className="wantToWork-caption">
                    <h2>April membership offer available Now</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <Link to="/services" className="btn wantToWork-btn f-right">
                    More Services
                  </Link>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="contact-form-main">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-7 col-lg-7">
                  <div className="form-wrapper">
                    <div className="form-tittle">
                      <div className="row ">
                        <div className="col-lg-11 col-md-10 col-sm-10">
                          <div className="section-tittle">
                            <span>Contact Form</span>
                            <h2>Feel Free to contact with us!</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form id="contact-form" action="#" method="POST">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-box user-icon mb-30">
                            <input type="text" name="name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-box email-icon mb-30">
                            <input type="text" name="email" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-30">
                          <div className="select-itms">
                            <select name="select" id="select2">
                              <option value="">Boxing</option>
                              <option value="">saiful islam</option>
                              <option value="">Arafath Miya</option>
                              <option value="">Shakil Miya</option>
                              <option value="">Tamim Sharker</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-box subject-icon mb-30">
                            <input
                              type="Email"
                              name="subject"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box message-icon mb-65">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <div className="submit-info">
                            <button className="btn" type="submit">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="from-left d-none d-lg-block">
              <img src="assets/img/gallery/contact_form.png" alt="" />
            </div>
          </section> */}
        </main>
      
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt"></i>
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  export default Home;
