import './BestItemCard.css'

const BestItemCard = ({product, hideCountry}) => {
    return (
        <section className="product__card">
                <img className="card__image" src={product.image} alt={product.name}/>
                <div className="card__info">
                    <h3 className="card__title">{product.title}</h3>
                    {!hideCountry && <p className="card__country">{product.country}</p>}
                    <p className="card__price">{product.price}$</p>
                </div>
        </section>
    );
};

export default BestItemCard;