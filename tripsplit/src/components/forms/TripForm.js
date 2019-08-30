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
    // setFields();
    setState({ ...state, fields, state });
    console.log("fields", fields);
  }
  console.log("state", state);
  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function handleChange() {
    const values = [fields];

    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push();
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
        {allUsers.map(item => {
          return (
            <label>
              <input
                type="checkbox"
                onChange={() => setFields({ ...fields, value: item.username })}
                value={item.username}
              />
              {item.username}
            </label>
          );
        })}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default TripForm;
