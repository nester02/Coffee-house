import './CoffeeItemCard.css'
import {Link} from "react-router-dom";

const BestItemCard = ({product}) => {
    return (
        <Link to={`/about-it/${product.id}`} className="product__card coffee-item__card">
            <img className="card__image coffee-item__image" src={product.image} alt={product.title}/>
            <div className="card__info">
                <h3 className="card__title coffee-item__title">{product.title}</h3>
                <p className="card__country coffee-item__country">{product.country}</p>
                <p className="card__price coffee-item__price">{product.price}$</p>
            </div>
        </Link>
    );
};

export default BestItemCard;