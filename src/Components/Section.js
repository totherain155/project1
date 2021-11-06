import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  // 마지막 영역엔 margin을 주지 않는다.
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 30px;
`;

// children의 역할
const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
