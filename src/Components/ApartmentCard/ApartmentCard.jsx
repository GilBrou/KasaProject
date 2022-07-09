import { Link } from "react-router-dom";
import "./ApartmentCard.css";


function ApartmentCard(props) {
    return (
        <article>
            <Link to={`/apartment/${props.id}`} className="galleryApartmentBox">
                <img
                    src={props.cover}
                    alt={props.title}
                    className="galleryApartmentImg"
                />
                <div className="galleryOpacityDiv"></div>
                <h2>{props.title}</h2>
            </Link>
        </article>
    );
}
export default ApartmentCard;
