import React from "react";
import { Link } from "react-router-dom";
//Components
import SearchBar from "../SearchBar/SearchBar";
import ScrollButton from "../ScrollButton/ScrollButton";
//styles
import { Content, ContentLogo, GitButton, Wrapper } from "./Navbar.styles";

const Navbar = (props) => {
  const { SearchHandler, searchOn } = props;

  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Wrapper>
      <Content>
        <ContentLogo>
          <Link className="logo" to="/" reloadDocument>
            <img alt="poke-Photo" src={logoImg} />
            <p>By Noberto Ferreira Filho</p>
          </Link>
        </ContentLogo>
        {searchOn && <SearchBar onSearch={SearchHandler} />}
        <a
          href="https://github.com/NobertoFerreiraFilho/PokedexNFF"
          target="_blank"
        >
          <GitButton>Go to Noberto's GitHub</GitButton>
        </a>
      </Content>
      <ScrollButton />
    </Wrapper>
  );
};
export default Navbar;
