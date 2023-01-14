import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import useFetch from 'react-fetch-hook';
import Home from './pages/Home';
import Nav from './Components/Navigation';
import About from "./pages/About"
import Search from './Components/Search';


function App() {
  // const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc'
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

  const [games, setGames] = useState(null)
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
    console.log(data)
    setGames(data)


    // fetch(url, options)
	  //   .then(response => response.json())
	  //   .then(response => console.log(response))
	  //   .catch(err => console.error(err));
    }

    useEffect(() => getApi, [])


  return (
    <div className="App container">
        {/* homepage displays the games */}
      <Nav />
      <Routes>
        <Route exact path='/' element={(
          <>
            <Search />
            <Home games={games} />
          </>
        )}/>
        <Route path="/about" element={<About />} />

      </Routes>

    </div>
  );
}

export default App;

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c359a48fbemsh0ac08cd4d22fb0ap16fceajsnbbce31eb00d0',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// api https://www.freetogame.com/api/games