import { BookList } from "./components/BookList/BookList";
import { Button } from "./components/Button/Button";
import "./App.css";

function App() {
  const books = [
    { title: "Золушка", author: "Автор 1", id: "id-1" },
    { title: "Гаррі Потер", author: "Автор 2", id: "id-2" },
    { title: "Маленький принц", author: "Автор 3", id: "id-3" },
  ];

  return (
    <>
      <BookList books={books} />
      <Button title="Реєстрація"/>
    </>

  );
}

export default App;
