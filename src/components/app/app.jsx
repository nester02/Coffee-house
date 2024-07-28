import React, { Component } from 'react';
import './app.css';
import AppRouter from "../approuter/approuter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, best: 'true', image: `${process.env.PUBLIC_URL}/products-images/Solimo-beans.jpg`, title: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '10.73'},
                {id: 2, best: 'true', image: `${process.env.PUBLIC_URL}/products-images/Presto-beans.jpg`, title: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '15.99'},
                {id: 3, best: 'true', image: `${process.env.PUBLIC_URL}/products-images/Aromistico-coffee.jpg`, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'},
                {id: 4, best: 'false', image: `${process.env.PUBLIC_URL}/products-images/Solimo-beans.jpg`, title: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '10.73'},
                {id: 5, best: 'false', image: `${process.env.PUBLIC_URL}/products-images/Presto-beans.jpg`, title: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '15.99'},
                {id: 6, best: 'false', image: `${process.env.PUBLIC_URL}/products-images/Aromistico-coffee.jpg`, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'}
            ],
            term: '',
            filter: ''
        }
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterEmp = (items, filter) => {
        if (filter === '') return items;
        return items.filter(product => product.country === filter);
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { products, term, filter } = this.state;
        const filteredProducts = this.filterEmp(products, filter);
        const visibleData = this.searchEmp(filteredProducts, term);

        return (
            <div className='app'>
                <AppRouter products={visibleData}
                           term={term}
                           onUpdateSearch={this.onUpdateSearch}
                           filter={filter}
                           onFilterChange={this.onFilterChange} />
            </div>
        )
    }
}

export default App;
