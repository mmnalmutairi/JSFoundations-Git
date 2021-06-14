import { useState } from "react";
import Books from "../Books";
import Booksitem from "./BookItem";
import SearchBar from "./SearchBar";

const BookList = (props) => {
    const [query, setQuery] = useState(null);
    const filteredBooks = Books.filter(book => book.name.toLowerCase().includes(query));
    const BooksList = filteredBooks.map((book) => (
        <Booksitem book={book} setBook={props.setBook} />
    ));
    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <div className="list">{BooksList}</div>
        </div>

    );
};

export default BookList;