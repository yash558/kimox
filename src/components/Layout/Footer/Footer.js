import React from 'react';
import FooterBottom from './FooterBottom';
import Link from 'next/link';

const Footer = () => {

    return (
      <footer style={{ backgroundImage:`url(${'assets/img/bg/footer-bg.jpg'})`}} className="pt-95 position-relative">
         <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
         </div>
         <div className="footer-area pb-60">
            <div className="container">
               <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="widget mb-30">
                           <div className="footer-logo mb-25">
                                 <Link href="/"><a><img src="assets/img/logo/logo1.svg" className="img-fluid" alt="footer-logo"/></a></Link>
                           </div>
                           <p className="mb-20 pr-35">BlockTing is a Blockchain-centric community of passionate young minds who evangelize Blockchain, Crypto, DeFi, and NFT products to bring more visibility and promote their innovative adoption through their marketing expertise and domain excellence.</p>
                         <div className="footer-social">
                            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                         </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-sm-6">
                        <div className="widget mb-30">
                           <h4 className="widget-title mb-35">Links</h4>
                           <ul>
                                 <li><Link href="/service"><a>Our Services</a></Link></li>
                                 <li><Link href="/about"><a>Meet Our Team</a></Link></li>
                                 <li><Link href="/project"><a>Our Portfolio</a></Link></li>
                                 <li><Link href="/contact"><a>Contact</a></Link></li>
                                 <li><Link href="/contact"><a>Help</a></Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="widget widget-contact mb-30">
                           <h4 className="widget-title mb-35">Contact</h4>
                           <ul>
                                 <li className="pb-10">82 Mohinder, Thakur Singh Colony Rd
<br/> Jalandhar Cantt, Jalandhar, Punjab (IN) 144005 </li>
                                 <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:needhelp@company.com">hi@blockting.com</a></li>
                                 <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:926668880000">+91 89684-74568</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="widget mb-30">
                           <h4 className="widget-title mb-30">Newsletter</h4>
                           <p className="mb-20">Subscribe to Our Newsletter for Daily News and Updates</p>
                           <div className="widget-newsletter">
                                 <form action="#">
                                    <input type="email" placeholder="Email Address"/>
                                    <button type="submit">Send</button>
                                 </form>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
         <FooterBottom />
      </footer>
    );
}

export default Footer;