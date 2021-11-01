import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from "styled-components"
import tw from "twin.macro"

const BannerImage = styled(GatsbyImage).attrs({
    className: "h-32"
})`
    ${tw`w-full`}
    ${tw`block`}
`

const BannerImageOverlay = styled.div.attrs({
    className: "bg-black h-32 bottom-0"
})`
    ${tw`absolute flex items-center justify-center`}
    ${tw`bg-opacity-75 hover:bg-opacity-50`}
    ${tw`w-full`}
    ${tw`text-gray-300 text-3xl`}
`

const StyledHomeTile = styled(Link).attrs({
    className: ''
})`
    ${tw`relative`}
    ${tw`flex justify-center`}
    ${tw`w-full`}
`

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
        <StyledHomeTile id={`home-banner-${label}`} to={route}>
            <BannerImage image={image} alt={label} />
            <BannerImageOverlay>
                <h2>{label}</h2>
            </BannerImageOverlay>
        </StyledHomeTile>
    )
}

export default Tile
