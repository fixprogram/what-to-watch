import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {id, picture, title, onHover, outHover} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={onHover}
      onMouseOut={outHover}
      data-key={id}>
      <div className="small-movie-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.defaultProps = {
  onHover() {},
  outHover() {}
};

SmallMovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onHover: PropTypes.func,
  outHover: PropTypes.func
};

export default SmallMovieCard;
