import React, {useContext, useEffect} from 'react';
import NewsContext from './context/news/newsContext'

const Prueba = () => {
    const prueba = useContext(NewsContext);
    const {chargeIndex, title, article } = prueba
    
    useEffect(()=> {
        chargeIndex()
    }, [])


    return ( 
        <div>
          aaaaaaa       </div>
     );
}
 
export default Prueba;