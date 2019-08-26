import React, { useState } from 'react'
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup"


const SignUpForm = () => {
    const [users, setUsers] = useState([]);

    return (
        <div className="sign-up form">
            <h2>Let's Get Started</h2>
            <Form>
                <div className="form-input name">
                    <label htmlFOr="fName">First Name: </label>
                    <Field type="text" name="fName" placeholder="First Name" />
                </div>
                <div className="form-input name">
                    <label htmlFOr="lName">Last Name: </label>
                    <Field type="text" name="lName" placeholder="Last Name" />
                </div>
                <div className="form-input">
                    <label htmlFOr="email">Email Address: </label>
                    <Field type="email" name="email" placeholder="Email Address" />
                </div>
                <div className="form-input">
                    <label htmlFOr="username">Username: </label>
                    <Field type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-input">
                    <label htmlFOr="password">Password: </label>
                    <Field type="text" name="password" placeholder="Password" />
                </div>
                <button>Sign Up</button>
            </Form>
        </div>
    )
}


const FormikSignUpForm = withFormik({
    mapsPropsToValues({ fName, lName, email, username, password }) {
        return {
            fName: fName || "",
            lName: lName || "",
            email: email || "",
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        fName: Yup.string().required('First Name Required'),
        lName: Yup.string().required('Last Name Required'),
        email: Yup.string().email("Email not valid").required('Email Required'),
        username: Yup.string().required('Username Required'),
        password: Yup.string().min(8, "Password must be 8 characters or longer").required('Password Required'),
    }),

    handleSubmit(values, { setStatus }) {
        setStatus(values);
    }
})(SignUpForm);

export default FormikSignUpForm;