import React, { useState } from 'react'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { Link } from 'gatsby'
import styled from "styled-components"
import { BG_COLORS, BORDER_COLORS, FONT_COLORS } from '../../style/colors'

const StyledHomeTile = styled(Link)<{ hovered: boolean }>`
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
    border-color: ${BORDER_COLORS.home.tile.light};
    justify-content: center;
    ${(props) => props.hovered ? `
        background-color: ${BG_COLORS.home.tile.lightHovered};
    ` 
    : `
        background-color: ${BG_COLORS.home.tile.light};
    `}
`

const StyledFaBook = styled(FaBook)`
    color: ${FONT_COLORS.home.tile.light};
`

const StyledFaInfoCircle = styled(FaInfoCircle)`
    color: ${FONT_COLORS.home.tile.light};
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

    const [hovered, setHovered] = useState(false)

    let icon: JSX.Element
    if (label.toLowerCase() === 'blog') {
        icon = <StyledFaBook size={128} />
    }
    if (label.toLowerCase() === 'about') {
        icon = <StyledFaInfoCircle size={128} />
    }
    return (
        <StyledHomeTile 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            hovered={hovered}
        id={`home-banner-${label}`} to={`/${label}`}>
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
