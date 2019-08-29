import React from "react";
import { connect } from "react-redux";
import { editTrip } from "../actions/editTrip";

function Trip({ trip }) {
  // const { title, amount } = props.trip
  // const [editing, setEditing] = useState(false)

  // const [edited, setEditedTrip] = useState({ title, amount })

  function handleChanges(e) {
    setEditedTrip({ ...editedTrip, [e.target.name]: e.target.value });
  }

  return (
    <div className="trip">
      <form
        onSubmit={e => {
          e.preventDefault();
          editTrip(trip);
          setEditing(!editing);
        }}
      >
        {editing ? (
          <input
            type="text"
            name="title"
            value={editedTrip.title}
            onChange={handleChanges}
          />
        ) : (
          <h3>{trip.title}</h3>
        )}
        {editing ? (
          <input
            type="text"
            name="location"
            value={editedTrip.location}
            onChange={handleChanges}
          />
        ) : (
          <p>{trip.location}</p>
        )}
        {editing ? (
          <input
            type="text"
            name="description"
            value={editedTrip.description}
            onChange={handleChanges}
          />
        ) : (
          <p>{trip.description}</p>
        )}
        <button style={{ display: editing ? "block" : "none" }}>
          Updatenate
        </button>
      </form>

      <button onClick={() => (style = { display: editing ? "none" : "block" })}>
        Edit
      </button>
    </div>
  );
}

export default connect(
  null,
  { editTrip }
)(Trip);
