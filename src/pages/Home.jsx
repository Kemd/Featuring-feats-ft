import { useState, useEffect } from "react";

const Home = ({ games }) => {
    const loaded = () => {
        return games.map(game => (
            <div>
                <h3>{game.title}</h3>
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