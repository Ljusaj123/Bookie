import { React, useState } from "react";

import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const initalvalues = { username: "", email: "", message: "", success: "" };
  const [formValues, setFormValues] = useState(initalvalues);
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initalvalues);
  };

  const validate = (values) => {
    const error = {};

    if (!values.username) {
      error.username = "Username is required!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    }
    if (!values.message) {
      error.message = "Message is required!";
    }

    if (Object.keys(error).length === 0) {
      error.success = "You have been loged!";
    }

    return error;
  };
  return (
    <footer className="footer" id="scroll">
      <div className="footer-container">
        <div className="bookie-footer">
          <h1>Bookie</h1>
          <h2>Powered by Vercel</h2>
        </div>
        <div className="contact-footer">
          <h1>Contact Us</h1>
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="your name..."
              value={formValues.username}
              onChange={handleChange}
              autoComplete="off"
            />
            <p>{formErrors.username}</p>

            <input
              type="email"
              name="email"
              placeholder="youremail@mail.com"
              value={formValues.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <p>{formErrors.email}</p>

            <textarea
              placeholder="your message here..."
              name="message"
              value={formValues.message}
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
            <p>{formErrors.message}</p>

            <button className="send-btn">send</button>
            <h4>{formErrors.success}</h4>
          </form>
        </div>
        <div className="made-by-footer">
          <h1>
            Made with{" "}
            <span>
              <FaHeart />
            </span>{" "}
            by Rosmarina
          </h1>
          <div className="social-icons-footer">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
