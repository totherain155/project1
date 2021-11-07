import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi } from "./../../api";
import { tvApi } from "api";

const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // parameter로 넘겨진 id값을 받고
    const {
      params: { id },
    } = props.match;
    const {
      history: { push },
    } = props;
    const {
      location: { pathname },
    } = props;
    console.log(props);
    //숫자가 아닌 string형태로 넘겨진 id는 다시 홈으로 push해준다.
    const parsedId = parseInt(id);
    const isMovie = pathname.includes("/movie/");

    if (isNaN(parsedId)) {
      //함수를 종료하기 위해서 return을 사용해 준다.
      return push("/");
    }
    let result = null;
    const fetchApi = async () => {
      try {
        if (isMovie) {
          ({ data: result } = await moviesApi.movieDetail(parsedId));
        } else {
          ({ data: result } = await tvApi.tvDetail(parsedId));
        }
        console.log(result);
        setResult(result);
      } catch {
        setError("Can't find anything");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
