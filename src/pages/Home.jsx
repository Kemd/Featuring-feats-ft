import "bootstrap/dist/css/bootstrap.min.css"

const Home = ({ games}) => {
    
    const loaded = () => {
        return (
            <div className="container">
                <div className="row">

                    {games.map((game) => {
                console.log(game)
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
    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return games ? loaded() : loading()
}

export default Home