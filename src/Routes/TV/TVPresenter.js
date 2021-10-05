import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return <div>test</div>;
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
