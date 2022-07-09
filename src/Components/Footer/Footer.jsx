import { Link } from "react-router-dom";
import "./Footer.css";
import LogoFooter from "../../Ressources/logoFooter.png";

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={LogoFooter} alt="Kasa Logo Footer" />
            </Link>
            <p>© 2021 Kasa. Tous droits réservés</p>
        </footer>
    );
}

export default Footer;
