import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4">
            <div className="container-fluid d-flex">
                <Link className="navbar-brand" to="#">
                    <span className="logoSpan">Health</span>Care.
                </Link>
                <div>
                    <div className="navbar-nav">
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
