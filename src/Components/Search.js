import Button from "react-bootstrap/Button"

const Search = ({ searchQuery, setSearchQuery }) => {
    // const gameName = games
    return (
        <>
        <form action="/" method="get">
            <label htmlFor="search">
                <span> Search game : </span>
            </label>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="search"
                placeholder="Searh for a game"
                name="search" 
            />
            <Button type="submit">Search</Button>

        </form>
        </>
    )
}

export default Search