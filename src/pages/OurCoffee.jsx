import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomeOurCoffee from "../components/HomeOurCoffee/HomeOurCoffee";
import AboutOurBeans from "../components/AboutOurBeans/AboutOurBeans";
import AllGoods from "../components/AllGoods/AllGoods";

const OurCoffee = ({products, onUpdateSearch, onFilterChange}) => {
    return (
        <div className='app'>
            <Header/>
            <HomeOurCoffee/>
            <AboutOurBeans/>
            <AllGoods products={products} onUpdateSearch={onUpdateSearch} onFilterChange={onFilterChange}/>
            <Footer/>
        </div>
    )
}

export default OurCoffee;