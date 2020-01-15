import React from 'react';
import MovieListEntry from './MoviesListEntry.jsx';

const MoviesList = (props) =>{
  const clickHandler = (movie) =>{
    console.log('This was Clicked: ', movie)
    console.log(props.showFavorites)
    if(props.showFavorites){
      props.deleteMovie(movie);
    }else{
      props.saveMovie(movie);
    }
  }

  return(
    <div className="movies">
      {props.movies.map((movie) =>{
        return <MovieListEntry key={movie.id} movie={movie} clickHandler={clickHandler}/>
  })}
    </div>
  )
}

export default MoviesList;