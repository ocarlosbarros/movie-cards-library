/** React Imports  */
import './App.css';
import React from 'react';

/** Custom Imports */
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ movies } />
    </>
  );
}

export default App;
