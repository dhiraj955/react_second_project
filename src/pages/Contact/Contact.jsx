import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Ready to share your query?</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>
                <FaMapMarkerAlt /> Biratnagar, Nepal
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <FaPhoneAlt /> +977-9826728851
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <HiOutlineMail /> dhirajmehta955@gmail.com
              </p>
            </div>

            
          </div>
        </div>
        <form className="contact-right">
          <h1>Contact Us</h1>
          <div className="label-contact">
            <input type="text" placeholder="Enter your name" name="name" />

            <input type="email" placeholder="Enter your email" name="email" />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
            ></textarea>

            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
