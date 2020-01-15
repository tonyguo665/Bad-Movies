import React from 'react';
import axios from 'axios';
import $ from 'jquery';


const Search = (props) =>{

  const clickHandleFavorites = (e) => {
    props.showFavesFunc();
  }

  const clickHandleSearch = (e) => {
    let target = $('#search-input').val();
    let movieGenre = {genre_id:target};
    axios.post('http://localhost:3000/movies/search',movieGenre)
    .then((data) =>{
      props.setMovieList(data.data)
      props.setShowFavorites(false)
    })
    .catch((err) =>{
      console.log('Error with SEARCH MOVIES!')
    })
  }

  return (
    <div className="search">
      <button onClick={clickHandleFavorites}>Show Favorites</button>
      <br/><br/>
      <select id='search-input'>
        {
          props.genreList.map((genre) =>(
            <SearchOption genre={genre}/>
          ))
        }
      </select>
      <br/><br/>
      <button onClick={clickHandleSearch}>Search</button>
    </div>
  );
}

const SearchOption = (props) =>{

  return(
    <option value={props.genre.id}>{props.genre.name}</option>
  )
}

export default Search;