import React from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="100" src={props.avatar_url} alt="img" />
      <div style={{ display: "inline-block", marginLeft: 20 }}>
        <div style={{ fontSize: "1em", fontWeight: "bold" }}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;
