import "bootstrap/dist/css/bootstrap.min.css"

const Home = ({ games}) => {

    const loaded = () => {
        return (
            <div className="container">
                <div className="row">

                    {games.map((game) => {
                        return <div key={game.id} className="col-sm-6 col-md-4 v my-2">
                            <div className="card" style={{ minHeight: 225 }}>
                                <div className="card-body">
                                    <h3>{game.title}</h3>
                                    <img src={game.thumbnail} alt={game.title} />
                                    <p>{game.short_description}</p>
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