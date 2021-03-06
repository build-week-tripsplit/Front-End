import { Field, Form, withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { userLogin } from '../../actions/userLogin';
import Header from "../header/Header";
// import {Route} from '';

function LogIn({ touched, errors }) {
  return (
    <>
      <Header />
      <div className="login-form">
        <h3>Welcome back</h3>
        <div className="login-fields">
          <Form>
            <div className="login-input-fields">
              <Field className="field-item" name="username" type="text" placeholder="Username"></Field>
              {touched.username && errors.username && errors.username}

              <Field className="field-item" name="password" type="password" placeholder="Password"></Field>
              {touched.password && errors.password && errors.password}
            </div>
            <button className="button-style-main login" type="submit">Log-In</button>
          </Form>
        </div>
      </div>
    </>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your name.'),
    password: Yup.string()
      .min(8, 'Password should be a minimum of 8 characters.')
      .required('Please enter your password.')
  }),

  handleSubmit(values, { props }) {
    props.userLogin(props.history, values);
    // axize()
    //     .post('https://tripsplit-backend.herokuapp.com/api/auth/login', values)
    //     .then(res => {
    //         console.log(res);
    //         localStorage.setItem('token', res.data.token);
    //         props.history.push('/dashboard');
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     });
  }
})(LogIn);

export default connect(
  null,
  { userLogin }
)(FormikLogin);
