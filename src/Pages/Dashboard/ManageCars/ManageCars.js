import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // delete
  const handleDelete = (id) => {
    const url = `https://cryptic-fortress-14110.herokuapp.com/allCars/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Car Deleted");
            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        }
      });
  };
  return (
    <Container>
      <Table responsive="sm" className="text-center">
        <thead>
          <tr>
            <th>Car Img</th>
            <th>Car name</th>
            <th>Car ID</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car?.key}>
              <td>
                <img
                  src={car?.image}
                  className="img-fluid "
                  style={{ width: "10rem" }}
                  alt=""
                />
              </td>
              <td>{car?.car}</td>
              <td>{car?._id}</td>
              <td>{car?.price}</td>
              <td>
                <Button
                  variant="danger mx-2"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageCars;
