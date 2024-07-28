import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
                <nav className="header__nav">
                    <Link to={`/`} className="nav__logo">Coffee house</Link>
                    <ul className="nav__links">
                        <Link to={`/our-coffee`} className="nav__link">Our coffee</Link>
                        <Link to={`/for-your-pleasure`} className="nav__link">For your pleasure</Link>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;