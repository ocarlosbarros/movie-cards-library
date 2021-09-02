import './MovieList.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard/MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */
