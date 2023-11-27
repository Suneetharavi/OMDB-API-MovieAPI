import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useState } from 'react';

function App(props) {

  const apiKey = '9265aed7'
  // const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`

  //Establish state to hold movie data

  const [movie,setMovie] = useState(null);
 //Function to get movies

 const getMovie = async(searchterm) => {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchterm}`);
    const data = await response.json();

    console.log(data);
    setMovie(data);

 }

  return (
    <div className="App">

<Form moviesearch={getMovie}/>
      <MovieDisplay currentmovie={movie}/>

     
    </div>
  );
}

export default App;
