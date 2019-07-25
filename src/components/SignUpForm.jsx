import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupForm = ({ values, errors, touched, isSubmitting }) => (
  <React.Fragment>
    <div className="login-panel">
      <div className="login-title">Sign Up</div>
      <Form>
        <div className="form-error">
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
        </div>
        <Field type="text" name="firstName" placeholder="Firts Name" />
        <div className="form-error">
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </div>
        <Field type="text" name="lastName" placeholder="Last Name" />
        <div className="form-error">
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <Field type="email" name="email" placeholder="E-mail" />
        <div className="form-error">
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <Field type="password" name="password" placeholder="Password" />
        <div className="form-error">
          {touched.passagain && errors.passagain && (
            <p className="error">{errors.passagain}</p>
          )}
        </div>
        <Field type="password" name="passagain" placeholder="Password again" />
        <div className="form-error">
          {touched.termsAndConditions && errors.termsAndConditions && (
            <p className="error">{errors.termsAndConditions}</p>
          )}
        </div>
        <label>
          <Field
            type="checkbox"
            name="termsAndConditions"
            checked={values.termsAndConditions}
          />
          I agree to terms and conditions.
        </label>
        <input type="submit" value="Sign me up!" disabled={isSubmitting} />
      </Form>
    </div>
    <div id="result" class="result" name="result">
      Succesfully signed up
    </div>
  </React.Fragment>
);

const SignupFormik = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    email,
    password,
    passagain,
    termsAndConditions
  }) {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passagain: "",
      termsAndConditions: false
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required(),
    passagain: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Must Accept Terms and Conditions"
    )
  }),
  handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      document.getElementById("result").classList.add("showResult");
      setTimeout(() => {
        document.getElementById("result").classList.add("hideResult");
      }, 5000);
    }, 2000);
  }
})(SignupForm);

export default SignupFormik;
