import React, { Component } from 'react';
import Link from 'next/link';

class ServiceTwo extends Component {

    render() {

        return (
            <section className="service-2 pt-75 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-45">
                            <h5 className="section-subtitle mb-20">Services providing</h5>
                            <h2 className="section-title">What we’re offering</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details"><a>Website <br/>Development</a></Link></h4>
                                <i className="flaticon-stats"></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="assets/img/service/service-img-1.jpg" alt="service-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details"><a>Graphic <br/>designing</a></Link></h4>
                                <i className="flaticon-digital-marketing"></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="assets/img/service/service-img-2.jpg" className="img-fluid" alt="service-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details"><a>SEO & Content <br/>writting</a></Link></h4>
                                <i className="flaticon-website"></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="assets/img/service/service-img-3.jpg" className="img-fluid" alt="service-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration="1s">
                            <div className="kservice-text-2">
                                <span>Services</span>
                                <h4 className="kservice-title-2"><Link href="/service-details"><a>digital <br/>marketing</a></Link></h4>
                                <i className="flaticon-idea"></i>
                            </div>
                            <div className="kservice-img-2">
                                <img src="assets/img/service/service-img-4.jpg" className="img-fluid" alt="service-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ServiceTwo;