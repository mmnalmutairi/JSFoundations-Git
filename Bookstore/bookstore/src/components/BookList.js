import Books from "../Books";
import Booksitem from "./BookItem";

const BookList = () => {
    const BooksList = Books.map((book) => (
        <Booksitem name={book.name} image={book.image} key={book.id} />
    ));
    return (
        <div className="list">{BooksList}</div>
    )
};

export default BookList;