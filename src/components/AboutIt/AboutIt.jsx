import {useParams} from "react-router-dom";
import './AboutIt.css';

const AboutIt = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));

    return (
        <section className="about-our-beans">
            <div className="_container about-it__container">
                <div className="about-our-beans__image">
                    <img src={`${process.env.PUBLIC_URL}${product.image.replace('.jpg', '--full.jpg')}`} alt=""/>
                </div>
                <div className="about-it__text">
                    <h2 className="about-our-beans__title --h2__heading">About It</h2>
                    <div className="beans__image--black about-it__image--beans">
                        <img src={`${process.env.PUBLIC_URL}/about-beans.svg`} alt=""/>
                    </div>
                    <p className="card__country about-it-country"><span>Country:</span> {product.country}</p>
                    <p className="about-our-beans__description"><span>Description:</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <p className="about-it__price">Price: <span>{product.price}$</span></p>

                </div>
            </div>
        </section>
    );
};

export default AboutIt;