import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "./../../api";

const HomeContainer = () => {
  // useState 여러개 만들어야 할 듯 기본값은 null, false 등등
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffet, axios, try catch 사용하여 class component의 componentDidMount를 대체

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        // console.log(nowPlaying);
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();

        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError("Can't get Movies");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;
