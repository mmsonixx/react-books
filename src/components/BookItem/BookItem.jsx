import { Button } from "../Button/Button";
import PropTypes from 'prop-types';

export const BookItem = ({ bookElement }) => (
  <li>
    <h2>{bookElement.title}</h2>
    <p>{bookElement.author}</p>
   <Button title="Замовити"/>
  </li>
);

BookItem.propTypes = {
  bookElement: PropTypes.shape ({
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  })
}