// import "bootstrap/dist/css/bootstrap.min.css"
// import Container from 'react-bootstrap/Container'
// import { Pagination } from "react-bootstrap"

const Home = ({ games }) => {
    const loaded = () => {
        return games.map(game => (
            <div>
                <h3>{game.title}</h3>
                <img src={game.thumbnail} alt={game.title} />
                <p>{game.short_description}</p>
                {/* <br />
                <hr /> */}
            </div>
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