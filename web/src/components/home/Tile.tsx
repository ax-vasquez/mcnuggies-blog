import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Tile = ({ src, imageData }: { src: string, imageData: IGatsbyImageData }) => {
    let label = ''
    let route = '/'
    if (src.includes('blog')) {
        // eslint-disable-next-line no-multi-assign
        route = label = 'blog'
    }
    if (src.includes('about')) {
        // eslint-disable-next-line no-multi-assign
        route = label = 'about'
    }
    const image = getImage(imageData)
    return (
        <Link id={`home-banner-${label}`} className="home-tile" to={route}>
            <GatsbyImage image={image} alt={label} className="home-tile-image" />
            <div className="home-tile-overlay">
                <h2>{label}</h2>
            </div>
        </Link>
    )
}

export default Tile
