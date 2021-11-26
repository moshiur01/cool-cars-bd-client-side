import React from "react";
import "./NOtFound.css";
import fourOFour from "./img/404 Not Found.png";
import Header from "../../Shared/Header/Header";
const NotFound = () => {
  return (
    <>
      <Header></Header>
      <div className="fourOFour">
        <img src={fourOFour} alt="" />
      </div>
    </>
  );
};

export default NotFound;
