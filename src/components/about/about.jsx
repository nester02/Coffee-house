import '../header/header.css';
import './about.css'

const AboutUs = () => {
    return (
       <section className="about">
           <div className="_container about--container">
               <h2 className="about__heading --h2__heading">About Us</h2>
               <div className="beans__image--black">
                   <img src={`${process.env.PUBLIC_URL}/about-beans.svg`} alt=""/>
               </div>
               <p className="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord
                   horrible.
                   Afraid at highly months do things on at. Situation recommend objection do intention
                   so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                   met spot shy want. Children me laughing we prospect answered followed. At it went
                   is song that held help face.
                   <br/><br/>
                   Now residence dashwoods she excellent you. Shade being under his bed her, Much
                   read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                   horrible but confined day end marriage. Eagerness furniture set preserved far
                   recommend. Did even but nor are most gave hope. Secure active living depend son
                   repair day ladies now.</p>
           </div>
       </section>
    );
};

export default AboutUs;