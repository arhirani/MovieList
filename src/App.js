import React, { Component, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MovieList from './components/movieList';
import DisplayMovies from './components/displayMovies';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const App = () => {
  const [modal, showmodal] = useState(false);

  let handleClick = () => {
    showmodal(!modal); 
  }
  return (
    <>
    <MovieList modal={modal} showmodal={showmodal}/>
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleClick}>
    Add movie
  </button>
  <DisplayMovies/>
</>
  )
}

export default App;
