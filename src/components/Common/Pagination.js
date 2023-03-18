import React, { Component } from 'react';

class PaginationSection extends Component {

    render() {

        return (
        <div className="row">
            <div className="col-xxl-12">
                <div className="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
                    <ul className="d-flex align-items-center"> 
                        <li className="prev">
                            <a href="#" className="link-btn link-prev">
                            <i className="far fa-long-arrow-left"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="active">
                            <span>1</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span>2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span>3</span>
                            </a>
                        </li>
                        <li className="next">
                            <a href="#" className="link-btn">
                            <i className="far fa-long-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
         </div>

        );
    }
}

export default PaginationSection;