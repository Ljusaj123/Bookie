import { React, useState, useEffect } from "react";
import Footer from "../modules/footer/Footer";
import Navbar from "../components/Navbar";
import { MdEmail } from "react-icons/md";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Register = () => {
  const initalvalues = {
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    success: "",
  };
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

    if (!values.name) {
      error.name = "Name is required!";
    }
    if (!values.surname) {
      error.surname = "Surname is required!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    }
    if (!values.username) {
      error.username = "Username is required!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    }
    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm password!";
    }
    if (values.password != values.confirmPassword) {
      error.confirmPassword = "Passwords are not the same, try again!";
    }
    if (values.password.length <= 8 && values.confirmPassword.length <= 8) {
      error.confirmPassword = "Password has to have more than 8 letters";
    }

    if (Object.keys(error).length === 0) {
      error.success = "You have been loged!";
    }

    return error;
  };
  return (
    <section className="register">
      <header>
        <Navbar />
      </header>
      <div className="register-container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className=" name-surname-container">
            <div className="name-container">
              <input
                type="text"
                name="name"
                className="name"
                placeholder="first name"
                value={formValues.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.name}</p>
            </div>
            <div className="surname-container">
              <input
                type="text"
                name="surname"
                className="surname"
                placeholder="last name"
                value={formValues.surname}
                onChange={handleChange}
                autoComplete="off"
              />
              <p>{formErrors.surname}</p>
            </div>
          </div>

          <div className="container email-container">
            <div className="input-container">
              <MdEmail />
              <input
                type="email"
                name="email"
                className="email"
                placeholder="enter your email"
                value={formValues.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p>{formErrors.email}</p>
          </div>

          <div className="container username-container">
            <div className="input-container">
              <FaUserAlt />
              <input
                type="text"
                name="username"
                className="username"
                placeholder="enter your username"
                value={formValues.username}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p>{formErrors.username}</p>
          </div>

          <div className="container password-container">
            <div className="input-container">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                value={formValues.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p>{formErrors.password}</p>
          </div>

          <div className="container confirm-password-container">
            <div className="input-container">
              <FaLock />
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm your password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
          </div>
          <button>create account</button>
          <h4>{formErrors.success}</h4>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
