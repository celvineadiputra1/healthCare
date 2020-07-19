import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4">
            <div className="container-fluid">
                <Link className="navbar-brand text-center w-100-custom" to="/">
                    <span className="logoSpan">Health</span>Care.
                </Link>
                <div className="navbar-nav d-block-custom">
                    <Link className="nav-link active mr-40px" to="#">
                        Home
                    </Link>
                    <Link className="nav-link mr-40px" to="#">
                        Find a doctor
                    </Link>
                    <Link className="nav-link mr-40px" to="#">
                        Testimonials
                    </Link>
                    <Link className="nav-link" to="#">
                        About Us
                    </Link>
                </div>
                <div className="space-donate d-block-custom">
                    <Button isPrimary className="font-weigth-bold w-100-custom">
                        DONATE NOW
                    </Button>
                    <Button
                        isInfo
                        className="text-white font-weight-bold ml-2 w-100-custom mt-2-custom">
                        GET NOW
                    </Button>
                </div>
            </div>
        </nav>
    );
}
