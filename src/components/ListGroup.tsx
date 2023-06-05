import { uniqBy } from "lodash";
import AllMovies from "../data/movies.json";
import Movie from "../models/Movie";

interface ListGroupProps {
  onGenreChange: (genre: string) => void;
  currentGenre: string;
}

const getAllGenres = (): string[] => {
  if (!AllMovies) return [""];
  const distinctGenres = uniqBy(AllMovies, (movie: Movie) => movie.genre).map(
    ({ genre }) => genre
  );

  return distinctGenres.sort();
};

const ListGroup = ({ onGenreChange, currentGenre }: ListGroupProps) => {
  const genres = getAllGenres();

  const activeClass = (genre: string) => {
    return currentGenre === genre
      ? "list-group-item active"
      : "list-group-item";
  };

  return (
    <ul className="list-group">
      <li onClick={() => onGenreChange("")} className={activeClass("")}>
        All genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={activeClass(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
