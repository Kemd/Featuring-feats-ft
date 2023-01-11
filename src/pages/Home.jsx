const Home = ({ games }) => {
    const loaded = () => {
        return games.map(game => (
            <>
                <h3>{game.title}</h3>
                <img src={game.thumbnail} alt={game.title} />
                <p>{game.short_description}</p>
                <br />
                <hr />
            </>
            ))
    }
    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return games ? loaded() : loading()


    // return (
    //     <>
    //     <h1>This is the homepage</h1>

    //     {/* <button onClick={getApi}>Get data</button> */}
    //     </>
    // )
}

export default Home