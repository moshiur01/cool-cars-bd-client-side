import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://cryptic-fortress-14110.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Thank You for Your Review");
          reset();
        }
      });

    // console.log(data);
  };
  return (
    <Container className="text-center add-review ">
      <form className="add-car-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Name"
          value={user.displayName}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input value={user.photoURL} {...register("image")} />
        <br />
        <textarea placeholder="write Your Review" {...register("review")} />
        <br />
        <input placeholder="Enter Rating Number" {...register("ratings")} />
        <br />
        <input className="btn btn-info text-white" type="submit" />
      </form>
    </Container>
  );
};

export default AddReview;
