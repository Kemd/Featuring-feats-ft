

import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <nav>
            <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            </ul>
        {/* <h1>Navigations</h1> */}
        </nav>
    )
}

export default Navigation