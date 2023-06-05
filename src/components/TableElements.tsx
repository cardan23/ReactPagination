import Movie from "../models/Movie";

interface tableElementsProps {
  elements: Movie[];
  currentPage: number;
  pageSize: number;
  onOrderByField: (value: string) => void;
}

const TableElements = ({
  elements,
  currentPage,
  pageSize,
  onOrderByField,
}: tableElementsProps) => {
  let counter = (currentPage - 1) * pageSize + 1;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th
            className="clickable"
            scope="col"
            onClick={() => onOrderByField("title")}
          >
            Title
          </th>
          <th
            className="clickable"
            scope="col"
            onClick={() => onOrderByField("genre")}
          >
            Genre
          </th>
          <th
            className="clickable"
            scope="col"
            onClick={() => onOrderByField("rate")}
          >
            Rate
          </th>
        </tr>
      </thead>
      <tbody>
        {elements.map((movie) => (
          <tr key={counter++}>
            <th scope="row">{counter}</th>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableElements;
