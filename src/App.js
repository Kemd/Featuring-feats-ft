// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import useFetch from 'react-fetch-hook';
import Home from './pages/Home';
import Navigation from './Components/Navigation';
import About from "./pages/About"
import Search from './Components/Search';
import Paginate from './Components/Paginate';


function App() {
  // const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc'
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

  const [games, setGames] = useState([])
  const getApi = async () => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'c359a48fbemsh0ac08cd4d22fb0ap16fceajsnbbce31eb00d0',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    // console.log(data)
    setGames(data)
    }

    useEffect(() => getApi, [])


  return (
    <div className='container text-center'>
        {/* homepage displays the games */}
      <Navigation />
      <Routes>
        <Route exact path='/' element={(
          <>
            <Search />
            <Home games={games} />
            {/* <Paginate games={games} /> */}
          </>
        )}/>
        <Route path="/about" element={<About />} />

      </Routes>

    </div>
  );
}

export default App;