import React from 'react';

const MovieListEntry = (props) =>{

    const clickHandler = () =>{
        props.clickHandler(props.movie);
    }

    return(
        <div className="movie_item" onClick={clickHandler}>
          <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
          <div className="movie_description">
            <h2>{props.movie.title}</h2>
            <section className="movie_details">
              <div className="movie_year">
                <span className="title">Release Date</span>
                <span>{props.movie.release_date}</span>
              </div>
              <div className="movie_rating">
                <span className="title">Popularity</span>
                <span>{props.movie.popularity}</span>
              </div>
            </section>
          </div>
        </div>
    )
}

export default MovieListEntry;