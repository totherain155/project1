import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "./../../api";
import { tvApi } from "api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("code");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  };
  useEffect(() => {
    handleSubmit();
  });

  const searchByTerm = async () => {
    try {
      const movieResults = await moviesApi.search(searchTerm);
      const showResults = await tvApi.search(searchTerm);
      console.log(movieResults, showResults);
      setLoading(true);
    } catch {
      setLoading("Can't find results");
    } finally {
      setLoading(false);
    }
  };

  return <SearchPresenter />;
};

export default SearchContainer;
