import { React, useEffect, useState } from "react";
//API
import { GetPokemonData, getPokemons, GetPokeDatasSpecies } from "../api";
import axios from "axios";
//components
import Navbar from "../components/Navbar/Navbar";
import Grid from "../components/Grid/index";
import Pagination from "../components/Pagination/Pagination";
import BigCard from "../components/BigCard/BigCard";
import TypeFilterBar from "../components/TypeFilterBar/TypeFilterBar";
//Router
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);

  //States for pagination
  const [page, setPage] = useState(0);
  const [totalPages, setTotalpages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  //Conditional rendering
  const [displayPagination, setDisplayPagination] = useState(true);
  const [displayTypeBar, setDisplayTypeBar] = useState(true);
  const [showModal, setShowModal] = useState(false);

  //States for Modal
  const [chosenPokeModalMain, setChosenPokeModalMain] = useState({});
  const [chosenPokeModalSpecies, setChosenPokeModalSpecies] = useState({});

  //Fetchs secondary URL (more pokemons) and then Opens MODAL BigCard
  const onOpenBigCardHandler = async (chosenPoke) => {
    if (!chosenPoke) {
      return fetchPokemons();
    }

    setLoadingModal(true);
    setNotFound(false);

    const result = await GetPokeDatasSpecies(chosenPoke.id);
    if (!result) {
      setNotFound(true);
    } else {
      setChosenPokeModalSpecies([result]);
    }
    setLoadingModal(false);
    setShowModal(true);
    setChosenPokeModalMain(chosenPoke);
  };

  //Updade the search everytime a letter is dialed in the search bar
  const onChangeHandler = (e) => {
    if (e.target.value.length !== "") {
      setItemsPerPage(e.target.value);
    }
  };

  //Updade the search everytime a letter is dialed in the search bar
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      setDisplayPagination(true);
      setDisplayTypeBar(true);
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);

    const allPoke = await getPokemons(2000, 0); //Fetch complete list of pokemons available with name and URL
    const filteredList = allPoke.results.filter((pokeList) =>
      pokeList.name.includes(pokemon)
    ); //Filter only the ones whose name contains the string typed in the input search

    const promises = filteredList.map(async (poke) => {
      return await GetPokemonData(poke.url); //Make all the requests to the API for each url of each pokemon
    });

    const result = await Promise.all(promises); //Promise.all gather the list of promises and the "await" waits then to be answered. So It can give the results the final results.

    if (!result) {
      setNotFound(true);
    } else {
      setPokemons(result);
      setDisplayPagination(false);
      setDisplayTypeBar(false);
    }
    setLoading(false);
  };

  const onTypeFilterHandler = async (url) => {
    if (!url || url === "none") {
      setDisplayPagination(true);
      setDisplayTypeBar(true)
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    axios
      .get(url)
      .then((response) => {
        const promises = response.data.pokemon.map((pokeFilter) => {
          return GetPokemonData(pokeFilter.pokemon.url);
        });

        Promise.all(promises).then((results) => {
          setPokemons(results);
          setLoading(false);
        });
      })

      .catch((error) => console.log(`Error: ${error}`));

    setDisplayPagination(false);
    setDisplayTypeBar(true)
  };

  //Types Filter
  useEffect(() => {
    onTypeFilterHandler();
  }, []);

  //Previous page of the Grid
  const previousClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  //Next page of the Grid
  const nextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  //Fetch of Pokemons
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await GetPokemonData(pokemon.url); //Make all the requests to the API for each url of each pokemon
      });

      const results = await Promise.all(promises); //Promise.all gather the list of promises and the "await" waits then to be answered. So It can give the results the final results.

      setPokemons(results);
      setLoading(false);
      if (itemsPerPage >= 1) {
        setTotalpages(Math.ceil(data.count / itemsPerPage)); // .count counts the number of elements, in this case Pokemons
      }
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page, itemsPerPage]);

  return (
    <div
      style={{
        background: `url('pokemon_wallpaper01_1680_v3.jpg')`,
        backgroundSize: "contain",
        maxWidth: "100vw",
        backgroundRepeat: "repeaty",
      }}
    >
      <Navbar SearchHandler={onSearchHandler} searchOn={true} />
      {notFound ? (
        <>
          <Link reloadDocument>
            <div className="not-found-text">
              Pokemon ou Type não encontrado! ... CLICK AQUI PARA RETORNAR!
            </div>
          </Link>
        </>
      ) : (
        <>
          {showModal && (
            <BigCard
              species={chosenPokeModalSpecies}
              chosenPokemon={chosenPokeModalMain}
              closeClicked={() => setShowModal(false)}
            />
          )}
          {displayTypeBar && (
            <TypeFilterBar typeHandleClick={onTypeFilterHandler} />
          )}
          {displayPagination === true ? (
            <>
              <Pagination
                page={page + 1}
                totalPages={totalPages}
                previousClick={previousClickHandler}
                nextClick={nextClickHandler}
                changeHandler={onChangeHandler}
              />
            </>
          ) : (
            <h1>Results</h1>
          )}
          <Grid
            pokemons={pokemons}
            loading={loading}
            openBigCard={onOpenBigCardHandler}
          />
        </>
      )}
    </div>
  );
};

export default Home;
