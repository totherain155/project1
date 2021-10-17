import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";

const Container = styled.div``;

// Section에서의 stylying과 HomePresenter에서의 styling의 차이

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing list">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular list">
          {popular.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming list">
          {upcoming.map((movie) => movie.title)}
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
