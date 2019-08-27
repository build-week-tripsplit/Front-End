import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function ExpensesForm({ values, errors, touched, isSubmitting }) {
    return (
        <div className="expenses-form">
            <Form>
                <div>
                    <label>
                        Username:
                        <Field name="name" type="text" placeholder="Name" />
                        {touched.name && errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </label>
                    <label>
                        Price:
                        <Field name="price" type="number" placeholder="Password" />
                        {touched.price && errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                    </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        </div>
    );
}

const FormikExpensesForm = withFormik({
    mapPropsToValues({ name, price }) {
        return {
            name: name || '',
            price: price || ''
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('An expense name is required'),
        price: Yup.number()
            .required('Please add a price')
            .positive('Price must be a positive number')
    }),
    handleSubmit(values, { props, resetForm, setSubmitting }) {
        // Some logic
    }
})(ExpensesForm);

export default FormikExpensesForm;
