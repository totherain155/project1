import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "./../../api";
import { tvApi } from "api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  };
  /*test용 코드

  useEffect(() => {
    handleSubmit();
  });
*/
  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      console.log(movieResults, tvResults);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
