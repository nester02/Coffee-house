import './HomeMain.css';
import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <section className="home__main">
            <div className="_container home__container">
                <div className="home">
                    <h1 className="home__heading">Everything You Love About Coffee</h1>
                    <div className="beans__image">
                        <img src={`${process.env.PUBLIC_URL}/home-beans.svg`} alt=""/>
                    </div>
                    <p className="home__text">We make every day full of energy and taste</p>
                    <p className="home__text">Want to try our beans?</p>
                    <Link to={`/our-coffee`} className="home__button">More</Link>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;