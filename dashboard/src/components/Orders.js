import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]); // Use lowercase for consistency
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track active order index

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  const handleUpdateClick = (index) => {
    setSelectedIndex(index);
  };

  const handleUpdate = (index, field, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index][field] = value;
    setOrders(updatedOrders);
  };

  return (
    <div className="order-table">
      {!orders.length ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            <th></th>
          </tr>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>
                {selectedIndex === index ? (
                  <input
                    type="number"
                    value={order.qty}
                    style={{ width: "30px" }}
                    onChange={(e) => handleUpdate(index, "qty", e.target.value)}
                  />
                ) : (
                  order.qty
                )}
              </td>
              <td>
                {selectedIndex === index ? (
                  <input
                    type="number"
                    value={order.price}
                    style={{ width: "30px" }}
                    autoFocus
                    onChange={(e) => handleUpdate(index, "price", e.target.value)}
                  />
                ) : (
                  order.price
                )}
              </td>
              <td>{order.mode}</td>
              <td>
                {selectedIndex !== index ? ( // Button only shown for non-active orders
                  <button
                    className="button-primary"
                    onClick={() => handleUpdateClick(index)}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="button-primary"
                    onClick={() => setSelectedIndex(-1)} // Reset active index on "Done"
                  >
                    Done
                  </button>
                )}
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Orders;