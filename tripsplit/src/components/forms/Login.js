import React, {useState, useEffect } from 'react';
import{ Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
// import {Route} from '';




function LogIn({touched, errors}) {
    const [login, setLogIn] = useState();    
    
    return (
        <div className="login-form">
            <h3>
            Welcome back
            </h3>

            <Form>
              <div className="login-fields">
                <Field
                name="username"
                type="text"
                placeholder="Username"
                className="field-item"></Field>
                {touched.username && errors.username && (
                    alert(errors.username)
                )}

                <Field 
                name="password"
                type="text"
                placeholder="Password"
                className="field-item"></Field>
                {touched.password && errors.password && (
                    alert(errors.password)
                )}

                </div>

                <button className="login-button" type="submit">
                    Sign In
                </button>
            </Form>
        </div>
    )
}

    const FormikLogin = withFormik({

        mapPropsToValues({ username, password}) {
          return {
            username: username || "",
            password: password || ""
          };
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required("Please enter your name."),

            password: Yup.string()
              .min(8, "Password should be a minimum of 8 characters.")
              .required("Please enter your password."),
          }),


            /*  API POST REQUEST FOR OUR BACKEND
          handleSubmit(values, { setStatus }) {
            axios
              .post("https://reqres.in/api/users", values)
              .then(res => {
                console.log(res);
                setStatus(res.data);
                // setStatus(res.data)
              })
              .catch(err => {
                console.log(err.response);
              });
            // console.log(values);
          }    */

        })(LogIn);
 


export default FormikLogin;