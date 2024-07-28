import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AllGoods from "../components/AllGoods/AllGoods";
import HomeForYourPleasure from "../components/HomeForYourPleasure/HomeForYourPleasure";
import AboutOurGoods from "../components/AboutOurGoods/AboutOurGoods";

const ForYourPleasure = ({products, onUpdateSearch, onFilterChange}) => {
    return (
        <div className='app'>
            <Header/>
            <HomeForYourPleasure/>
            <AboutOurGoods/>
            <AllGoods products={products} onUpdateSearch={onUpdateSearch} onFilterChange={onFilterChange}/>
            <Footer/>
        </div>
    )
}

export default ForYourPleasure;