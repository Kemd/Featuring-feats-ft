import { useState } from "react"
import { Link } from "react-router-dom"
// import Show from "../pages/Show"


const Search = ({ games, search, setSearch, allGames }) => {
   
    // const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    const searchItems = (value) => {
        setSearch(value)
        if(search !== "") {
            const filteredGames = allGames.filter(game => {
                return Object.values(game)
                .join("")
                .toLowerCase()
                .includes(search.toLowerCase())
            })
            setResults(filteredGames)
            // console.log(filteredGames)
        }
        else {
            setResults(allGames)
        }
    }

    const loaded = () => {
    return (

        <>
        <label htmlFor="search"></label>
        <input
            onChange={(e) => searchItems(e.target.value)}
            type="text"
            id="search"
            placeholder="Searh for a game"
            name="search" 
            />

            {
                // console.log(results)
                search.length > 1 ? (
                <div className="container">
                <div className="row">

                    {results.map((game) => {
                // console.log(games)
                        return <div key={game.id} className="">
                            <div className="card" style={{ minHeight: 200 }}>
                                <div className="card-body">
                                    <header>
                                        <img src={game.thumbnail} alt={game.title} />
                                        <h3>{game.title}</h3>

                                    </header>
                                    <h6>Year: {game.release_date} Genre: {game.genre}</h6>
                                    {/* <p>{game.short_description}</p> */}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
                ) : (
                    <div className="container">
                <div className="row">

                    {games.map((game) => {
                // console.log(games)
                        return <div key={game.id} className="col-sm-6 col-md-4 v my-2">
                            <div className="card" style={{ minHeight: 200 }}>
                                <div className="">
                                    <header>
                                        {/* to={{pathname: `/${game.id}`}} */}
                                    <Link>
                                        <img src={game.thumbnail} alt={game.title} />
                                        <h3>{game.title}</h3>

                                    </Link>
                                    </header>
                                    <footer>
                                    <h6>Year: {game.release_date} Genre: {game.genre}</h6>
                                    </footer>
                                    {/* <p>{game.short_description}</p> */}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
                )
            }
        </>
    )
}
    const loading = () => {
        return <button aria-busy='true'>loading ...</button>
    }

    return games ? loaded() : loading()
}

export default Search