//import logo from './logo.svg';
import './App.css';
import './styles.css'
import SearchMovies from './SearchMovie';
import { useState } from 'react';
import FavouritesList from './FavouritesList';
import MovieModal from './MovieModal';


function App() {
  //States
  const [favourites, setFavoutites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  //Functions
  const addFavourite = (movie) => {
    setFavoutites([...favourites, movie])
  }
  const removeFavourite = (movie) => {
    setFavoutites(favourites.filter(m => m.imdbID !== movie.imdbID))
  }
  const showModal = (movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }
  const closeModal = (movie) => {
    setSelectedMovie(null)
    setIsModalOpen(false)
  }

  //App render
  console.log(favourites)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <SearchMovies addFavourite={addFavourite} />
      <FavouritesList
        favourites={favourites}
        removeFavourite={removeFavourite}
        showModal={showModal}

      />
      {selectedMovie && (
        <MovieModal
          isModalOpen={isModalOpen}
          movie={selectedMovie}
          closeModal={closeModal}
        />
      )
      }
    </div>
  );
}

export default App;
