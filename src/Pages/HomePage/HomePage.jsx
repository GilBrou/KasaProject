import React, { useEffect, useState } from "react";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import { getData } from "../../Helpers/api.js";

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchDatas() {
            let thisdata = await getData();
            setData(thisdata);
        }

        fetchDatas();
    }, []);

    return (
        <main>
            <HeroBanner />
            <section className="galleryApartmentCard">
                {data.map((apartment) => {
                    return (
                        <ApartmentCard
                            key={apartment.id}
                            id={apartment.id}
                            cover={apartment.cover}
                            title={apartment.title}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default HomePage;
