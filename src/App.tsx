import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import { useState } from "react";
import AllMovies from "./data/movies.json";
import Paginate from "./components/Paginate";
import TableElements from "./components/TableElements";
import pagination from "./utils/Pagination";
import { pageSize } from "./cofigs/configPagination.json";
import ListGroup from "./components/ListGroup";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentGenre, setCurrentGenre] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortWay, setSortWay] = useState<boolean | "asc" | "desc">(false);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const onGenreChange = (genre: string) => {
    setCurrentPage(1);
    setCurrentGenre(genre);
  };

  const onOrderByField = (field: string) => {
    if (field === sortColumn) {
      setSortWay(sortWay === "asc" ? "desc" : "asc");
    } else {
      setSortWay("asc");
    }
    setSortColumn(field);
  };

  const visibleMovies = currentGenre
    ? AllMovies.filter((item) => item.genre === currentGenre)
    : AllMovies;

  const sortedAndVisibleMovies = _.orderBy(
    visibleMovies,
    [sortColumn],
    [sortWay]
  );

  const paginatedMovies = pagination(
    sortedAndVisibleMovies,
    currentPage,
    pageSize
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <ListGroup
              onGenreChange={onGenreChange}
              currentGenre={currentGenre}
            />
          </div>
          <div className="col-9">
            <TableElements
              elements={paginatedMovies}
              currentPage={currentPage}
              pageSize={pageSize}
              onOrderByField={onOrderByField}
            />
            <Paginate
              totalElements={sortedAndVisibleMovies.length}
              elementsByPage={pageSize}
              currentPage={currentPage}
              onPageChange={onChangePage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
