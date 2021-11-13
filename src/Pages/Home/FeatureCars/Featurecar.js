import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleFeatureCar from "./SingleFeatureCar";

const FeatureCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/featureCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Container className="my-5">
      {cars.length === 0 ? (
        <Container className="d-flex justify-content-center ">
          <Spinner animation="grow" className="mx-auto" />
        </Container>
      ) : (
        <Row>
          <h3 className="text-center">Feature Cars</h3>
          <b className="text-center text-secondary mb-4">
            The cars we drive say a lot about us
          </b>

          {cars.map((car) => (
            <SingleFeatureCar car={car} key={car._id}></SingleFeatureCar>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FeatureCar;
