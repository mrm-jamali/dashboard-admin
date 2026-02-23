import React from 'react';
import styles from "./Pageination.module.css";
import { IoIosArrowForward } from "react-icons/io";

function Pageination({ currentPage, setCurrentPage, totalItems }) {
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalPages)

  const pageHandler = (num) => {
    setCurrentPage(num);
  };

  const nextHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => pageHandler(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </span>
        ))}

        <span onClick={nextHandler} className={styles.NextBtn}>
          Next
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default Pageination;
