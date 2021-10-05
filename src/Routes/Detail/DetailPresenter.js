import React from "react";
import styled from "styled-components";
import PropTypes, { object } from "prop-types";

const DetailPresenter = ({ result, error, loading }) => {
  return <div>test</div>;
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
