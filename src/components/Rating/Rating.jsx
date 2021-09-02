import './Rating.css';

/** React Imports  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating-container">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */
