import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

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
    console.log(props);
    //숫자가 아닌 string형태로 넘겨진 id는 다시 홈으로 push해준다.
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      //함수를 종료하기 위해서 return을 사용해 준다.
      return push("/");
    }
  }, []);

  return <DetailPresenter />;
};

export default DetailContainer;
