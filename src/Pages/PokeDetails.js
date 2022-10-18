import  React, { useEffect, useState } from "react";
//API
import { GetPokeDatasSpecies, GetPokemonData, searchPokemon } from "../api";
//Router
import { useLocation, useParams } from "react-router-dom";
//components
import DetailsHeader from "../components/DetailsHeader/DetailsHeader";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner";

const PokeDetails = () => {
  const { pokeId } = useParams();
  //Bringing info from BigCard components trought Navigate/Location from React-router lib.
  const location = useLocation();

  //Status
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  //Data Fetched
  const [evolutionChain, setEvolutionChain] = useState();
  const [pokeDataSpecies, setPokeDataSpecies] = useState();
  const [pokeData, setPokeData] = useState();

  //Fetch dos dados primários do Pokemon
  const FetchPokeSpecies = async () => {
    if (location.state == null) {
      try {
        setLoading(true);
        setNotFound(false);
        const result = await GetPokeDatasSpecies(pokeId);
        if (!result) {
          setNotFound(true);
        } else {
          setPokeDataSpecies(result);
          setEvolutionChain(result.evolution_chain.url);
        }
        setLoading(false);
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
    }
  };

  useEffect(() => {
    FetchPokeSpecies();
  }, []);

  const FetchPokeData = async () => {
    if (location.state == null) {
      try {
        setLoading(true);
        setNotFound(false);
        const result = await searchPokemon(pokeId);
        if (!result) {
          setNotFound(true);
        } else {
          setPokeData(result);
        }
        setLoading(false);
      } catch (error) {
        console.log("fetchPokeData error: ", error);
      }
    }
  };

  useEffect(() => {
    FetchPokeData();
  }, []);

  //Fetch of the EvolutionChain
  const fetchEvolutionChain = async () => {
    if (location.state !== null) {
      try {
        setLoading(true);
        setNotFound(false);
        if (location.state[1].evolution_chain.url) {
          const result = await GetPokemonData(
            location.state[1].evolution_chain.url
          );
          if (!result) {
            setNotFound(true);
            console.log("Not found: ", notFound);
          } else {
            setEvolutionChain(result.chain);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
    } else {
      try {
        setLoading(true);
        setNotFound(false);
        if (pokeDataSpecies.evolution_chain.url) {
          const result = await GetPokemonData(
            pokeDataSpecies.evolution_chain.url
          );
          if (!result) {
            setNotFound(true);
            console.log("Not found: ", notFound);
          } else {
            setEvolutionChain(result.chain);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
    }
  };

  useEffect(() => {
    fetchEvolutionChain();
  }, [location.state, pokeDataSpecies]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      {loading && <Spinner />}
      {location.state !== null && evolutionChain && (
        <DetailsHeader
          pokeSpecies={location.state[1]}
          chain={evolutionChain}
          pokeData={location.state[0]}
        />
      )}
      {location.state === null &&
        pokeDataSpecies &&
        evolutionChain &&
        pokeData && (
          <DetailsHeader
            pokeSpecies={pokeDataSpecies}
            chain={evolutionChain}
            pokeData={pokeData}
          />
        )}
    </div>
  );
};

export default PokeDetails;
