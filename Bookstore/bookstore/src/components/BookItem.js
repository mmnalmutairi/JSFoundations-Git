import styled from "styled-components";
import { BookWrapper } from './styles';

const Name = styled.p`
text-align: center;
color: #14213d;
font-size: 20px;
font-weight: 10px;
font-family:'Times New Roman', Times, serif;
`;

const BooksImage = styled.img`
border-style: solid;
border-color: #84a59d;
border-width: 5px;
height: 300px;
`;

const BookItem = (props) => {
    return (
        <BookWrapper>
            <img
                alt={props.book.name}
                src={props.book.image}
                onClick={() => props.setbook}
            />

            <div className="Book" key={props.id}>
                <BooksImage alt={props.name} className="book-image" src={props.image} />
                <Name>{props.name}</Name>
            </div>
        </BookWrapper>

    );

};

export default BookItem;