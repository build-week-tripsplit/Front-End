import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { addTrip } from '../../actions/addTrip';

const TripForm = ({ addTrip, history }) => {
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

        var myStartDate = new Date(state.startDate);
        var myStartEpoch = myStartDate.getTime();

        var myEndDate = new Date(state.startDate);
        var myEndEpoch = myEndDate.getTime();

        const postObj = {
            trip: {
                title: state.title,
                description: state.description,
                location: state.location,
                start_date: myStartEpoch / 1000,
                end_date: myEndEpoch / 1000
            },
            users: friends
        };

        addTrip(history, postObj);
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
                <input type="text" name="title" placeholder="Trip Name" value={state.title} onChange={handleChanges} />
                <input type="text" name="description" placeholder="Trip description" value={state.description} onChange={handleChanges} />
                <input type="text" name="location" placeholder="Trip location" value={state.location} onChange={handleChanges} />
                <label>Start Date</label>
                <input type="date" name="startDate" placeholder="Start Date" value={state.startDate} onChange={handleChanges} />
                <label>End Date</label>
                <input type="date" name="endDate" placeholder="EndDate" value={state.endDate} onChange={handleChanges} />
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
    { addTrip }
)(TripForm);
