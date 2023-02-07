import React from 'react'

import { useParams } from 'react-router-dom'

// test with id: 540 for overwatch

const Show = ({ allGames, games }) => {
    const { id } = useParams();
    const thisGame = allGames.find((game) => game.id === id).map(game => game)
    return (
        <>
        <h3>{thisGame.title}</h3>

        </>

    )
}

export default Show