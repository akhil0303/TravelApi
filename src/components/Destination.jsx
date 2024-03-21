import React from "react";
import "./Destination.css";
const Destination = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* <img
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={333}
      /> */}
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Destination;