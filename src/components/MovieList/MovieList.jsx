import './MovieList.css';

/** React Imports  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Custom Imports */
import MovieCard from '../MovieCard/MovieCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <Header />
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Footer />
      </section>
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
