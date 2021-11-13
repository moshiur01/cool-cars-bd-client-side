import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-fortress-14110.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // side effects
  useEffect(() => {
    const found = orders.filter((order) => order?.email === user.email);
    setMyOrders(found);
  }, [orders, user.email]);

  // delete
  const handleDelete = (id) => {
    const url = `https://cryptic-fortress-14110.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("DO you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("order Deleted");
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        }
      });
  };

  // update status
  const orderStatus = localStorage.getItem("status");

  return (
    <Container className="my-orders">
      <Table responsive="sm" className="text-center">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Car Name</th>
            <th>Price</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order) => (
            <tr className="align-items-center" key={order.carId}>
              <td>{order?.username}</td>
              <td>{order?.email}</td>
              <td>{order?.carId}</td>
              <td>{order?.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                {order._id === orderStatus ? (
                  <span className="text-success">Shipped</span>
                ) : (
                  <span className="text-info">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyOrders;
