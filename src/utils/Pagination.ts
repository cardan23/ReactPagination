import Movie from "../models/Movie";
import _ from "lodash";

const pagination = (movies: Movie[], currentPage: number, pageSize: number) => {
  const startIndex = (currentPage - 1) * pageSize;

  return _(movies).slice(startIndex).take(pageSize).value();
};

export default pagination;
