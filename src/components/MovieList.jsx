import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((filme) => {
        return <MovieCard key= {filme} />
      })
    );
  }
}

export default MovieList;
