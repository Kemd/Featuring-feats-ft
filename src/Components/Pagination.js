
const Pagination = ({ gamesPerPage, totalGames, paginate}) => {
    const pageNum = []

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNum.map(num => (
                    <li key={num} className='page-item'>
                        {/* used to be anchor tag  */}
                        <button onClick={() => paginate(num)} className="page-link">
                            {num}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination