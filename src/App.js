import React, {useContext} from 'react';
import NewsState from './context/news/newsState';
import Prueba from './prueba'

function App() {



 
  return (
    
   <NewsState>
     <Prueba/>
   </NewsState>
  
  );
}

export default App;
