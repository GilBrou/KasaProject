import React, { useState } from "react";
import "./Carousel.css";

function Carousel(props) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const previous = () => {
        const index =
            currentPictureIndex === 0
                ? props.pictures.length - 1
                : currentPictureIndex - 1;
        setCurrentPictureIndex(index);
    };

    const next = () => {
        const index =
            currentPictureIndex === props.pictures.length - 1
                ? 0
                : currentPictureIndex + 1;
        setCurrentPictureIndex(index);
    };

    const navDisplay = () => {
        if (props.pictures.length >= 2) {
            return (
                <nav className="carouselNav">
                    <i className="fas fa-chevron-left" onClick={previous}></i>
                    <i className="fas fa-chevron-right" onClick={next}></i>
                    <div className="carouselCounter">
                        {currentPictureIndex + 1} / {props.pictures?.length}
                    </div>
                </nav>
            );
        }
    };

    return (
        <article className="carousel">
            <div className="carouselPicturesBox">
                <img
                    src={props.pictures[currentPictureIndex]}
                    alt="appartement"
                    className="carouselPictures"
                />
                {navDisplay()}
            </div>
        </article>
    );
}

Carousel.defaultProps = {
    pictures: [],
};

export default Carousel;
