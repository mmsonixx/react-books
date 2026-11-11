import { BookItem } from "../BookItem/BookItem";
export const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem bookElement={book} key={book.id}  />
    ))}
  </ul>
);
