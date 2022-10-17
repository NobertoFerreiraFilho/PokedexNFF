import React from "react";
//Styles
import { Wrapper, Content, Image, CardTitle, CardInfo } from "./Pokemon.styles";

const Pokemon = (props) => {
  const { pokemon, handleClick } = props;

  return (
    <Wrapper onClick={() => handleClick(pokemon)}>
      {pokemon && (
        <div className="pokeImage">
          {pokemon.sprites.other.dream_world.front_default !== null ? (
            <Image
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          ) : (
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      )}
      {pokemon && (
        <Content>
          <h3 className="ID">#{pokemon.id}</h3>
          <CardTitle>
            <h3>{pokemon.name}</h3>
          </CardTitle>
          <CardInfo className="ContentData">
            {pokemon.types.map((type, index) => {
              return (
                <p key={index} className={type.type.name}>
                  {" "}
                  {type.type.name}
                </p>
              );
            })}
          </CardInfo>
          <p className="moreInfo">Click for more info</p>
        </Content>
      )}
      ;
    </Wrapper>
  );
};

export default Pokemon;
