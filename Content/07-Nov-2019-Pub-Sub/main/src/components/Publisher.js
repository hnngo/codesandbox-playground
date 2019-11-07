import React from "react";

const Publisher = props => {
  const { events, clickEmit, clickDelete } = props;
  const renderEvents = () => {
    return events.map((e, i) => {
      return (
        <div className="event-area" key={i}>
          <div className="event-name">{e}</div>
          <div className="event-tools">
            <button onClick={() => clickEmit(e)}>
              <i className="fas fa-rocket" />
            </button>
            <button onClick={() => clickDelete(e)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
      );
    });
  };
  return <div className="pub-container">{renderEvents()}</div>;
};

export default Publisher;
