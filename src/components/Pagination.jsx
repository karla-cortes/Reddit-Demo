import React from "react";

const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginatePage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}>
          <a
            className={
              number === currentPage ? "page-item active" : "page-item"
            }
            onClick={() => paginatePage(number)}
            href="!#"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
