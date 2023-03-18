import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const HeaderSearch = ({setSearchOpen, searchOpen}) => {

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      return (
        <div className={searchOpen ? "search-wrap search-opened": "search-wrap"}>
            <div className="search-inner">
                <i className="far fa-times search-close" id='search-close' onClick={() => setSearchOpen(false)}></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search Here..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;