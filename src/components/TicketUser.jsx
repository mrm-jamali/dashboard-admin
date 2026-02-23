import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./TicketUser.module.css";

function TicketUser() {
  const { adminData, currentUser } = useContext(UserContext);

  const userTickets = adminData.tickets.filter(
    (ticket) => ticket.user === currentUser.username
  );

  const getPriorityClass = (priority) => {
    if (priority === "high") return styles.priorityHigh;
    if (priority === "medium") return styles.priorityMedium;
    return styles.priorityLow;
  };

  const getStatusClass = (status) => {
    if (status === "open") return styles.statusOpen;
    if (status === "pending") return styles.statusPending;
    return styles.statusClosed;
  };

  return (
    <div className={styles.ticketSection}>
      <h2 className={styles.sectionTitle}>My Tickets</h2>

      {userTickets.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No tickets found.</p>
      ) : (
        <div className={styles.ticketsTable}>
          {/* Header */}
          <div className={styles.ticketsHeader}>Subject</div>
          <div className={styles.ticketsHeader}>Status</div>
          <div className={styles.ticketsHeader}>Created</div>
          <div className={styles.ticketsHeader}>Priority</div>

          {/* Rows */}
          {userTickets.map((ticket) => (
            <React.Fragment key={ticket.id}>
              <div>{ticket.subject}</div>

              <div>
                <span className={getStatusClass(ticket.status)}>
                  {ticket.status}
                </span>
              </div>

              <div>{ticket.createdAt}</div>

              <div>
                <span className={getPriorityClass(ticket.priority)}>
                  {ticket.priority}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default TicketUser;
