import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import useCars from "../hooks/useCars/useCars";
import { Link } from "react-router-dom";

const Explore = () => {
  const { cars } = useCars();
  return (
    <>
      <Header></Header>
      <Container className="mx-auto">
        <h2 className="text-center my-5">Explore Your Desire Car</h2>
        {cars.length === 0 ? (
          <Container className="d-flex justify-content-center ">
            <Spinner animation="grow" className="" />
          </Container>
        ) : (
          <Row>
            {cars.map((car) => (
              <Col sm={12} md={6} lg={4} className="my-3 ">
                <Card
                  className="text-center"
                  style={{ width: "18rem", height: "28rem" }}
                >
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
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Explore;
