import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup"


const SignUpForm = ({ errors, touched, status }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        if (status) {
            setUser(status);
        }
    }, [status]);
    console.log(user);
    return (
        <div className="sign-up-form">
            <h3>Let's Get Started</h3>

            <Form>

            <div className="sign-up-fields">
                <div className="names-div">
                    <div className="form-input name field-item-Fname">
                        <label htmlFor="fName">First Name: </label>
                        <Field className="name" type="text" name="fName" placeholder="First Name" />
                        {touched.fName && errors.fName && (
                            <p>{errors.fName}</p>
                        )}
                    </div>

                    <div className="form-input name field-item-Lname">
                        <label htmlFor="lName">Last Name: </label>
                        <Field className="name" type="text" name="lName" placeholder="Last Name" />
                        {touched.lName && errors.lName && (
                            <p>{errors.lName}</p>
                        )}
                    </div>
                </div>

                    <div className="form-input field-item">
                        <label htmlFor="email">Email Address: </label>
                        <Field type="email" name="email" placeholder="Email Address" />
                        {touched.email && errors.email && (
                            <p>{errors.email}</p>
                        )}
                    </div>

                    <div className="form-input field-item">
                        <label htmlFor="username">Username: </label>
                        <Field type="text" name="username" placeholder="Username" />
                        {touched.username && errors.username && (
                            <p>{errors.username}</p>
                        )}
                    </div>

                    <div className="form-input field-item-last">
                        <label htmlFor="password">Password: </label>
                        <Field type="text" name="password" placeholder="Password" />
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                    </div>
            </div>

                <button className="button-style-main" type="submit">Join</button>
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