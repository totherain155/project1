import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;

// Section에서의 stylying과 HomePresenter에서의 styling의 차이

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movie</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing list">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                //substring method를 이용하여 연도 뒤에 숫자는 잘라준다.
                //release_date의 정보가 없을 경우 빈 문자열을 출력하여 에러를 방지한다.
                year={
                  movie.release_date ? movie.release_date.substring(0, 4) : ""
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular list">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                //substring method를 이용하여 연도 뒤에 숫자는 잘라준다.
                year={
                  movie.release_date ? movie.release_date.substring(0, 4) : ""
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming list">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                //substring method를 이용하여 연도 뒤에 숫자는 잘라준다.

                year={
                  movie.release_date ? movie.release_date.substring(0, 4) : ""
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Error color="#d63031;" text={error} />}
      </Container>
    )}
    ;
  </>
);
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
