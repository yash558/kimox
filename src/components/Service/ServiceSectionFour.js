import React, { Component } from 'react';
import Link from 'next/link';

class ServiceFour extends Component {

    render() {

        return (
        <section className="service-area service-area2 pt-115 pb-100" style={{ backgroundImage:`url(${'assets/img/service/service-bg.jpg'})`}}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-6 col-lg-6">
                        <div className="kservice-text mb-50 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <h5 className="kservice-text-subtitle mb-15">All Categories List</h5>
                            <h2 className="kservice-text-title mb-40">The Services <br/>We’re Offering</h2>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6">
                        <div className="kservice-text mb-50 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <p className="mb-45 mt-35 mt-md-0 mt-xs-0">BlockTing is a team of experts that help devise the perfect marketing plan for your Blockchain and DeFi product. What makes us different is our deep insight into the Blockchain space and belief in the technology.</p>
                        </div>
                    </div>
                </div>

                <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-analytics"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details"><a>Content <br/>Marketing</a></Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-marketing"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details"><a>Blockchain <br/>Advertisements</a></Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-profile"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details"><a>Influencer <br/>Marketing</a></Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 custom-pad-20">
                        <div className="kservice text-center mb-20">
                            <div className="kservice-icon">
                                <i className="flaticon-website"></i>
                            </div>
                            <div className="kservice-content">
                                <h5 className="kservice-content-title"><Link href="/service-details"><a>DEFI & <br/>EXCHANGE</a></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ServiceFour;