import React, { Component } from 'react';
import Link from 'next/link';

class Mission extends Component {

    render() {

        return (
        <section className="mission-area pt-120 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">WE MAKE BLOCKCHAIN PRODUCTS EASY TO UNDERSTAND</h2>
                                <p>"HUMANS TEND TO FOLLOW WHEN THEY UNDERSTAND"</p>
                            </div>
                            <p className="mb-45">What we can do for you beyond marketing and content is to provide value to your ecosystem. The current Blockchain ecosystem is void of awareness and basic understanding which is the biggest barrier for anyproject in this space. In order for people to use your product, they need to understand it and trust it. This is where the BlockTing team comes in. We are in the Blockchain space out of our passion and belief in the underlying technology. Our experience and deep technical knowledge allows us to convey your project idea and concept in the most simplified Form.</p>
                            <div className="ktrust-btn">
                                <Link href="/service"><a className="theme-btn border-btn">Discover more</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img"/>
                            <div className="mission-img-text">
                                <h4>We’re committed to
                                    trusted Agency
                                </h4>
                                <Link href="/project"><a>Get Started</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Mission;