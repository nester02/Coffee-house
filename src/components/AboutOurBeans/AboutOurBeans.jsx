import './AboutOurBeans.css';

const AboutOurBeans = () => {
    return (
        <section className="about-our-beans">
            <div className="_container about-our-beans__container">
                <div className="about-our-beans__image">
                    <img src={`${process.env.PUBLIC_URL}/girl-coffee.jpg`} alt=""/>
                </div>
                <div className="about-our-beans__text">
                <h2 className="about-our-beans__title --h2__heading">About our beans</h2>
                    <div className="beans__image--black about-our-beans--beans__image">
                        <img src={`${process.env.PUBLIC_URL}/about-beans.svg`} alt=""/>
                    </div>
                    <p className="about-our-beans__description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutOurBeans;