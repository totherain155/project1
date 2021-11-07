import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TVShow </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                //substring method를 이용하여 연도 뒤에 숫자는 잘라준다.
                //first_air_date의 정보가 없을 경우 빈 문자열을 출력하여 에러를 방지한다.
                year={
                  show.first_air_date ? show.first_air_date.substring(0, 4) : ""
                }
                // isMovie 의 기본값을 false로 해놨기 때문에 생략 가능하다.
              />
            ))}
          </Section>
        )}{" "}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date ? show.first_air_date.substring(0, 4) : ""
                }
              />
            ))}
          </Section>
        )}{" "}
        {airingToday && airingToday.length > 0 && (
          <Section title="Top Rated Shows">
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date ? show.first_air_date.substring(0, 4) : ""
                }
              />
            ))}
          </Section>
        )}{" "}
        {error && <Error color="#d63031;" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
