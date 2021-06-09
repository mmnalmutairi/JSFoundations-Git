import './App.css';
import BookList from './components/BookList';
import styled from "styled-components";
// import Home from "./components/Home";


const Title = styled.h1`
text-align: center;
color: white;
font-size: 40px;
background-color: #84a59d;
`;

const Description = styled.h4`
text-align: center;
color: white;
background-color: #84a59d;
font-size: 30px;
`

const Image = styled.img`
border-style: solid;
border-color: #84a59d;
border-width: 10px;
`
function App() {

  return (
    <div>
      <div>
        <Title>BookStore</Title>
        <Description>Where you can find Books</Description>
        <Image
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
