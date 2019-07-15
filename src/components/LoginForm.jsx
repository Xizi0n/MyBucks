import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import store from "../stores/store";

const LoginForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <div className="login-panel">
      <div className="login-title">Login</div>
      <Form>
        <Field type="email" name="email" placeholder="E-mail" />
        <Field type="password" name="password" placeholder="Password" />
        <label>
          <Field type="checkbox" name="remember" checked={values.remember} />
          Remember me
        </label>
        <input type="submit" value="Log me in!" />
      </Form>
    </div>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues({ email, password, remember }) {
    return {
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("pwd") || "",
      remember: false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setSubmitting }) {
    if (values.remember) {
      localStorage.setItem("email", values.email);
      localStorage.setItem("pwd", values.password);
    }
    store.authStore.authenticate(values.email);
  }
})(LoginForm);

export default LoginFormik;
