import React from "react";
import { useState, useEffect } from "react";
//Styles
import { Content, Wrapper } from "./TypeFilterBar.styles";
//API
import axios from "axios";

const TypeFilterBar = (props) => {
  const { typeHandleClick } = props;
  const [pokeTypes, setPokeTypes] = useState([]);

  const getTypeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((response) => {
        setPokeTypes(response.data.results);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getTypeList();
  }, []);



  
  return (
    <Wrapper>
      <Content>
        {pokeTypes.map((types, index) => {
          return (

              <button
                key={index}
                className={types.name}
                onClick={() => typeHandleClick(types.url)}
              >
                {types.name}
              </button>

          );
        })}
        ;
      </Content>
        <button
          key={"none"}
          className="none"
          onClick={() => typeHandleClick("none")}
        >
          Clear Type Filter
        </button>
    </Wrapper>
  );
};

export default TypeFilterBar;
