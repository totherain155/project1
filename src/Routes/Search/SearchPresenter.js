import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Error from "Components/Error";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 25px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title> Search </title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      {/** input을 제어하기 위해 value에 searchTerm을 넣는다.*/}
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                //substring method를 이용하여 연도 뒤에 숫자는 잘라준다.
                year={
                  show.first_air_date ? show.first_air_date.substring(0, 4) : ""
                }
              />
            ))}
          </Section>
        )}
        {error && <Error color="#d63031;" text={error} />}
        {tvResults &&
          movieResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && (
            <Error text="Nothing found" color="#b2bec3" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
