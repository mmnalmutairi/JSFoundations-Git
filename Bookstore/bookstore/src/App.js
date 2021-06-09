import './App.css';
import BookList from './components/BookList';
// import Home from "./components/Home";

function App() {

  return (
    <div>
      <div>
        <h1 className="text">BookStore</h1>
        <h4 className="text">Where you can find Books</h4>
        <img
          alt="Books shop"
          src="https://i.pinimg.com/originals/e7/f5/52/e7f55226e1f9fa93978e677db0b85844.jpg"
          className="shop-image"
        />
      </div>
      <BookList />
    </div>

  );
}

export default App;
