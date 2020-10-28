import React, { useReducer, useEffect } from "react";
import newsReducer from "./newsReducer";
import NewsContext from "./newsContext";
import axios from "axios";
import { CHARGE_PAGE } from "../../Types/Types";

const NewsState = (props) => {
  //INITIAL STATE
  const initialState = {
    news: [],
    new: null,
    category: null,
    title: null,
    article: null
  };

  //REDUCER
  const [state, dispatch] = useReducer(newsReducer, initialState);

  //CHARGE INDEX PAGE
  const chargeIndex = async () => {
    const respuesta = await axios.get(
      `http://api.springernature.com/meta/v2/json?q=doi:10.1007/BF00627098&api_key=f5c0881a842f2ec848d9f86be3758ec3`
    );
    console.log(respuesta.data)
    dispatch({
      type: CHARGE_PAGE,
      payload: respuesta.data.records[0],
    });
  };

  return (
    <NewsContext.Provider value={{
      title: state.title,
      article: state.article,
      chargeIndex
    }}>{props.children}</NewsContext.Provider>
  );
};

export default NewsState;
