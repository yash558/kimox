import React, { Component } from 'react';

class WhyWeThree extends Component {

    render() {

        return (
            <section className="why-we bg-grey pt-120 pb-125 pb-md-110 position-relative">
                <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                </div>
                <div className="container z-index">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="provide-thumb">
                                <img src="assets/img/about/about-img-7.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="provide-content">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">All Categories List</h5>
                                    <h2 className="section-title mb-35">We provide a best <br/>
                                        services
                                    </h2>
                                    <p>WE ARE TRUSTED BY THE GLOBAL BLOCKCHAIN ECOSYSTEM.</p>
                                </div>
                                <p>We have worked with several international blockchain clients to help them envangelized their products & services by establishing their digital presence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWeThree;