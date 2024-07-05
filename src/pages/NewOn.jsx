import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newOn.css';
import Search from '../components/Search';
function NewOn() {
    const [move, setMove] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8196875b`;
    
        const response = await fetch(url);
        const responseJson = await response.json();
        
        if(responseJson.Search) {
          setMove(responseJson.Search);
        }
      };
    
     useEffect (() => {
      getMovieRequest(searchValue);
     }, [searchValue])

  return (
    
<section id="schedule" className='schedule'>
<div className="container-fluid">
  <div className="row">
    <h4 className='section-title'>Search For Movies</h4>
  </div>  
  <div className="row">
      <ul className="filters">
    <Search searchValue={searchValue} setSearchValue={setSearchValue}/> <br></br>
      <div className='container-fluid movie-app'>
        <div className='box'>
      {move.map((move, index)=> <div>
        <img src={move.Poster} alt="image" id="img-img"></img>
        </div>)}

        </div>
    </div>

      </ul>
  </div>
</div>
</section>
  )
}

export default NewOn
