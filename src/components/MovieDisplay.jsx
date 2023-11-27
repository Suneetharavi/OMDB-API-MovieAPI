import React from 'react';

function MovieDisplay(props) {
    
    const loaded = () => {
        return (

          <div>
            <h1>{props.currentmovie.Title}</h1>
            <h2>{props.currentmovie.Genre}</h2>
            <img src={props.currentmovie.Poster} alt={props.currentmovie.Title} />
            <h2>{props.currentmovie.Year}</h2>
          </div>
        );
      };
    
      //function to return loading JSX
      const loading = () => {
        return <h1>No Movie to Display</h1>;
      };
      
      return props.currentmovie ? loaded() : loading();
    };
    
   
   
   
  
    



export default MovieDisplay