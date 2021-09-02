import './App.css';

/** React Imports  */
import React from 'react';
import Header from './components/Header/Header';

/** Custom Imports */
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

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */
