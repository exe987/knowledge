import React from "react";
import styled, {keyframes} from 'styled-components';

const ContainerT=styled.div`
`
const circle = keyframes`
0%   {transform: translate(0px); border: 3px solid rgb(246, 164, 164);}
50%  {transform: translate(100px); border: 3px solid rgb(161, 49, 49);}
100% {transform: translate(180px); border: 3px solid rgb(128, 3, 3);}
`;


const TrendingTop= styled.div`
width: 150px;
height: 150px;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
border-radius: 50%;
border: 2px solid rgb(240, 148, 95);
margin-top:40px;
animation: ${circle} 4s linear infinite;
animation-direction:alternate-reverse;
`;
const TittleT=styled.h2`
position : absolute;
margin-top: -90px;
margin-left:100px;
`;

const NewsT=styled.div`
margin-top: 70px;
margin-left:50px;
`;
const NewTittleT=styled.h3`
border:1px solid white;
width:400px;
`;
const NewInfoT=styled.p`
border: 1px solid white;
width:400px;
`;
const NewImageT= styled.div`
border: 1px solid white;
height:200px;
width:400px;
`




function Trending() {
    return (
        <ContainerT>
            <TrendingTop>
            </TrendingTop>
            <TittleT>Trending Top</TittleT>
           
            <NewsT>
              <NewTittleT>Noticia 1 2 3 </NewTittleT>
              <NewInfoT>Autores y año</NewInfoT>
              <NewImageT>Imagen de la noticia</NewImageT>
            </NewsT>
       
 
        </ContainerT>
    );
  }
  
  export default Trending;