import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import OurCoffee from "../../pages/OurCoffee";
import OurCoffeeProduct from "../../pages/OurCoffeeProduct";
import ForYourPleasure from "../../pages/ForYourPleasure";

const AppRouter = ({products, term, onUpdateSearch, onFilterChange}) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/our-coffee" element={<OurCoffee products={products} term={term} onUpdateSearch={onUpdateSearch} onFilterChange={onFilterChange}/>} />
                <Route path="/about-it/:id" element={<OurCoffeeProduct products={products} />} />
                <Route path="/for-your-pleasure" element={<ForYourPleasure products={products} term={term} onUpdateSearch={onUpdateSearch} onFilterChange={onFilterChange} />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
