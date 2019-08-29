import axios from "axios";
import React, { useEffect, useState } from "react";

const TripForm = () => {
  const [state, setState] = useState({});
  const [fields, setFields] = useState([{ value: null }]);
  const [myFriends, setMyFirends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://tripsplit-backend.herokuapp.com/api/users`)
      .then(res => {
        let users = res.data;
        setAllUsers(users);
      })
      .catch(error => {
        console.log("Error: TripForm: ", error);
      });
  }, []);

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
  return (
    <>
      <form className="tripForm">
        <input
          type="text"
          name="title"
          placeholder="Trip Name"
          value={state.title}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="description"
          placeholder="Trip description"
          value={state.description}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="location"
          placeholder="Trip location"
          value={state.location}
          onChange={handleChanges}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={state.startDate}
          onChange={handleChanges}
        />
        <input
          type="date"
          name="endDate"
          placeholder="EndDate"
          value={state.endDate}
          onChange={handleChanges}
        />
        <button
          className="addFriendButton"
          type="button"
          onClick={() => handleAdd()}
        >
          + Add Friend
        </button>

        {fields.map((field, idx) => {
          return (
            <div className="tripFriends" key={`${field}-${idx}`}>
              <select name="users-list">
                {allUsers.map(item => {
                  <option value={item.username}>{item.username}</option>;
                })}
              </select>
              <button type="button" onClick={() => handleRemove(idx)}>
                X
              </button>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default TripForm;
