import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    const moviesList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <main className="movie-list">
        { moviesList }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
