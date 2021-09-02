/** React Imports  */
import './App.css';
import React from 'react';

/** Custom Imports */
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

/** Data */
import movies from './data';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ movies } />
      <Footer />
    </main>
  );
}

export default App;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 01/09/2021
 */
