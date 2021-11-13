import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./addCars.css";

const AddCars = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://cryptic-fortress-14110.herokuapp.com/allCars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added A New Service");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <Container className="text-center container-fluid manage-services">
      <h2 className="text-Secondary  my-3">Add A New Car</h2>

      <form className="add-car-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Car Name"
          {...register("car", { required: true, maxLength: 20 })}
        />
        <br />
        <input placeholder="Enter Car Color" {...register("car_color")} />
        <br />
        <input
          placeholder="Enter Car Model Release Year"
          {...register("car_model_year")}
        />
        <br />
        <input placeholder="Enter Price" {...register("price")} />
        <br />
        <input
          type="boolean"
          placeholder="Availability (True/False)"
          {...register("availability")}
        />
        <br />
        <input placeholder="Enter Image URL" {...register("image")} />
        <br />
        <textarea
          placeholder="Enter Car Description"
          {...register("description")}
        />
        <br />
        <input type="submit" className="btn btn-success" />
      </form>
    </Container>
  );
};

export default AddCars;
