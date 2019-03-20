import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = props => (
  <div className="MovieDetails">
    <img
      className="MovieDetails__poster"
      alt={props.movie.title}
      src={props.movie.poster}
    />
    <div className="MovieDetails__infos">
      <div className="MovieDetails__infos-line">
        <span className="MovieDetails__infos-line-label">Titre</span>
        <span className="MovieDetails__infos-line-value">{props.movie.title}</span>
      </div>
      <div className="MovieDetails__infos-line">
        <span className="MovieDetails__infos-line-label">Réalisateur</span>
        <span className="MovieDetails__infos-line-value">{props.movie.director}</span>
      </div>
      <div className="MovieDetails__infos-line">
        <span className="MovieDetails__infos-line-label">Date de sortie</span>
        <span className="MovieDetails__infos-line-value">{props.movie.streetDate}</span>
      </div>
      <div className="MovieDetails__infos-line">
        <span className="MovieDetails__infos-line-label">Genre</span>
        <span className="MovieDetails__infos-line-value">{props.movie.genres.join(', ')}</span>
      </div>
      <div className="MovieDetails__infos-line">
        <span className="MovieDetails__infos-line-label">Note</span>
        <span className="MovieDetails__infos-line-value">{`${props.movie.rate} / 5`}</span>
      </div>
    </div>
  </div>
);


MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};


export default MovieDetails;
