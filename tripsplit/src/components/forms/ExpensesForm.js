import axios from 'axios';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { addExpense } from '../../actions/addExpense';

const ExpensesForm = ({ tripId, addExpense, history }) => {
    const [state, setState] = useState({});
    const [friends, setFriends] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`https://tripsplit-backend.herokuapp.com/api/users`)
            .then(res => {
                let users = res.data;
                setAllUsers(users);
            })
            .catch(error => {
                console.log('Error: TripForm: ', error);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        setState({ ...state, state });

        const postObj = {
            expense: {
                title: state.title,
                amount: state.amount,
                trip_id: Number(tripId)
            },
            users: friends
        };

        addExpense(tripId, history, postObj);
    }

    function handleChanges(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleChecked(e) {
        if (e.target.checked) {
            setFriends([...friends, Number(e.target.value)]);
        } else {
            setFriends(friends.filter(friend => friend !== e.target.value));
        }
    }

    return (
        <div className="tripForm-container">
            <h3>Edit Trip Details</h3>
            <form className="tripForm">
                <input type="text" name="title" placeholder="Expense Name" value={state.title} onChange={handleChanges} />
                <input type="number" name="amount" placeholder="Expense Amount" value={state.amount} onChange={handleChanges} />
                {allUsers.map(item => {
                    return (
                        <label>
                            <input type="checkbox" onChange={handleChecked} value={item.id} />
                            {item.username}
                        </label>
                    );
                })}
                <button className="button-style-main edit-trip" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default connect(
    null,
    { addExpense }
)(ExpensesForm);

// import { Field, Form, withFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";
// import React, { useState } from "react";

// const ExpensesForm = () => {
//   const [state, setState] = useState({});
//   const [fields, setFields] = useState([{ value: null }]);

//   console.log("fields", fields);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setState({ ...state, fields, state });
//   }
//   console.log("state", state);
//   function handleChanges(e) {
//     setState({ ...state, [e.target.name]: e.target.value });
//   }
//   function handleChange(i, event) {
//     const values = [...fields];
//     values[i].value = event.target.value;
//     setFields(values);
//   }

//   function handleAdd() {
//     const values = [...fields];
//     values.push({ value: null });
//     setFields(values);
//   }

//   function handleRemove(i) {
//     const values = [...fields];
//     values.splice(i, 1);
//     setFields(values);
//   }

// title: "Hotel - Entire Trip",
// category: "Lodging",
// amount: 2500,
// date: 1561248000,
//   return (
//     <>
//       <form className="expenses-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Expense Name"
//           value={state.title}
//           onChange={handleChanges}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="category"
//           value={state.category}
//           onChange={handleChanges}
//         />
//         <input
//           type="amount"
//           name="amount"
//           placeholder="amount"
//           value={state.amount}
//           onChange={handleChanges}
//         />
//         <input
//           type="date"
//           name="sDate"
//           placeholder=" Date"
//           value={state.Date}
//           onChange={handleChanges}
//         />
//         <button
//           className="addFriendButton"
//           type="button"
//           onClick={() => handleAdd()}
//         >
//           + Add Friend
//         </button>

//         {fields.map((field, idx) => {
//           return (
//             <div className="tripFriends" key={`${field}-${idx}`}>
//               <input
//                 type="text"
//                 placeholder="Enter text"
//                 onChange={e => handleChange(idx, e)}
//               />
//               <button type="button" onClick={() => handleRemove(idx)}>
//                 X
//               </button>
//             </div>
//           );
//         })}
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </>
//   );
// };

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

// export default ExpensesForm;
