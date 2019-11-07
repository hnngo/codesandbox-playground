import React from "react";

const Box = props => {
  const { header, children } = props;

  return (
    <div className="box">
      <div className="header">{header}</div>
      {children}
    </div>
  );
};

export default Box;
