import "./AboutBanner.css";
import about from "../../Ressources/Banner2.jpeg";

function AboutBanner() {
    return (
        <section className="aboutBanner">
            <img
                src={about}
                alt="aboutBannerImg"
                className="aboutBannerImg"
            ></img>
            <div className="aboutBannerWrapper"></div>
        </section>
    );
}

export default AboutBanner;
