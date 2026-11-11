import { Button } from "../Button/Button";
export const BookItem = ({ bookElement }) => (
  <li>
    <h2>{bookElement.title}</h2>
    <p>{bookElement.author}</p>
   <Button title="Замовити"/>
  </li>
);
