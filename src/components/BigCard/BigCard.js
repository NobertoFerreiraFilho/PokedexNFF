import React from "react";
import { useNavigate } from "react-router-dom";

//Styles
import {
  Wrapper,
  Content,
  CardTitle,
  CardInfo,
  Image,
  PokeDetails,
  Abilities,
  GeneralInfo,
  Header,
  Physical,
  Footer,
} from "./BigCard.styles";

const BigCard = (props) => {
  const { species, chosenPokemon, closeClicked } = props;

  const Navigate = useNavigate();

  return (
    <Wrapper id="bigCard">
      <PokeDetails>
        <Header className={species[0].color.name}>
          <button id="closeTag" onClick={closeClicked}>
            ❌
          </button>
          <div className="title">
            <h3>{chosenPokemon.name}</h3>
            <p>Base Exp: {chosenPokemon.base_experience}</p>
          </div>
          <h3 className="ID">#{chosenPokemon.id}</h3>
        </Header>
        <Content>
          <CardTitle>
            <div className={`pokeImage`}>
              {chosenPokemon.sprites.other.dream_world.front_default !==
              null ? (
                <Image
                  src={chosenPokemon.sprites.other.dream_world.front_default}
                  alt={chosenPokemon.name}
                />
              ) : (
                <Image
                  src={chosenPokemon.sprites.other.home.front_default}
                  alt={chosenPokemon.name}
                />
              )}
            </div>

            {species[0].evolves_from_species?.name && (
              <p className="evolve">
                Evolves from: {species[0].evolves_from_species.name}
              </p>
            )}

            {species[0].flavor_text_entries[0]?.flavor_text && (
              <p className="text">
                {" "}
                {species[0].flavor_text_entries[0].flavor_text}{" "}
              </p>
            )}
          </CardTitle>
          <CardInfo className="ContentData">
            <div className="types">
              {chosenPokemon.types.map((type, index) => {
                return (
                  <p className={type.type.name} key={index}>
                    {type.type.name}
                  </p>
                );
              })}
            </div>
            <GeneralInfo>
              <h3>General Info</h3>
              {chosenPokemon.stats.map((stat, index) => {
                return (
                  <p key={index}>
                    {stat.stat.name}: {stat.base_stat}{" "}
                  </p>
                );
              })}
            </GeneralInfo>
            <Physical>
              <h3>Physical Attrib.</h3>
              <p> Height: {chosenPokemon.height}</p>
              <p>Weight: {chosenPokemon.weight} </p>
              <p>Height: {chosenPokemon.height} </p>
            </Physical>
            <Abilities>
              <h3>Abilities</h3>
              {chosenPokemon.abilities.map((abil, index) => {
                return <p key={index}>{abil.ability.name} </p>;
              })}
            </Abilities>
          </CardInfo>
        </Content>
        <Footer>
          <p
            onClick={() => {
              Navigate(`/Details/${chosenPokemon.id}`, {
                state: [chosenPokemon, species[0]],
              });
            }}
            className="moreInfo"
          >
            Click here for Details page!
          </p>
        </Footer>
      </PokeDetails>
    </Wrapper>
  );
};

export default BigCard;
