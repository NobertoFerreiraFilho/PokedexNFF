import React, { useState } from "react";
//Styles
import { Wrapper, Content, Text, Image } from "./SearchBar.styles";
//API

const SearchBar = (props) => {
  const { onSearch } = props;

  //Updade the search everytime a letter is dialed in the search bar, but if its empty is turns undefined
  const onChangeHandler = (e) => {
      onSearch(e.target.value)
    if (e.target.value.length === 0) {
        onSearch(undefined)
    }
  }

  return (
    <Wrapper>
      <Content>
        <h2>Search for a Pokemon</h2>
        <input placeholder="Pokemon NAME" type="text" onChange={onChangeHandler}/>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
