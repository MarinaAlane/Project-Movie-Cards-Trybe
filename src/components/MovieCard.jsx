import React from 'react'
import Rating from './Rating'
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
    <div>
      <img src={imagePath}/>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating}/>
    </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string
  })
};

export default MovieCard;