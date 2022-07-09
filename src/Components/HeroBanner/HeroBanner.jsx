import home from "../../Ressources/Banner1.jpeg";
import "./HeroBanner.css";

function HeroBanner() {
    return (
        <section className="heroBanner">
            <img src={home} alt="heroBannerImg" className="heroBannerImg"></img>
            <div className="heroBannerWrapper"></div>
            <h2 className="heroBannerText">Chez vous, partout et ailleurs</h2>
        </section>
    );
}

export default HeroBanner;
