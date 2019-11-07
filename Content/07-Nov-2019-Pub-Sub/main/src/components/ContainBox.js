import React, { useState } from "react";
import Box from "./Box";
import AddSubscriber from "./AddSubscriber";
import Publisher from "./Publisher";
import EventEmitter from "./EventEmitter";
import Subscribers from "./Subscribers";
import EmitBox from "./EmitBox";

const ContainBox = () => {
  const [event, setEvent] = useState(new EventEmitter());
  const [subscribers, setSubscribers] = useState([]);
  const [events, setEvents] = useState(Object.keys(event.eventStorage));
  const [emitRes, setEmitRes] = useState([]);

  const addSubscriber = (eventName, name, cb) => {
    let sub = event.subscribe(eventName, name, cb);
    setSubscribers([...subscribers, sub]);
    setEvents(Object.keys(event.eventStorage));
  };

  const clickEmit = eventName => {
    setEmitRes(event.emit(eventName));
  };

  const clickDelete = eventName => {
    event.remove(eventName);
    setEmitRes([]);
    setEvents(Object.keys(event.eventStorage));
    setSubscribers(subscribers.filter(s => s.getEventName() !== eventName));
  };

  console.log(subscribers);
  console.log(event.eventStorage);

  return (
    <div className="contain-box">
      <p className="header">Pub-Sub</p>
      <div className="box-area">
        <Box header="Subscribe">
          <AddSubscriber addSubscriber={addSubscriber} />
        </Box>
        <Box header="Publisher">
          <Publisher
            events={events}
            clickEmit={clickEmit}
            clickDelete={clickDelete}
          />
        </Box>
      </div>
      <div className="box-area">
        <Box header="Subscribers">
          <Subscribers subscribers={subscribers} />
        </Box>
        <Box header="Event Emit">
          <EmitBox emitRes={emitRes} />
        </Box>
      </div>
    </div>
  );
};

export default ContainBox;
