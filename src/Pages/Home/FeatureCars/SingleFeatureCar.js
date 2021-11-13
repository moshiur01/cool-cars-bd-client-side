import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleFeatureCar = ({ car }) => {
  return (
    <Col sm={12} md={6} lg={4} className="my-2 mx-sm-auto feature-cars">
      <Card className="text-center" style={{ width: "18rem", height: "28rem" }}>
        <Card.Img
          className="img-fluid rounded img-thumbnail"
          style={{ height: "15rem" }}
          variant="top"
          src={car.image}
        />
        <Card.Body>
          <Card.Title>{car.car}</Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Color: </b> {car.car_color}
              </ListGroupItem>
              <ListGroupItem>
                <b>Model Year:</b> {car.car_model_year}
              </ListGroupItem>
              <ListGroupItem>
                <b>Price: $</b>
                {car.price}
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Link to={`purchase/${car._id}`}>
            <Button variant="success">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleFeatureCar;
