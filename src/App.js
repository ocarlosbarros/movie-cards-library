/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */

/** React Imports  */
import './App.css';
import React from 'react';

/** Custom Imports */
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

/** Data */
import movies from './data';

function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
