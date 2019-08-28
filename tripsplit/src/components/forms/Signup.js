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
                    <label htmlFor="firstName">First Name: </label>
                    <Field type="text" name="firstName" placeholder="First Name" />
                    {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className="form-input name">
                    <label htmlFor="lastName">Last Name: </label>
                    <Field type="text" name="lastName" placeholder="Last Name" />
                    {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
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
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    );
};

const FormikSignUpForm = withFormik({
    mapsPropsToValues({ firstName, lastName, email, username, password }) {
        return {
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required('First Name Required'),
        lastName: Yup.string().required('Last Name Required'),
        email: Yup.string()
            .email('Email not valid')
            .required('Email Required'),
        username: Yup.string().required('Username Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or longer')
            .required('Password Required')
    }),

    handleSubmit(values, { props }) {
        const register = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            username: values.username,
            password: values.password
        };
        axios
            .post('https://tripsplit-backend.herokuapp.com/api/auth/register', register)
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
