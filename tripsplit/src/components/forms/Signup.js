import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const SignUpForm = ({ errors, touched, status }) => {
    return (
        <div className="sign-up form">
            <h2>Let's Get Started</h2>
            <Form>
                <div className="form-input name">
                    <label htmlFor="fName">First Name: </label>
                    <Field type="text" name="fName" placeholder="First Name" />
                    {touched.fName && errors.fName && <p>{errors.fName}</p>}
                </div>
                <div className="form-input name">
                    <label htmlFor="lName">Last Name: </label>
                    <Field type="text" name="lName" placeholder="Last Name" />
                    {touched.lName && errors.lName && <p>{errors.lName}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email Address: </label>
                    <Field type="email" name="email" placeholder="Email Address" />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="username">Username: </label>
                    <Field type="text" name="username" placeholder="Username" />
                    {touched.username && errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password: </label>
                    <Field type="text" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    );
};

const FormikSignUpForm = withFormik({
    mapsPropsToValues({ fName, lName, email, username, password }) {
        return {
            first_name: fName || '',
            last_name: lName || '',
            email: email || '',
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        fName: Yup.string().required('First Name Required'),
        lName: Yup.string().required('Last Name Required'),
        email: Yup.string()
            .email('Email not valid')
            .required('Email Required'),
        username: Yup.string().required('Username Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password Required')
    }),

    handleSubmit(values, { props }) {
        axios
            .post('https://tripsplit-backend.herokuapp.com/api/auth/register', JSON.stringify(values))
            .then(res => {
                console.log(res);
                props.history.push('/login');
            })
            .catch(err => {
                console.log(err.response);
            });
    }
})(SignUpForm);

export default FormikSignUpForm;
