import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="MovieCardContainer">
        <div className="MovieCardBody">
          <img src={imagePath} alt={title} />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline}</p>
        </div>
        <div className="Rating">
          <span>Rating: </span>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  };
}

export default MovieCard;
