import React from 'react'
import Navbar from '../components/Navbar'
function NewMember() {
  return (
    <div>
      <Navbar />
       <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>New Members</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="contact-form-main mt-100 mb-100">
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
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="text" name="email" placeholder="Phone"/>
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
                                            <input type="Email" name="subject" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-box message-icon mb-65">
                                            <textarea name="message" id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="submit-info">
                                            <button className="btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="from-left d-none d-lg-block">
                <img src="assets/img/gallery/contact_form.png" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default NewMember
