import React, { useEffect, useState } from "react";
//Router
import { Link } from "react-router-dom";
//API
import { searchPokemon, GetPokemonData } from "../../api";
//Components
import Grid from "../Grid";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
//Styles
import {
  Wrapper,
  Header,
  Buttons,
  PhysicalInfo,
  FightInfo,
  TypeInfo,
  Image,
  GeneralInfo,
  Text,
  Abilities,
  ShowcaseTop,
  Showcase,
  ShowcaseSide,
  ShowcaseBottom,
} from "./DetailsHeader.styles";

const DetailsHeader = (props) => {
  const { pokeSpecies, pokeData, chain } = props;
  const [photo, setPhoto] = useState("1");
  const [flavorText, setFlavorText] = useState("3");

  const [chosenPokemon, setChosenPokemon] = useState("");
  const [chainData, setChainData] = useState();
  const [typeData, setTypeData] = useState();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);


  const url_photo = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeSpecies.id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeSpecies.id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeSpecies.id}.svg`,
  ];


  const fetchType = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      const promises = pokeData.types.map(async (pokemon) => {
        return await GetPokemonData(pokemon.type.url); //Make all the requests to the API for each url of each pokemon
      });

      const results = await Promise.all(promises); //Promise.all gather the list of promises and the "await" waits then to be answered. So It can give the results the final results.

      if (!results) {
        setNotFound(true);
      } else {
        setTypeData(results);
      }
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchType();
  }, [pokeData]);

  const fetchChain = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      if (
        chain.evolves_to.length > 0 &&
        chain.evolves_to.length !== undefined
      ) {
        const promises = chain.evolves_to.map(async (evolution) => {
          return await searchPokemon(evolution.species.name); //Make all the requests to the API for each url of each pokemon
        });
        const results = await Promise.all(promises); //Promise.all gather the list of promises and the "await" waits then to be answered. So It can give the results the final results.

        const results1 = await searchPokemon(chain.species.name);
        results.unshift(results1);

        if (
          chain.evolves_to[0].evolves_to.length > 0 &&
          chain.evolves_to[0].evolves_to.length !== undefined
        ) {
          const results2 = await searchPokemon(
            chain.evolves_to[0].evolves_to[0].species.name
          );
          results.push(results2);

          if (
            chain.evolves_to[0].evolves_to[0].evolves_to > 0 &&
            chain.evolves_to[0].evolves_to[0].evolves_to !== undefined
          ) {
            const results3 = await searchPokemon(
              chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name
            );
            results.push(results3);
          }
        }

        if (!results) {
          setNotFound(true);
        } else {
          setChainData(results);
        }
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log("fetchChain error: ", error);
    }
  };

  useEffect(() => {
    fetchChain();
  }, [chain]);

  const changePoke = (chosenPoke) => {
    setChosenPokemon(chosenPoke);
  };

  return (
    <div
      style={{
        background: `url('public/pokemon_wallpaper01_1680_v3.jpg')`,
        backgroundSize: "contain",
        maxWidth: "100vw",
        backgroundRepeat: "repeaty",
      }}
    >
      <Wrapper>
        <Buttons className="pokeButtons">
          <Link to={`/details/${pokeData.id - 1}`} reloadDocument>
            <FontAwesomeIcon icon={faChevronLeft} size="4x" color="white" />
          </Link>
          <Header /* className={pokeSpecies.color.name} */>
            <p className="id">#{pokeSpecies.id}</p>
            <h1 className="name">{pokeSpecies.name}</h1>
          </Header>
          <Link to={`/details/${pokeData.id + 1}`} reloadDocument>
            <FontAwesomeIcon icon={faChevronRight} size="4x" color="white" />
          </Link>
        </Buttons>
        <GeneralInfo>
          <ShowcaseTop className="Photo">
            <Image src={url_photo[photo]} />
            <Buttons className="photoButtons">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="1x"
                color="white"
                onClick={() => {photo>0 && setPhoto(photo-1)}}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                size="1x"
                color="white"
                onClick={() => {photo<2 && setPhoto(1+parseInt(photo))}}
              />
            </Buttons>
          </ShowcaseTop>
          <Showcase>
            <h4>Description:</h4>
            <Text>
              <div className="flavor-text">
                <Buttons className="flavorHeader">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="1x"
                    color="white"
                    onClick={() => {flavorText > 0 && setFlavorText(flavorText-1)}}
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="1x"
                    color="white"
                    onClick={() => {flavorText < pokeSpecies.flavor_text_entries.length && setFlavorText(parseInt(flavorText)+1)}}
                  />
                </Buttons>
                {pokeSpecies.flavor_text_entries[flavorText].flavor_text}
                <div className="otherInfos">
                  {pokeSpecies.habitat !== null ? (
                    <p>Habitat: {pokeSpecies.habitat.name}</p>
                  ) : (
                    <p>Habitat: Not Found!</p>
                  )}
                  <p>Capture rate: {pokeSpecies.capture_rate}</p>
                </div>
                <Abilities>
                  <h4>Abilities:</h4>
                  <div>
                    {pokeData.abilities.map((abil, index) => {
                      return <p key={index}>{abil.ability.name} </p>;
                    })}
                  </div>
                </Abilities>
                <div className="Types">
                  <h4>Types:</h4>
                  {pokeData.types.map((type, index) => (
                    <p className={type.type.name} key={index}>
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </Text>
          </Showcase>
          <ShowcaseSide className="sideTable">
            <h3>Physical Attrib. </h3>
            <PhysicalInfo>
              <div>
                <p className="title">Height:</p>
                <p className="data"> {pokeData.height} ft</p>
              </div>
              <div>
                <p className="title">weight:</p>
                <p className="data"> {pokeData.weight} lbs</p>
              </div>
              <div>
                <p className="title">Base Exp.:</p>
                <p className="data">{pokeData.base_experience}</p>
              </div>
              <div>
                <p className="title">Base happiness:</p>
                <p className="data"> {pokeSpecies.base_happiness}</p>
              </div>
              <div>
                <p className="title">Growth rate:</p>
                <p className="data"> {pokeSpecies.growth_rate.name}</p>
              </div>
              <div>
                <p className="title">Shape:</p>
                <p className="data"> {pokeSpecies.shape.name}</p>
              </div>
            </PhysicalInfo>
            <h3>Fight Attrib. </h3>
            <FightInfo>
              {pokeData.stats.map((stat, index) => {
                return (
                  <div>
                    <p key={index} className="title">
                      {stat.stat.name}:
                    </p>
                    <p key={stat.base_stat} className="data">
                      {stat.base_stat}
                    </p>
                  </div>
                );
              })}
            </FightInfo>
          </ShowcaseSide>
          <ShowcaseBottom className="bottom-info">
            <TypeInfo>
              <div className="Strenght">
                <h4>Strenght:</h4>
                {typeData &&
                  typeData.map((type, index) => (
                    <div key={type.name} className="TypeDetails">
                      <h4 key={index}>{type.name}</h4>
                      <div className="typeData">
                        <h5>2x dmg to:</h5>
                        {type.damage_relations.double_damage_to.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                      <div className="typeData">
                        <h5>1/2x dmg from:</h5>
                        {type.damage_relations.half_damage_from.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                      <div className="typeData">
                        <h5>No dmg from:</h5>
                        {type.damage_relations.no_damage_from.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="weakness">
                <h4>Weakness:</h4>
                {typeData &&
                  typeData.map((type, index) => (
                    <div className="TypeDetails">
                      <h4 key={index}>{type.name}</h4>
                      <div className="typeData">
                        <h5>2x damage from:</h5>
                        {type.damage_relations.double_damage_from.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                      <div className="typeData">
                        <h5>Half damage to:</h5>
                        {type.damage_relations.half_damage_to.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                      <div className="typeData">
                        <h5>No damage to:</h5>
                        {type.damage_relations.no_damage_to.map(
                          (damage, index) => (
                            <p className={damage.name} key={index}>
                              {damage.name}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </TypeInfo>
            <Text>
              <h4>Evolution Chain:</h4>
            </Text>
            <Link to={`/Details/${chosenPokemon.name}`} reloadDocument>
              <Grid
                pokemons={chainData}
                loading={loading}
                openBigCard={changePoke}
              />
            </Link>
          </ShowcaseBottom>
        </GeneralInfo>
      </Wrapper>
    </div>
  );
};

export default DetailsHeader;
