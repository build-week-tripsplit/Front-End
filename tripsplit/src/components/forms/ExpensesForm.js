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


