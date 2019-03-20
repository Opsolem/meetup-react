import React from 'react';

import MovieThumbnail from './MovieThumbnail';

import movies from './datas.json';
import './Movies.scss';


const MoviesState = () => {
  const favMovies = [];

  const onMovieFav = (movie) => {
    favMovies.push(movie);
  };

  return (
    <div className="Movies">
      <div className="Movies__list">
        <div>
          <span>Tous les films</span>
          <div>
            {movies.map(movie => (
              <MovieThumbnail
                key={movie.title}
                movie={movie}
                onFav={onMovieFav}
              />
            ))}
          </div>
        </div>
        <div style={{ marginTop: '50px' }}>
          <span>Films favoris</span>
          <div>
            {favMovies.map(movie => (
              <MovieThumbnail
                key={movie.title}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesState;
