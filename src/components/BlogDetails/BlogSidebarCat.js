import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebarCat extends Component {

    render() {

        return (
            <div className="widget_categories grey-bg mb-30">
                <h4 className="bs-widget-title pl-15">Categories</h4>
                <ul>
                    <li><Link href="/blog-details"><a>Web Developement <i className="far fa-long-arrow-right"></i></a></Link></li>
                    <li><Link href="/blog-details"><a>Graphic Design <i className="far fa-long-arrow-right"></i></a></Link></li>
                    <li><Link href="/blog-details"><a>SEO &amp; Content Writting <i className="far fa-long-arrow-right"></i></a></Link></li>
                    <li><Link href="/blog-details"><a>Digital Marketing <i className="far fa-long-arrow-right"></i></a></Link></li>
                    <li><Link href="/blog-details"><a>App Development <i className="far fa-long-arrow-right"></i></a></Link></li>
                </ul>
            </div>
        );
    }
}

export default BlogSidebarCat;