import React from "react";

const EmitBox = props => {
  const { emitRes } = props;

  const renderResults = () => {
    return emitRes.map((r, i) => {
      return <div key={i}>{r}</div>;
    });
  };

  return <div className="emit-box">{renderResults()}</div>;
};

export default EmitBox;
