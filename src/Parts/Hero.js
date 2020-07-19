import React from "react";
import Img_Hero from "../Assets/images/hero-1.png";
import Button from "../elements/Button";

export default function Hero() {
    return (
        <section className="container mt-6">
            <div className="row">
                <div className="col-sm-5 offset-sm-1 d-flex align-items-center">
                    <div className="hero-title">
                        <h1>Virtual healthcare for you</h1>
                        <p className="font-weight-light">
                            HealthCare. provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone and free
                        </p>
                        <Button className="btn-colsult mt-4" isPrimary>
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
