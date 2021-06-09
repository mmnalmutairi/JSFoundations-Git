
const BookItem = (props) => {
    return (
        <div className="Book" key={props.id}>
            <img alt={props.name} className="book-image" src={props.image} />
            <p className="text">{props.name}</p>
        </div>

    );

};

export default BookItem;