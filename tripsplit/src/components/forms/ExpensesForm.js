// import { Field, Form, withFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";
import React, { useState } from "react";

const ExpensesForm = () => {
  const [state, setState] = useState({});
  const [fields, setFields] = useState([{ value: null }]);

  console.log("fields", fields);
  function handleSubmit(e) {
    e.preventDefault();
    setState({ ...state, fields, state });
  }
  console.log("state", state);
  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  // title: "Hotel - Entire Trip",
  // category: "Lodging",
  // amount: 2500,
  // date: 1561248000,
  return (
    <div className="expenses-form-container">
      <h3>Expense Details</h3> 
      <form className="expenses-form">
        <input
          type="text"
          name="title"
          placeholder="Expense Name"
          value={state.title}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={state.category}
          onChange={handleChanges}
        />
        <input
          type="amount"
          name="amount"
          placeholder="amount"
          value={state.amount}
          onChange={handleChanges}
        />

        <label>Date</label>
        
        <input
          type="date"
          name="sDate"
          placeholder=" Date"
          value={state.Date}
          onChange={handleChanges}
        />
        <button
          className="addFriendButton button-style-main
          "
          type="button"
          onClick={() => handleAdd()}
        >
          + Add Friend
        </button>

        {fields.map((field, idx) => {
          return (
            <div className="tripFriends" key={`${field}-${idx}`}>
              <input
                type="text"
                placeholder="Enter text"
                onChange={e => handleChange(idx, e)}
              />
              <button className="expense-button" type="button" onClick={() => handleRemove(idx)}>
                X
              </button>
            </div>
          );
        })}
        <button 
        className="button-style-main"
        onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

// function ExpensesForm({ values, errors, touched, isSubmitting }) {
//   return (
//     <div className="expenses-form">
//       <Form>
//         <div className="tripForm">
//           <label>
//             Username:
//             <Field name="name" type="text" placeholder="Name" />
//             {touched.name && errors.name && (
//               <span style={{ color: "red" }}>{errors.name}</span>
//             )}
//           </label>
//           <label>
//             Price:
//             <Field name="price" type="text" placeholder="price" />
//             {touched.price && errors.price && (
//               <span style={{ color: "red" }}>{errors.price}</span>
//             )}
//           </label>

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// const FormikExpensesForm = withFormik({
//   mapPropsToValues({ name, price, fields }) {
//     return {
//       name: name || "",
//       price: price || "",
//       fields: fields || []
//     };
//   },
//   validationSchema: Yup.object().shape({
//     name: Yup.string().required("An expense name is required"),
//     price: Yup.number()
//       .required("Please add a price")
//       .positive("Price must be a positive number")
//   }),
//   handleSubmit(values, { props, resetForm, setSubmitting }) {
//     // Some logic
//   }
// })(ExpensesForm);

export default ExpensesForm;
