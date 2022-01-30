import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { THEME } from '../../style/colors'
import { device } from '../../style/devices'

/**
 * The highest-level styled component
 */
export const StyledRootDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${THEME.light.background.default};
  & {
      ul, ol {
        padding-left: 2rem;
        list-style-position: outside;
      }
      li {
        padding-left: 1rem;
      }
      ul {
        list-style-type: disc;
      }
      ul ul {
        list-style-type: circle;
      }
      ul ul ul {
        list-style-type: square;
      }
      ol {
        list-style-type: decimal;
      }
      ol ol {
        list-style-type: lower-roman;
      }
      h1 {
        font-size: 3rem;
        line-height: 1;
        text-align: center;
        color: ${THEME.light.font.heading};
      }
      h2 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: ${THEME.light.font.heading};
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${THEME.light.font.heading};
      }
      blockquote {
        padding: 2rem;
        margin-left: auto;
        margin-right: auto;
        background-color: ${THEME.light.background.defaultHovered};
        color: ${THEME.light.font.blockquote};
        font-style: italic;
        @media ${device.mobileS} {
          width: 80%;
        }
        @media ${device.tablet} {
          width: 91.666667%;
        }
      }
      a {
        color: ${THEME.light.font.link};
        text-decoration: none;
        &:hover {
          color: ${THEME.light.font.linkHovered};
        }
      }
      code {
        padding: 0.125rem;
        background-color: ${THEME.light.background.code};
        border-radius: 0.25rem;
      }
      p {
        text-align: justify;
      }
  }
`

export const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const HeroImage = styled(GatsbyImage)`
  display: block;
  margin-left: auto;
  marging-right: auto;
  width: 100%;
  height: 24rem;
`
