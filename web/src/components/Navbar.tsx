import React from 'react'
import { BiSearchAlt } from '@react-icons/all-files/bi/BiSearchAlt'
import { Link } from "gatsby"

type NavOptionData = {
    [key: string]: {
        label: string
        url: string
    }
}

const OPTIONS = {
    home: {
        label: `Home`,
        url: `/`
    },
    blog: {
        label: `Blog`,
        url: `/blog`
    },
    about: {
        label: `About`,
        url: `/about`
    },
} as NavOptionData

export const Navbar = () => (
    <div id="nav" className="nav">
        <ul className="inline-block">
            {Object.keys(OPTIONS).map(option => <li key={`nav-${OPTIONS[option].label.toLowerCase()}`}><Link to={OPTIONS[option].url}>{OPTIONS[option].label}</Link></li>)}
        </ul>
        <div className="nav-search-icon">
            <BiSearchAlt size={30}/>
        </div>
    </div>
)
