import { BookItem } from "../BookItem/BookItem";
import PropTypes from "prop-types";
export const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem bookElement={book} key={book.id} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};
