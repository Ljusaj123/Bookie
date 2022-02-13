import { React, useState } from "react";
import Footer from "../modules/footer/Footer";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Login = () => {
  const initalvalues = { username: "", password: "", success: "" };
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
    if (!values.password) {
      error.password = "Password is required!";
    }

    if (Object.keys(error).length === 0) {
      error.success = "You have been loged!";
    }

    return error;
  };
  return (
    <section className="login">
      <header>
        <Navbar />
      </header>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username-container">
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
          <div className="password-container">
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

          <button className="btn">login</button>

          <h4>{formErrors.success}</h4>
        </form>
        <div className="no-account">
          <p>
            {/* eslint-disable-next-line */}
            Don't have an account yet?
            <Link href={"../register"}>
              <a href="#"> Register now</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
