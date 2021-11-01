import { GatsbyImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import tw from "twin.macro"

export const HeroImageContainer = styled.div`
    ${tw`relative flex justify-center`}
`

export const HeroImageOverlay = styled.div.attrs({
    className: "bg-black"
  })`
    ${tw`absolute flex items-center justify-center`}
    ${tw`bg-opacity-75`}
    ${tw`w-full h-full`}
`

export const HeroImage = styled(GatsbyImage).attrs({
    className: "h-96"
  })`
    ${tw`block`}
    ${tw`ml-auto mr-auto`}
    ${tw`w-full`}
`
