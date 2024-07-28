import Header from "../components/header/header";
import AboutUs from "../components/about/about";
import OurBest from "../components/best/best";
import Footer from "../components/footer/footer";
import HomeMain from "../components/HomeMain/HomeMain";

const Home = ({products}) => {
    return (
        <div className='app'>
            <Header/>
            <HomeMain/>
            <AboutUs/>
            <OurBest products={products}/>
            <Footer/>
        </div>
    )
}

export default Home;