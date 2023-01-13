import "bootstrap/dist/css/bootstrap.min.css"

import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li className="nav-item">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/about'} >About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav