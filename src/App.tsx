import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookListType } from './types';

function App() {
  const [livroAtual, setLivroAtual] = useState(0);
  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[livroAtual] } showDetails />
        <div className="selector-buttons">
          <button onClick={ () => setWishList([...wishList, data[livroAtual]]) }>
            Adicionar à lista de desejos
          </button>
          <button onClick={ () => setReadingList([...readingList, data[livroAtual]]) }>
            Adicionar à lista de leitura
          </button>
          <button onClick={ () => setReadList([...readList, data[livroAtual]]) }>
            Adicionar à lista de lidos
          </button>
          <button>Adicionar à lista de leitura</button>
          <button>Adicionar à lista de lidos</button>
          <button onClick={ () => setLivroAtual((livroAtual + 1) % data.length) }>
            Próximo livro
          </button>
        </div>
      </div>

      <div className="list-buttons">
        <button>Exibir lista de desejos</button>
        <button>Exibir lista de leitura</button>
        <button>Exibir lista de lidos</button>
      </div>
      <h1>Lista de desejos</h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
