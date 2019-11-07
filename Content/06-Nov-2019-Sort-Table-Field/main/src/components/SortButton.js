import React from "react";

const SortButton = props => {
  return (
    <div className="sort-btn">
      <div onClick={e => props.onClick(e, "up")}>&#x21e7;</div>
      <div onClick={e => props.onClick(e, "down")}>&#x21e9;</div>
    </div>
  );
};

export default SortButton;
