import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import "./Review.css";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <h3 className="text-center my-4">Client's Review</h3>
      {reviews.length === 0 ? (
        <Container className="d-flex justify-content-center ">
          <Spinner animation="grow" className="mx-auto" />
        </Container>
      ) : (
        <Row>
          {reviews.map((review) => (
            <Col className="review" sm={12} md={6} lg={4}>
              <Container>
                <Card
                  className="my-2 text-center"
                  style={{ width: "25rem", height: "19rem" }}
                >
                  <Card.Img
                    variant="top"
                    className="img-fluid review-img "
                    src={review?.image}
                  />
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>{review.review}</Card.Text>
                    <Rating
                      className="rating-color"
                      initialRating={review?.ratings}
                      readonly
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star "
                    ></Rating>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Review;
