import React from "react";
import { Container } from "react-bootstrap";
import banner from "./banner.png";
const Banner = () => {
  return (
    <Container>
      <img className="img-fluid my-5" src={banner} alt=""></img>
    </Container>
  );
};

export default Banner;
