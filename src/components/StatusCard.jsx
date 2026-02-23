import React from 'react'
import styles from "./StatsCard.module.css"

function StatusCard({DataCard}) {

  return (
   <div className={styles.statescards}>
      {DataCard.map((card, index) => (
        <div key={index} className={styles.cards}>
          <div className={styles.titlecard}>
            <span>{card.title}</span>
            <span>{card.icon}</span>
          </div>

          <span className={styles.value}>{card.value}</span>
        </div> 
      ))}
    </div>





  )
}

export default StatusCard
