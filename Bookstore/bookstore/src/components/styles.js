import styled from "styled-components";

export const GlobalStyle = styled.body`
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
`;

export const Title = styled.h1`
text-align: center;
color: white;
font-size: 40px;
background-color: #84a59d;
`;

export const SearchBarStyled = styled.input`
padding: 0.5rem;
margin: 1rem auto;
display: block;
width: 40%;
`;

export const Description = styled.h4`
text-align: center;
color: white;
background-color: #84a59d;
font-size: 30px;
`;

export const Image = styled.img`
border-style: solid;
border-color: #84a59d;
border-width: 10px;
`;

export const Button = styled.button`
font-size: 20px;
margin: 2em;
border-radius: 14px;
background-color: ${props => props.theme.mainColor};
color: ${props => props.theme.backgroundColor};
`;
