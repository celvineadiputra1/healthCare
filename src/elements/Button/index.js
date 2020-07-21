import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Button(props) {
    let className = [];
    if (props.className) {
        className.push(props.className);
    }
    if (props.isPrimary) {
        className.push("btn btn-primary");
    }
    if (props.isInfo) {
        className.push("btn btn-info");
    }
    if (props.type.toUpperCase() === "LINK") {
        if (props.href) {
            return (
                <Link className="nav-link mr-40px" to={props.href}>
                    {props.children}
                </Link>
            );
        } else {
            return <label className="text-danger">Href Kosong</label>;
        }
    } else if (props.type.toUpperCase() === "BUTTON") {
        return (
            <button className={className.join(" ")}>{props.children}</button>
        );
    }
}

Button.propTypes = {
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isInfo: propTypes.bool,
    type: propTypes.string,
    href: propTypes.string,
};
