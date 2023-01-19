import { useState } from "react"


const Search = ({ games, search, setSearch, loaded, allGames }) => {
    console.log(loaded)
   
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

    return (
        <>
        <label htmlFor="search">
            <span> Search game : </span>
        </label>
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
                        return <div key={game.id} className="col-sm-6 col-md-4 v my-2">
                            <div className="card" style={{ minHeight: 200 }}>
                                <div className="card-body">
                                    <img src={game.thumbnail} alt={game.title} />
                                    <h3>{game.title}</h3>
                                    <h5>Year: {game.release_date} Genre: {game.genre}</h5>
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
                                <div className="card-body">
                                    <img src={game.thumbnail} alt={game.title} />
                                    <h3>{game.title}</h3>
                                    <h5>Year: {game.release_date} Genre: {game.genre}</h5>
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

export default Search