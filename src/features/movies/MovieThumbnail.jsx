import React from 'react';
import PropTypes from 'prop-types';

const MovieThumbnail = (props) => {
  const onThumbnailClick = () => {
    props.onClick(props.movie);
  };

  const onFavClick = (e) => {
    e.stopPropagation();
    props.onFav(props.movie);
  };

  return (
    <div
      className="MovieThumbnail"
      role="menuitem"
      tabIndex="0"
      onClick={onThumbnailClick}
      onKeyPress={onThumbnailClick}
    >
      <img
        className="MovieThumbnail__poster"
        alt={props.movie.title}
        src={props.movie.poster}
      />
      <div className="MovieThumbnail__bottom">
        {props.movie.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill={props.fav ? '#ffffff' : 'none'}
          stroke="#ffffff"
          strokeWidth="2"
          onClick={onFavClick}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    </div>
  )
};

MovieThumbnail.propTypes = {
  movie: PropTypes.object.isRequired,
  fav: PropTypes.bool,
  onFav: PropTypes.func,
  onClick: PropTypes.func,
};

MovieThumbnail.defaultProps = {
  fav: false,
  onFav: () => { },
  onClick: () => { },
};

export default MovieThumbnail;
