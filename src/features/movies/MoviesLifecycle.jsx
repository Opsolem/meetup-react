import React from 'react';

import MovieThumbnail from './MovieThumbnail';
import MovieDetails from './MovieDetails';

import movies from './datas.json';
import './Movies.scss';

class MoviesLifecycle extends React.Component {
  state = {
    favMovies: [],
    selectedMovie: null,
  }


  constructor() {
    super();
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');

    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  onMovieFav = (movie) => {
    const { favMovies: currentFav } = this.state;
    const index = currentFav.findIndex(m => m.title === movie.title);
    const newFav = [...currentFav];

    if (index === -1) {
      newFav.push(movie);
    } else {
      newFav.splice(index, 1);
    }

    this.setState({ favMovies: newFav });
  };

  onMovieSelect = (movie) => {
    this.setState({ selectedMovie: movie });
  };


  render() {
    console.log('render');

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
                  fav={this.state.favMovies.includes(movie)}
                  onFav={this.onMovieFav}
                  onClick={this.onMovieSelect}
                />
              ))}
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <span>Films favoris</span>
            <div>
              {this.state.favMovies.map(movie => (
                <MovieThumbnail
                  key={movie.title}
                  movie={movie}
                  fav
                  onFav={this.onMovieFav}
                  onClick={this.onMovieSelect}
                />
              ))}
            </div>
          </div>
        </div>
        {this.state.selectedMovie && (
          <div className="Movies__details">
            <MovieDetails movie={this.state.selectedMovie} />
          </div>
        )}
      </div>
    );
  }
}

export default MoviesLifecycle;
