import './best.css'
import BestItemCard from "../BestItemCard/BestItemCard";

const OurBest = ({products}) => {
    const bestProducts = products.filter((product) => product.best === 'true');

    return (
        <section className="best">
            <div className="_container best--container">
                <h2 className="best__heading">Our best</h2>
                <div className="best__cards">
                    {bestProducts.map((product) => (
                        <BestItemCard key={product.id} product={product} hideCountry/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBest;