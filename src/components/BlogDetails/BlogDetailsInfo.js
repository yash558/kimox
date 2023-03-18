import React, { Component } from 'react';
import Link from 'next/link';

class BlogDetailsInfo extends Component {

    render() {

        return (
            <div className="row pt-30 pb-20">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                    <div className="tag_cloud">
                        <span>Tags: </span>
                        <Link href="/blog-details"><a className="tag-cloud-link">Graphics,</a></Link>
                        <Link href="/blog-details"><a className="tag-cloud-link">Design,</a></Link>
                        <Link href="/blog-details"><a className="tag-cloud-link">Business</a></Link>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                    <div className="blog-social text-sm-end ">
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogDetailsInfo;