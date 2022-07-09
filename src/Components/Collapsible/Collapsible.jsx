import React, { useState } from "react";
import "./Collapsible.css";

function Collapsible(props) {
    const [isActive, setActive] = useState(false);

    const ToggleClass = () => {
        setActive(!isActive);
    };

    const getCollapsibleContent = () => {
        if (Array.isArray(props.content)) {
            return (
                <div
                    className={`collapsibleContent ${
                        isActive ? "isOpen" : "isClose"
                    }`}
                    onClick={ToggleClass}
                >
                    {props.content.map((item, index) => (
                        <p key={`item-${index}`}>{item}</p>
                    ))}
                </div>
            );
        }

        return (
            <div
                className={`collapsibleContent ${
                    isActive ? "isOpen" : "isClose"
                }`}
            >
                <p>{props.content}</p>
            </div>
        );
    };

    return (
        <article className="collapsibleArticle">
            <div
                className={`collapsibleVisible ${
                    isActive ? "isOpen" : "isClose"
                }`}
                onClick={ToggleClass}
            >
                <h3>{props.title}</h3>
                <i className="fas fa-chevron-down"></i>
            </div>
            {getCollapsibleContent()}
        </article>
    );
}

export default Collapsible;
