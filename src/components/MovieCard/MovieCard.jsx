import './MovieCard.css';

/** React Imports  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Custom Imports */
import Rating from '../Rating/Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <header className="movie-card-header">
          <img
            className="movie-card-image"
            src={ movie.imagePath }
            alt={ movie.storyline }
          />
        </header>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <footer className="movie-card-footer">
          <Rating rating={ movie.rating } />
        </footer>
      </div>
    );
  }
}

MovieCard.propTypes = ({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}).isRequired;

export default MovieCard;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */
