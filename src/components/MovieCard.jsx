// implement MovieCard component here
import React from 'react';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <div>
        <img src="{ imagePath }" alt="" />

        <h4>{ title }</h4>

        <h5>{ subtitle }</h5>

        <p>{ storyline }</p>

        {/* <Rating rating/> */}

      </div>
    );
  }
}

export default MovieCard;
