import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Tile = ({ src, imageData }: { src: string, imageData: IGatsbyImageData }) => {
    let label = ``
    let route = `/`
    if (src.includes(`blog`)) {
        route = label = `blog`
    }
    if (src.includes(`about`)) {
        route = label = `about`
    }
    const image = getImage(imageData)
    return (
        <Link className="home-tile" to={route}>
            <GatsbyImage image={image} alt={label} className="home-tile-image"/>
            <div className="home-tile-overlay">
                <h2>{label}</h2>
            </div>
        </Link>    
    )
}
