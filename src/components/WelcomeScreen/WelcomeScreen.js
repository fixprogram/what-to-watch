import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import Catalog from '../Catalog/Catalog';

const WelcomeSreen = ({films}) => {
  return (
    <div>
      <MovieCard />
      <Catalog films={films} />
    </div>
  );
};

WelcomeSreen.propTypes = {
  films: PropTypes.array.isRequired
};

export default WelcomeSreen;
