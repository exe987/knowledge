import React from "react";
import styled from 'styled-components';


const Container=styled.div`

`
const Tittle = styled.h1`
color: white;
font-size: 85px;
text-align:center;
font-family: 'Bebas Neue', cursive;

`;

const Menu = styled.ul`
display:flex;
flex-wrap:wrap;
margin-top: 20px;
background-color: black;
justify-content:center;

`;
const MenuList = styled.li`
a{
  text-decoration: none;
  color: white;
  font-weight: bold;
};
a: hover{
  color:white;
}
list-style:none;
border-radius:15px;
margin-top:5px;
margin-bottom 5px;
margin-left: 5px;
padding:5px;
font-family: 'Archivo', sans-serif;
&:hover {
  cursor: pointer;
  background-color: rgb(37, 2, 2);
  color: white;
}
`;

function Header() {
  return (
      <Container>
      <Tittle>Knowledge</Tittle>
      <Menu>
         <MenuList><a href="!#">About the journal</a></MenuList>
         <MenuList><a href="!#">Trending</a></MenuList> 
         <MenuList><a href="!#">Earth and enviromental science</a></MenuList>
         <MenuList><a href="!#">Biological Science</a></MenuList>
         <MenuList><a href="!#">Physical Science</a></MenuList>
      </Menu>
      </Container>
  );
}

export default Header;