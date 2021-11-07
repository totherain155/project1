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

  const handleSubmit = (event) => {
    // enter를 통해 자동적으로 submit되며 새로고침되는 것을 방지해준다.
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSearchTerm(value);
    // search input reset 할것
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
      // throw Error();
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
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
