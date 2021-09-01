import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.storyline } />
        <h4>{movie.title}</h4>
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
