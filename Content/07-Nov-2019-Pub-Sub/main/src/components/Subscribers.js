import React from "react";

const Subscribers = props => {
  const { subscribers } = props;

  const renderSubscribers = () => {
    return subscribers.map((s, i) => {
      return (
        <div key={i} className="subscribers-content">
          {s.getSubscriberName()} subscribed {s.getEventName()}
        </div>
      );
    });
  };

  return <div className="subscribers">{renderSubscribers()}</div>;
};

export default Subscribers;
