import React from 'react'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { Link } from 'gatsby'
import styled from "styled-components"
import tw from "twin.macro"

const StyledHomeTile = styled(Link).attrs({
    className: 'h-64 w-64 inset-0 border-purple-300 hover:border-purple-500 mb-4'
})`
    ${tw`border-4 rounded-xl mx-auto flex flex-wrap content-center justify-center`}
    
`

const StyledTileContent = styled.div.attrs({
    className: ''
})`
    ${tw`text-center`}
`

const Tile = (props) => {

    const { 
        label
    }: { 
        label: string 
    } = props

    let icon: JSX.Element
    if (label.toLowerCase() === 'blog') {
        icon = <FaBook className="text-purple-300" size={128} />
    }
    if (label.toLowerCase() === 'about') {
        icon = <FaInfoCircle className="text-purple-300" size={128} />
    }
    return (
        <StyledHomeTile id={`home-banner-${label}`} to={`/${label}`}>
            <StyledTileContent>
                {icon}
                <h2 className="mt-4">
                    {label}
                </h2>
            </StyledTileContent>
            
        </StyledHomeTile>
    )
}

export default Tile
