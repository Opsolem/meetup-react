import React from 'react';

import MovieThumbnail from './MovieThumbnail';

import movies from './datas.json';
import './Movies.scss';


const MoviesProps = () => {
  return (
    <div className="Movies">
      <div className="Movies__list">
        <div>
          <span>Tous les films</span>
          <div>
          </div>
        </div>
        <div style={{ marginTop: '50px' }}>
          <span>Films favoris</span>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesProps;
