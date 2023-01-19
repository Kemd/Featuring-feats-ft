

import { Link } from "react-router-dom"
const Navigation = () => {
    return (
    <nav aria-label="breadcrumb">
    <ul>
        <li className="nav">
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    </nav>
        // <nav>
        //     <ul>
        //     <Link to={'/'}>Home</Link>
        //     <Link to={'/about'}>About</Link>
        //     </ul>
        // {/* <h1>Navigations</h1> */}
        // </nav>
    )
}

export default Navigation