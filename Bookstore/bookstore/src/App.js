import './App.css';
import BookList from './components/BookList';
import { ThemeProvider } from "styled-components";
import { Title, Description, Image, Button } from './components/styles';
// import Home from "./components/Home";
import { useState } from "react";
import { GlobalStyle } from './components/styles';

const theme = {
  light: {
    mainColor: "#84a59d",
    background: "#f5cac3",
  },
  dark: {
    mainColor: "#f5cac3",
    background: "#84a59d",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <div>
          <Title>BookStore</Title>
          <Description>Where you can find Books</Description>
          <Button onClick={toggleTheme}> {currentTheme === "light" ? "Dark" : "Light"} mode </Button>
          <Image
            alt="Books shop"
            src="https://i.pinimg.com/originals/e7/f5/52/e7f55226e1f9fa93978e677db0b85844.jpg"
            className="shop-image"
          />
        </div>
        <BookList />
      </ThemeProvider>
    </div>

  );
}

export default App;
