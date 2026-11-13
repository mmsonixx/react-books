import { BookList } from "./components/BookList/BookList";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";

import "./App.css";

function App() {
  const books = [
    { title: "Золушка", author: "Автор 1", id: "id-1" },
    { title: "Гаррі Потер", author: "Автор 2", id: "id-2" },
    { title: "Маленький принц", author: "Автор 3", id: "id-3" },
  ];

  return (
    <>
      <header>
        <h2>Welcome</h2>
      </header>
      <main>
        <section>
          <Container>
            <h1>Hero</h1>
          </Container>
        </section>
        <section>
          <Container>
            <BookList books={books} />
            <Button title="Реєстрація" />
          </Container>
        </section>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
