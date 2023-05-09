import React from "react";
import style from "./Styles.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function createPageOfSize(length) {
  return new Array(length).fill(0);
}
const Pagination = ({ postsPerPage, totalPage, paginate, currentPage }) => {
  let length = Math.ceil(totalPage / postsPerPage);
  let page = createPageOfSize(length);

  return (
    <div className={style.pagination}>
      <button
        disabled={currentPage === 1}
        style={
          currentPage === 1
            ? {
                fontSize: "12px",
                background: "rgba(151, 145, 137, 0.571)",
                color: "black",
              }
            : { fontSize: "12px",}
        }
        onClick={() => paginate(1)}>
        <IoIosArrowBack />
        <IoIosArrowBack />
      </button>
      <button
        disabled={currentPage === 1}
        style={
          currentPage === 1
            ? {fontSize:"12px", background: "rgba(151, 145, 137, 0.571)", color: "black" }
            : { fontSize: "12px",}
        }
        onClick={(prev) => paginate(currentPage - 1)}>
        <IoIosArrowBack />
      </button>
      {page.map((_, i) => (
        <div key={i}>
          <button
            style={
              currentPage === i + 1
                ? { background: "rgba(151, 145, 137, 0.571)", color: "black" }
                : { fontSize: "12px",}
            }
            disabled={currentPage === i + 1}
            onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        </div>
      ))}
      <button
        style={
          currentPage === length
            ? { fontSize: "12px", background: "rgba(151, 145, 137, 0.571)", color: "black" }
            : { fontSize: "12px",}
        }
        disabled={currentPage === length}
        onClick={(prev) => paginate(currentPage + 1)}>
        <IoIosArrowForward />
      </button>
      <button
        style={
          currentPage === length
            ? { fontSize: "12px",
             background: "rgba(151, 145, 137, 0.571)", color: "black" }
            : { fontSize: "12px",}
        }
        onClick={() => paginate(length)}>
        <IoIosArrowForward />
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
