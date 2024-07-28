import './footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="_container footer__container">
                <nav className="footer__nav">
                    <ul className="nav__links nav__links--footer">
                        <Link to={`/`} className="nav__logo nav__logo--footer">Coffee house</Link>
                        <Link to={`/our-coffee`} className="nav__link">Our coffee</Link>
                        <Link to={`/for-your-pleasure`} className="nav__link">For your pleasure</Link>
                    </ul>
                </nav>
                <div className="beans__image--black beans__image--footer">
                    <img src={`${process.env.PUBLIC_URL}/about-beans.svg`} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;