import React from "react";
import Button from "../elements/Button";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4">
            <div className="container-fluid">
                <Button
                    className="navbar-brand text-center w-100-custom"
                    href="/"
                    type="LINK">
                    <span className="logoSpan">Health</span>Care.
                </Button>
                <div className="navbar-nav d-block-custom">
                    <Button
                        className="nav-link active mr-40px"
                        type="LINK"
                        href="/">
                        Home
                    </Button>
                    <Button
                        className="nav-link mr-40px"
                        type="LINK"
                        href="/FindADoctor">
                        Find a doctor
                    </Button>
                    <Button
                        className="nav-link mr-40px"
                        type="LINK"
                        href="/Testimonial">
                        Testimonials
                    </Button>
                    <Button className="nav-link" type="LINK" href="/AboutUs">
                        About Us
                    </Button>
                </div>
                <div className="space-donate d-block-custom">
                    <Button
                        isPrimary
                        className="font-weigth-bold w-100-custom"
                        type="BUTTON">
                        DONATE NOW
                    </Button>
                    <Button
                        isInfo
                        className="text-white font-weight-bold ml-2 w-100-custom mt-2-custom"
                        type="BUTTON">
                        GET NOW
                    </Button>
                </div>
            </div>
        </nav>
    );
}
