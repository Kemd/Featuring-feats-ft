import {Nav} from 'react-bootstrap'

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
                        <a onClick={() => paginate(num)} href='#' className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination