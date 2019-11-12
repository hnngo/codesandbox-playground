import React, { useState } from "react";

const AddSubscriber = props => {
  const [eventName, setEventName] = useState("");
  const [name, setName] = useState("");
  const [cb, setCb] = useState("");

  return (
    <div className="sub-container">
      <div className="add-tools">
        <input
          placeholder="subscriber's name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="event name"
          value={eventName}
          onChange={e => setEventName(e.target.value.toLowerCase())}
        />
        <input
          placeholder="say what"
          value={cb}
          onChange={e => setCb(e.target.value)}
        />
        <button
          onClick={() => {
            props.addSubscriber(eventName, name, () => cb);
            setEventName("");
            setCb("");
            setName("");
          }}
        >
          Add
        </button>
      </div>
      <div />
    </div>
  );
};

export default AddSubscriber;
