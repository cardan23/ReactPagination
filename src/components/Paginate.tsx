import _ from "lodash";

interface PaginateProps {
  totalElements: number;
  elementsByPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const getNumberOfPages = (total: number, byPage: number): number => {
  if (!total || !byPage) return 0;

  return Math.ceil(total / byPage);
};

const Paginate = ({
  totalElements,
  elementsByPage,
  currentPage,
  onPageChange,
}: PaginateProps) => {
  const pages = getNumberOfPages(totalElements, elementsByPage);

  if (pages === 0 || pages === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {_.range(1, pages + 1).map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
