import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import HeaderTop from './HeaderTop';
import HeaderSearch from './HeaderSearch';

const HeaderTwo = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.sticky-header2');
        const scrollTop = window.scrollY;
        scrollTop >= 37 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
    };
    // Sticky Menu Area End

    return (
        <React.Fragment>
            <Head>
                <title>Kimox – Digital Agency React, NextJs Template</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <header>
                <HeaderTop />
                <div className="header-area transparent-header sticky-header2 white-bg">
                    <div className="container-fluid">
                        <div className="header-space">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-8">
                                    <div className="header-logo">
                                        <Link href="/"><a><img src="assets/img/logo/logo.png" className="img-fluid" alt="logo-img" /></a></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-4">
                                    <div className="main-menu main-menu-2 d-xl-block d-none">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="menu-item-has-children"><Link href="/"><a>Home</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/"><a>Home Style 1</a></Link></li>
                                                        <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/about"><a>About</a></Link></li>
                                                <li className="menu-item-has-children"><Link href="/service"><a>Services</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/service"><a>Services</a></Link></li>
                                                        <li><Link href="/service-details"><a>Services Details</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="/project"><a>Projects</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/project"><a>Projects</a></Link></li>
                                                        <li><Link href="/project-details"><a>Projects Details</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="/blog"><a>Blog</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/blog"><a>Blog</a></Link></li>
                                                        <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                                        <li><Link href="/faq"><a>Faq</a></Link></li>
                                                        <li><Link href="/contact"><a>Contact</a></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="side-menu-icon d-xl-none text-end">
                                        <span className="search-btn nav-search search-trigger" onClick={() => { setSearchOpen(!searchOpen) }}><i className="fas fa-search"></i></span>
                                        <button className="side-toggle side-toggle2" onClick={() => { setMenuOpen(!menuOpen) }}><i className="far fa-bars"></i></button>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block">
                                    <div className="header-right text-end">
                                        <div className="header-social header-social-2">
                                            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                            <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <div className="header-search header-search-2">
                                            <span className="search-btn nav-search search-trigger" onClick={() => { setSearchOpen(!searchOpen) }}><i className="fas fa-search"></i></span>
                                        </div>
                                        <div className="header-btn">
                                            <Link href="/contact"><a className="theme-btn theme-btn-small border-btn">Free Estimate</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <div onClick={() => setSearchOpen(false)} className={searchOpen ? "body-overlay show" : "body-overlay"}></div>

        </React.Fragment>
    );
}

export default HeaderTwo;