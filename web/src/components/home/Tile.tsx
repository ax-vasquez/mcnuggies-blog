import React from 'react'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { Link } from 'gatsby'
import styled from "styled-components"
import { COLORS } from '../../style/colors'

const StyledHomeTile = styled(Link)`
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    height: 16rem;
    width: 16rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    border: solid;
    border-width: 4px;
    border-radius: 0.75rem;
    border-color: ${COLORS.purple[300]};
    justify-content: center;
    &:hover {
        border-color: ${COLORS.purple[500]};
    }
    
`

const StyledTileContent = styled.div`
    text-align: center;
`

const StyledTileLabel = styled.h2`
    margin-top: 1rem;
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
                <StyledTileLabel>
                    {label}
                </StyledTileLabel>
            </StyledTileContent>
            
        </StyledHomeTile>
    )
}

export default Tile
