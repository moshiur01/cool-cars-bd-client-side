import React from "react";
// import { Container } from "react-bootstrap";
import Header from "../../../Shared/Header/Header";
import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import FeatureCar from "../FeatureCars/Featurecar";
import Review from "../Review/Review";
import Info from "./Info";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <FeatureCar></FeatureCar>
      <div id="reviews">
        <Review></Review>
      </div>
      <Info></Info>
      <div id="ContactUs">
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default Home;
