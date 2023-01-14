import "bootstrap/dist/css/bootstrap.min.css"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react"

const Home = ({ games}) => {
    // console.log(apidata)

    const handlePageChange = (data) => {
        console.log(data.selected)
    }



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
                <div>
                    <ReactPaginate
                        prevLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        pageCount={25}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={6}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination justify-content-center'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
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