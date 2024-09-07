/* eslint-disable react/prop-types */
import usePagination from "../../hooks/worldRanks/usePagination";
import "./Pagination.css";
const DOTS = ".";
function Pagination({
  handlePageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Only 2 pages do not render pagination
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  function handleNext() {
    handlePageChange(currentPage + 1);
  }

  function handlePrev() {
    handlePageChange(currentPage - 1);
  }
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="wr__pagination-container">
      <ul className="wr__pagination">
        <li
          className={`wr__pagination-item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={handlePrev}
        >
          <img
            className="wr__pagination-arrow-left"
            src="./worldRanks/left_arrow.svg"
            alt="Previous page"
          ></img>
        </li>
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={`dots-${index}`} className="wr__pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={`wr__pagination-item ${
                pageNumber === currentPage ? "wr__pagination-item-current" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              <div>{pageNumber}</div>
            </li>
          );
        })}
        <li
          className={`wr__pagination-item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
          onClick={handleNext}
        >
          <img
            className="wr__pagination-arrow-right"
            src="./worldRanks/right_arrow.svg"
          ></img>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
