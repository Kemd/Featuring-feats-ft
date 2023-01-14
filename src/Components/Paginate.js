// import { useState, useRef } from "react"
// import ReactPaginate from "react-paginate"
// import Home from "../pages/Home"

// const Paginate = ( props ) => {
//     console.log(props.apiFunction)

//     const handlePageChange = (data) => {
//         // console.log(data)
//     }

//     const [ items, setItems] = useState([])
//     return (
//         <div>
//             <ReactPaginate
//             prevLabel={'previous'}
//             nextLabel={'next'}
//             breakLabel={'...'}
//             pageCount={25}
//             marginPagesDisplayed={3}
//             pageRangeDisplayed={6}
//             onPageChange={handlePageChange}
//             containerClassName={'pagination justify-content-center'}
//             pageClassName={'page-item'}
//             pageLinkClassName={'page-link'}
//             previousClassName={'page-item'}
//             previousLinkClassName={'page-link'}
//             nextClassName={'page-item'}
//             nextLinkClassName={'page-link'}
//             breakClassName={'page-item'}
//             breakLinkClassName={'page-link'}
//             activeClassName={'active'}
//             />

//         </div>
//     )
// }

// export default Paginate