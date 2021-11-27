import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import useCars from "../hooks/useCars/useCars";
import { Link } from "react-router-dom";
import loadingImage from "../Home/FeatureCars/image/laoding-image.gif";

const Explore = () => {
  const { cars } = useCars();
  return (
    <>
      <Header></Header>
      <Container className="mx-auto">
        <h1 className="text-center my-5">Explore Your Desire Car</h1>
        {cars.length === 0 ? (
          <Container className="d-flex justify-content-center ">
            <img src={loadingImage} className="image-fluid" alt="" />
          </Container>
        ) : (
          <Row>
            {cars.map((car) => (
              <Col sm={12} md={6} lg={4} className="my-3 ">
                <Card
                  className="text-center single-car"
                  style={{ width: "20rem", height: "25rem" }}
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
                          <b>Price: $</b>
                          {car.price}
                        </ListGroupItem>
                      </ListGroup>
                    </Card.Text>
                    <Link to={`purchase/${car._id}`}>
                      <Button variant="success fw-bold">Explore Now</Button>
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
