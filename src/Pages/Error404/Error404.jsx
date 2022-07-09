import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
    return (
        <main className="error404">
            <h1 className="error404StatusCode">404</h1>
            <h2 className="error404Txt">
                Oups ! La page que vous demandez n'existe pas.
            </h2>
            <Link className="error404LinkToHome" to="/">
                Retourner sur la page d'accueil
            </Link>
        </main>
    );
}

export default Error404;
