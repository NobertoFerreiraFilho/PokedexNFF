import React from "react";
import { Link } from "react-router-dom";
//Components
import SearchBar from "../SearchBar/SearchBar";
import ScrollButton from "../ScrollButton/ScrollButton";
//styles
import { Content, GitButton, Wrapper } from "./Navbar.styles";

const Navbar = (props) => {
  const { SearchHandler, searchOn } = props;

  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Wrapper>
      <Content>
        <Link to="/" reloadDocument>
          <img alt="poke-Photo" src={logoImg} />
          <p>By Noberto Ferreira Filho</p>
        </Link>
        {searchOn && <SearchBar onSearch={SearchHandler} />}
        <a href='https://github.com/NobertoFerreiraFilho/PokedexNF' target='_blank'>
        <GitButton >Go to Noberto's GitHub</GitButton>
        </a>
        <ScrollButton />
      </Content>
    </Wrapper>
  );
};
export default Navbar;
