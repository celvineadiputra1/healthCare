import React from "react";
import Button from "../elements/Button";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">
                    <span className="logoSpan">Health</span>Care.
                </a>
                <div>
                    <div className="navbar-nav">
                        <a className="nav-link active mr-40px" href="#">
                            Home
                        </a>
                        <a className="nav-link mr-40px" href="#">
                            Find a doctor
                        </a>
                        <a className="nav-link mr-40px" href="#">
                            Testimonials
                        </a>
                        <a className="nav-link" href="#">
                            About Us
                        </a>
                    </div>
                </div>
                <div className="space-donate">
                    <Button isPrimary className="font-weigth-bold">
                        DONATE NOW
                    </Button>
                    <Button isInfo className="text-white font-weigth-bold ml-2">
                        GET NOW
                    </Button>
                </div>
            </div>
        </nav>
    );
}
