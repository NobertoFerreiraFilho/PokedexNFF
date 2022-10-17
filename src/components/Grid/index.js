import React from "react";
//COMPONENTS
import Pokemon from "../Pokemon/Pokemon";
import Spinner from "../Spinner"
//STYLES
import { Wrapper, CardGrid } from "./Grid.styles";


const Grid = (props) => {
  const { pokemons, loading, openBigCard} = props;

  return (
    <Wrapper>
      {loading ? (
        <Spinner/>
        ) : (
        <CardGrid  >
          {pokemons &&
            pokemons.map((pokes, index) => {
              return (               
                <Pokemon key={index} pokemon={pokes} handleClick={openBigCard}/>
              );
            })}
        </CardGrid>
      )}
    </Wrapper>
  );
};

export default Grid;
