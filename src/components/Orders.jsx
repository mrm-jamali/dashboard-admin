import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";
import styles from "./Orders.module.css";

function Orders() {
  const { adminData } = useContext(UserContext);
  const orders = adminData.orders;

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "green";
      case "pending":
        return "gold";
      case "cancelled":
        return "red";
      case "refunded":
        return "orange";
      case "shipped":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <>
      <h2 className={styles.titleOrder}>My Orders</h2>

      <div className={styles.container}>
        <div className={styles.orderHeaders}>
          <div className={styles["col-id"]}>Order ID</div>
          <div className={styles["col-amount"]}>Amount</div>
          <div className={styles["col-status"]}>Status</div>
          <div className={styles["col-date"]}>Order Date</div>
        </div>

        {orders.map((order) => (
          <div key={order.orderId} className={styles.orderItem}>
            
            <div className={styles["col-id"]} data-label="Order ID">
              {order.orderId}
            </div>

            <div className={styles["col-amount"]} data-label="Amount">
              {order.amount}
            </div>

            <div className={styles["col-status"]} data-label="Status">
              <span
                className={styles.orderStatus}
                style={{ backgroundColor: getStatusColor(order.status) }}
              >
                {order.status}
              </span>
            </div>

            <div className={styles["col-date"]} data-label="Order Date">
              {order.date}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Orders;
