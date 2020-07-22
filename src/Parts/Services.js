import React from "react";

export default function Services() {
    return (
        <section className="container-fluid vh-100">
            <div className="row">
                <div className="content-box text-center">
                    <label className="text-info" style={{ marginTop: 10 }}>
                        Our Services
                    </label>
                    <h1 className="text-weight-light">
                        Free Services For Everyone
                    </h1>
                </div>
            </div>
            <div className="container position-relative mt-minus-144">
                <div className="row d-flex">
                    <div className="col-4 col-sm-12 col-md-4 mb-sm-3 d-flex justify-content-center">
                        <div className="card-custom pl-4 pt-5">
                            <img
                                src="logo192.png"
                                alt="logo"
                                className="icon-Style"
                            />
                            <div className="mt-4">
                                <h5 className="font-weight-bold">
                                    Search Doctor
                                </h5>
                                <p className="mt-2 font-weight-light">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-12 col-md-4 mb-sm-3 d-flex justify-content-center">
                        <div className="card-custom pl-4 pt-5">
                            <img
                                src="logo192.png"
                                alt="logo"
                                className="icon-Style"
                            />
                            <div className="mt-4">
                                <h5 className="font-weight-bold">Tracking</h5>
                                <p className="mt-2 font-weight-light">
                                    Track and save your medical history and
                                    health data
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-12 col-md-4 mb-sm-3 d-flex justify-content-center">
                        <div className="card-custom pl-4 pt-5">
                            <img
                                src="logo192.png"
                                alt="logo"
                                className="icon-Style"
                            />
                            <div className="mt-4">
                                <h5 className="font-weight-bold">
                                    Consultation
                                </h5>
                                <p className="mt-2 font-weight-light">
                                    Free consultation with our trusted doctors
                                    and get the best recomendations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
