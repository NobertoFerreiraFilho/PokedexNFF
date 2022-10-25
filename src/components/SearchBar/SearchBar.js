import React, { useState, useEffect } from "react";
//Styles
import { Wrapper, Content } from "./SearchBar.styles";
//Hooks
import { useDebounce } from "../../Hooks/useDebounce"

const SearchBar = (props) => {
  const { onSearch } = props;

  const [searchTerm, setSearchTerm] = useState("");
//Delay beteween typing and setting the value of the search
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
        onSearch(debouncedSearchTerm);
    } else {
        onSearch(undefined);
    }
  }, [debouncedSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <h2>Search for a Pokemon</h2>
        <input
          placeholder="Pokemon NAME"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
