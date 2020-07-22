import React from "react";
import Img_Hero from "../Assets/images/hero-1.png";
import Button from "../elements/Button";

export default function Hero() {
    return (
        <section className="container">
            <div className="row d-flex align-items-center flex-column-reverse flex-lg-row text-center-sm vh-100">
                <div className="col-lg-5 col-sm-12 offset-lg-1">
                    <div className="hero-title flex-medium">
                        <h1 style={{ fontSize: 48 }}>
                            Virtual healthcare for you
                        </h1>
                        <p className="font-weight-light">
                            HealthCare. provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone and free
                        </p>
                        <Button
                            className="btn-colsult mt-4"
                            isPrimary
                            type="BUTTON">
                            Consult Today Free
                        </Button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={Img_Hero} alt={Img_Hero} className="img-hero" />
                </div>
            </div>
        </section>
    );
}
