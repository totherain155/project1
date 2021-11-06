import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

// Section에서의 stylying과 HomePresenter에서의 styling의 차이

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing list">
          {nowPlaying.map((movie) => (
            <span key={movie.id}> {movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular list">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming list">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
