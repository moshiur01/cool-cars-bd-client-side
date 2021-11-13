import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../../Shared/Header/Header";
import useAuth from "../hooks/useAuth/useAuth";

const Purchase = () => {
  const [car, setCar] = useState({});

  // get form value
  const [shippingData, setShippingData] = useState({});

  // final data send to server site
  const [data, setData] = useState({});

  // get the current user
  const { user } = useAuth();

  let { id } = useParams();
  useEffect(() => {
    fetch(`https://cryptic-fortress-14110.herokuapp.com/allCars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newShippingData = { ...shippingData };
    newShippingData[field] = value;
    setShippingData(newShippingData);

    const data = {
      username: user?.displayName,
      email: user.email,
      carId: car?.car,
      phoneNumber: shippingData?.phoneNumber,
      address: shippingData?.address,
      price: car?.price,
    };

    setData(data);
  };

  const handlePurchase = (e) => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert("Order SuccessFully Placed");
          document.getElementById("purchase-form").reset();
        }
      });

    e.preventDefault();
  };
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col sm={8} md={6} lg={7}>
            <Container className="my-5  text-center shadow p-3 mb-5 bg-body rounded">
              <img className="rounded my-2 img-fluid" src={car?.image} alt="" />
              <h5 className="text-dark my-2">
                {car?.car} {car?.car_model}
              </h5>
              {/* <b className="text-secondary">{car?.place}</b> */}
              <p className="text-secondary">{car?.description}</p>
              <Row>
                <Col sm={12} lg={6} md={6}>
                  <ListGroup>
                    <ListGroup.Item className="text-secondary">
                      <b>Color: </b>
                      {car?.car_color}
                    </ListGroup.Item>
                    {/* <ListGroup.Item className="text-secondary">
                      <b>Year: </b>
                      {car?.car_model_year}
                    </ListGroup.Item> */}
                    <ListGroup.Item className="text-secondary">
                      <b>Availability: </b>
                      <span>
                        {car?.availability === true ? (
                          <span className="text-success">In Stock</span>
                        ) : (
                          <span className="text-info">Upcoming</span>
                        )}
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <ListGroup>
                    <ListGroup.Item className="text-secondary">
                      <b>Year: </b> {car?.car_model_year}
                    </ListGroup.Item>

                    <ListGroup.Item className="text-secondary">
                      <b>Price: </b>${car?.price}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col sm={4} md={6} lg={5}>
            <Container className="my-5  w-75 shadow p-3 mb-5 bg-body ">
              <Form id="purchase-form" onSubmit={handlePurchase}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    value={user?.displayName}
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3 my-1" controlId="formGridAddress1">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    onBlur={handleOnBlur}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    onBlur={handleOnBlur}
                    placeholder="Enter Address"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Car ID</Form.Label>
                  <Form.Control
                    value={car._id}
                    name="carId"
                    placeholder="Enter Address"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Purchase
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Purchase;
