import React, { Component } from 'react';
import Movie from './components/Movie';

class App extends Component {
  render () {


    const movies = [
      {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
      {title: 'Another Moive', rating: 'R', description: 'this is another movie'},
      {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
    ];

    const movieComponents = movies.map ((movie) => {
        return <Movie />
      });

    return (
      <div>
        { movieComponents }
      </div>  
    );
  }
}

export default MovieList;
