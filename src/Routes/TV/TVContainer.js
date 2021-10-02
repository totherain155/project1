import { tvApi } from "api";
import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        const {
          data: { results: popular },
        } = await tvApi.popular();
        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();

        console.log(topRated, popular, airingToday);
        setAiringToday(airingToday);
        setTopRated(topRated);
        setPopular(popular);
      } catch {
        setError("Can't get TV Show");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;
