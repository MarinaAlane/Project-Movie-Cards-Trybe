// implement MovieCard component here
import React from 'react';
import movies from '../data'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div></div>
    )
  }
}

export default MovieCard;
