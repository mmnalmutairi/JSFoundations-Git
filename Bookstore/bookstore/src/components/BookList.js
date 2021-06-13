import { useState } from "react";
import Books from "../Books";
import Booksitem from "./BookItem";
import SearchBar from "./SearchBar";

const BookList = () => {
    const [query, setQuery] = useState(null);
    const filteredBooks = Books.filter(book => book.name.includes(query));
    const BooksList = filteredBooks.map((book) => (
        <Booksitem name={book.name} image={book.image} key={book.id} />
    ));
    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <div className="list">{BooksList}</div>
        </div>

    );
};

export default BookList;