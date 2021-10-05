import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return <div>test</div>;
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
