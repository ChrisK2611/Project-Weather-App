import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return ( 
        <div>
            <nav className="nav-line">
                <Link to='/'>München</Link>
                <Link to='/duesseldorf'>Düsseldorf</Link>
                <Link to='/berlin'>Berlin</Link>
                <Link to='/ingolstadt'>Ingolstadt</Link>
            </nav>
        </div>
     );
}
 
export default Nav;