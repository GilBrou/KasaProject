import React, { useEffect, useState } from "react";
import "./ApartmentPage.css";
import Carousel from "../../Components/Carousel/Carousel";
import Collapsible from "../../Components/Collapsible/Collapsible";
import { getData } from "../../Helpers/api.js";
import Error404 from "../Error404/Error404";

//rating system
let ratingScale = [1, 2, 3, 4, 5];

function ApartmentPage() {
    const [currentApartment, setCurrentApartment] = useState({});
    let myUrl = window.location.pathname.split("/");
    const [allApts, setAllApts] = useState([]);
    const [tags, setTags] = useState([]);
    const allIds = allApts.map((s) => s.id);

    useEffect(() => {
        async function fetchDatas() {
            let apartments = await getData();
            let apartment = await apartments.find(
                (data) => data.id === myUrl[2]
            );
            setAllApts(apartments);
            setCurrentApartment(apartment);
            //getting targeted rental tags
            setTags(apartment.tags);
        }
        fetchDatas();
    },[]);

    if (!allIds.includes(myUrl[2])) {
        return <Error404 />;
    }

    return (
        <main>
            <Carousel pictures={currentApartment.pictures} />
            <section className="apartmentInformations">
                <div className="apartmentBox">
                    <h1 className="apartmentTitle">{currentApartment.title}</h1>
                    <h3 className="apartmentLocation">
                        {currentApartment.location}
                    </h3>
                    {tags.map((tag) => {
                        return (
                            <span
                                key={`apartmentTag-${tag}`}
                                className="apartmentTag"
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>

                <div className="apartmentBoxAside">
                    <div className="apartmentProfil">
                        <p className="apartmentNameHost">
                            {currentApartment.host?.name}
                        </p>
                        <img
                            className="apartmentImgHost"
                            alt=""
                            src={currentApartment.host?.picture}
                        />
                    </div>
                    <div className="apartmentRatings">
                        {ratingScale.map((scale) => (
                            <i
                                className={`fas fa-star${
                                    scale <= currentApartment.rating
                                        ? " colored"
                                        : ""
                                }`}
                                key={`star-${scale}`}
                            ></i>
                        ))}
                    </div>
                </div>
            </section>
            <section className="apartmentCollapsible">
                <Collapsible
                    title="Description"
                    content={currentApartment.description}
                />
                <Collapsible
                    title="Équipements"
                    content={currentApartment.equipments}
                />
            </section>
        </main>
    );
}

export default ApartmentPage;
