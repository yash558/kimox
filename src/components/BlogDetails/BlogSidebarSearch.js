import React, { Component } from 'react';

class BlogSidebarSearch extends Component {

    render() {

        return (
            <div className="sidebar-search-from mb-30">
                <form action="#">
                    <input type="text" placeholder="Search here"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }
}

export default BlogSidebarSearch;