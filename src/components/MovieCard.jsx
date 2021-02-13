// implement MovieCard component here!
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating }  = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt='Cartás do filme' />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
        <div>
            <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

export default MovieCard;
