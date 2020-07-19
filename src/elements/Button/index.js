import React from "react";
import propTypes from "prop-types";

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
    return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isInfo: propTypes.bool,
};
