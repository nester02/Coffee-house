import {Component} from "react";
import './AllGoods.css';
import CoffeeItemCard from "../CoffeeItemCard/CoffeeItemCard";

class AllGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    onFilterClick = (country) => {
        this.props.onFilterChange(country);
    }

    render() {
        const {products} = this.props;
        return (
            <section className="all-goods">
                <div className="_container all-goods__container">
                    <div className="all-goods__heading">
                        <div className="all-goods__search">
                            <p className="all-goods__search--text">Looking for</p>
                            <input className='all-goods__search--input'
                                   type="text"
                                   placeholder="start typing here..."
                                   value={this.state.term}
                                   onChange={this.onUpdateSearch}/>
                        </div>
                        <div className="all-goods__filter">
                            <div className="all-goods__filter--text">Or filter</div>
                            <div className="all-goods__filter--buttons">
                                <button className="all-goods__filter--btn" onClick={() => this.onFilterClick('Brazil')}>Brazil</button>
                                <button className="all-goods__filter--btn" onClick={() => this.onFilterClick('Kenya')}>Kenya</button>
                                <button className="all-goods__filter--btn" onClick={() => this.onFilterClick('Columbia')}>Columbia</button>
                            </div>
                        </div>
                    </div>
                    <div className="all-goods__cards">
                        {products.map((product) => (
                            <CoffeeItemCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
};

export default AllGoods;