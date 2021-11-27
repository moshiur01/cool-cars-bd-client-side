import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./singleFeatureCar.css";

const SingleFeatureCar = ({ car }) => {
  return (
    <Col sm={12} md={6} lg={4} className="my-2 mx-sm-auto feature-cars">
      <Card
        className="text-center single-car"
        style={{ width: "21rem", height: "25rem" }}
      >
        <Card.Img
          className="img-fluid rounded img-thumbnail car-img"
          style={{ height: "15rem" }}
          variant="top"
          src={car.image}
        />
        <Card.Body>
          <Card.Title>{car.car}</Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Price: $</b>
                {car.price}
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Link to={`purchase/${car._id}`}>
            <Button variant="success fw-bold">Check Out</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleFeatureCar;
