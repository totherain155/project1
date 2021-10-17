import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "Components/Section";

const Container = styled.div``;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => show.name)}
        </Section>
      )}{" "}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => show.name)}
        </Section>
      )}{" "}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
