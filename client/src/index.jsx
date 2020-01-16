import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import MoviesList from './components/MoviesList.jsx'

const App = () =>{

  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const showFavesFunc = (e) =>{
    axios.get('http://localhost:3000/movies/host')
    .then((data) =>{
      setMovieList(data.data);
    })
    .then(() =>{
      setShowFavorites(true);
    })
    .catch((err) =>{
      console.log('Error getting the FAVORITE MOVIES!')
    })
  }

  const saveMovie = (movie) =>{
    axios.post('http://localhost:3000/movies/host', movie)
    .catch((err) =>{
      console.log('Error with SAVING MOVIE!')
    })
  }

  const deleteMovie = (movie) =>{
    console.log(movie)
    axios.put('http://localhost:3000/movies/host', movie)
    .then(() =>{
      return axios.get('http://localhost:3000/movies/host')
    })
    .then((data) =>{
      setMovieList(data.data);
    })
    .catch((err) =>{
      console.log('Error with DELETING MOVIE!')
    })
  }

  useEffect(() =>{
    axios.get('http://localhost:3000/movies/genres')
    .then((data) =>{
      setGenreList(data.data)
    })
    .catch((err) =>{
      console.log('Error getting the list of GENRES!')
    })
    .then(() =>{
      return axios.post('http://localhost:3000/movies/search',{genre_id: 28})
    })
    .then((data) =>{
      setMovieList(data.data);
    })
    .catch((err) =>{
      console.log('Error with getting the INITIAL MOVIES of genre ACTION(id:28)!')
    })
  },[])

  return (
    <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        <div className="main">
          <Search genreList={genreList} showFavesFunc={showFavesFunc} setShowFavorites={setShowFavorites} setMovieList={setMovieList} showFavorites={showFavorites}/>
          <MoviesList movies={movieList} showFavorites={showFavorites} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
        </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));