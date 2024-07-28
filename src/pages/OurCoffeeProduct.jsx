import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomeOurCoffee from "../components/HomeOurCoffee/HomeOurCoffee";
import AboutIt from "../components/AboutIt/AboutIt";

const OurCoffee = ({products}) => {
    return (
        <div className='app'>
            <Header/>
            <HomeOurCoffee/>
            <AboutIt products={products} />
            <Footer/>
        </div>
    )
}

export default OurCoffee;