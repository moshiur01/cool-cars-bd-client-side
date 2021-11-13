import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // delete
  const handleDelete = (id) => {
    const url = `https://cryptic-fortress-14110.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("order Deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrder(remaining);
          }
        }
      });
  };

  // update status

  const handleConfirm = (id) => {
    localStorage.setItem("status", id);
    const confirm = window.confirm("Do you want to confirm?");
    if (confirm) {
      alert("Order Confirmed");
      const remaining = orders.filter((order) => order._id !== id);
      setOrder(remaining);
    }
  };
  return (
    <Container>
      <Table responsive="sm" className="text-center">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Car Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="align-items-center" key={order.carId}>
              <td>{order?.email}</td>
              <td>{order?.carId}</td>
              <td>{order?.price}</td>
              <td>
                <Button
                  variant="danger mx-2"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  onClick={() => handleConfirm(order._id)}
                >
                  Confirm
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageOrders;
