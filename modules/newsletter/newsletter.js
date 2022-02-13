import { react, useState } from "react";

const Newsletter = () => {
  const initalvalues = { email: "", success: "" };
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

    if (!values.email) {
      error.email = "Email is required!";
    }

    if (Object.keys(error).length === 0) {
      error.success = "Your message has been send!";
    }
    return error;
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h1>Sign up to our newsletter</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="email"
              name="email"
              placeholder="your email..."
              value={formValues.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <button id="sign-in-btn">sign up</button>
          </div>
          <div className="error-messages">
            <p>{formErrors.email}</p>
            <h4>{formErrors.success}</h4>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
