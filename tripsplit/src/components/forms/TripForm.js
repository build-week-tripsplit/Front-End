import React, { useState } from "react";

const TripForm = () => {
  const [state, setState] = useState({});

  const updatePerson = obj => {
    setState({ ...state, obj });
    // props.update(state);
  };
  function handleSubmit() {
    setState({ ...state, state });
  }

  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="location"
          value={state.location}
          onChange={handleChanges}
        />
        <input
          type="date"
          name="startDate"
          value={state.startDate}
          onChange={handleChanges}
        />
        <input
          type="date"
          name="endDate"
          value={state.endDate}
          onChange={handleChanges}
        />
        <ArrayFields updatePerson={updatePerson} />
        <button onClick={handleSubmit}>Update</button>
      </form>
    </>
  );
};

function ArrayFields(props) {
  const [person, setPerson] = useState([]);

  return (
    <div>
      {person.length &&
        person.map(per => (
          <>
            <p>{per.name}</p>
            <p>{per.email}</p>
          </>
        ))}
      <Friends setPerson={setPerson} person={person} />
      <button onClick={() => props.updatePerson(person)}>Update</button>
    </div>
  );
}

function Friends(props) {
  const [values, setValues] = useState({
    name: "",
    email: ""
  });

  function handleFriends(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={() => {
        props.setPerson([...values, values]);
        setValues({
          name: "",
          email: ""
        });
      }}
    >
      <input type="text" name="name" onChange={handleFriends} />
      <input type="text" name="email" onChange={handleFriends} />
      <button>Add Another Person</button>
    </form>
  );
}

export default TripForm;
