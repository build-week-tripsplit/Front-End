import React, { useState } from 'react'
import { Form, Field, withForm } from "formik"
import * as Yup from "yup"


const SignUpForm = () => {
    const [users, setUsers] = useState([]);

    return (
        <div className="sign-up form">
            <h2>Let's Get Started</h2>
            <Form>
                <div className="form-input name">
                    <label htmlFOr="fName">First Name</label>
                    <Field type="text" name="fName" placeholder="First Name" />
                </div>
                <div className="form-input name">
                    <label htmlFOr="lName">Last Name</label>
                    <Field type="text" name="lName" placeholder="Last Name" />
                </div>
                <div className="form-input">
                    <label htmlFOr="email">Email Address</label>
                    <Field type="email" name="email" placeholder="Email Address" />
                </div>
                <div className="form-input">
                    <label htmlFOr="username">Username</label>
                    <Field type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-input">
                    <label htmlFOr="password">Password</label>
                    <Field type="text" name="password" placeholder="Password" />
                </div>
                <button>Sign Up</button>
            </Form>
        </div>
    )
}