import React from 'react';
import { BookWrapper } from './styles';

const BookDetail = (props) => {
    return (
        <BookWrapper>
            <h1> Books Detail </h1>
            <img src={props.book.img} alt={props.book.name} />
            <p>{props.book.name}</p>
            <p>{props.book.brief}</p>
        </BookWrapper>
    );

};

export default BookDetail;