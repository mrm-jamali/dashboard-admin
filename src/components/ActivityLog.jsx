import styles from "./ActivityLog.module.css";

function ActivityLog({ adminData }) {
  const { activity } = adminData;

  return (
    <div className={styles.activityContainer}>
      <div className={styles.titleActive}>
        <h2>Recent Activity</h2>
      </div>

      <div className={`${styles.row} ${styles.columnTitle}`}>
        <div className={styles.col1}>Type</div>
        <div className={styles.col2}>Message</div>
        <div className={styles.col3}>Time</div>
      </div>

      {activity.map((active, i) => (
        <div key={i} className={styles.row}>
          <p className={styles.col1}>{active.type}</p>
          <p className={styles.col2}>{active.message}</p>
          <p className={styles.col3}>{active.time}</p>
          {/* <p className={styles.col2}>{log.date}</p> */}
        </div>
      ))}
    </div>
  );
}

export default ActivityLog;
