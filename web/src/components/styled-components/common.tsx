import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { BG_COLORS, FONT_COLORS } from '../../style/colors'
import BlockContent from '@sanity/block-content-to-react'
import { FONT } from '../../style/font'
import { device } from '../../style/devices'

/**
 * The highest-level styled component
 */
export const StyledRootDiv = styled.div`
  height: 100%;
  width: 100%;
  font-family: ${FONT.family};
  background-color: ${BG_COLORS.main};
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
        list-style-type: circle
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
        color: ${FONT_COLORS.heading.light};
      }
      h2 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: ${FONT_COLORS.heading.light};
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${FONT_COLORS.heading.light};
      }
      blockquote {
        padding: 2rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        width: 91.666667%;
        margin-left: auto;
        margin-right: auto;
        background-color: ${BG_COLORS.blockquote.light};
        color: ${FONT_COLORS.blockquote.light};
        font-style: italic;
      }
      a {
        color: ${FONT_COLORS.link.light};
        text-decoration: none;
        &:hover {
          color: ${FONT_COLORS.link.lightHovered};
        }
      }
      code {
        padding: 0.125rem;
        background-color: ${BG_COLORS.code.light};
        border-radius: 0.25rem;
      }
  }
`

export const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const HeroImageOverlay = styled.div.attrs({
  className: ''
})`
  --bg-opacity: 0.75;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, var(--bg-opacity));
`

export const HeroImage = styled(GatsbyImage)`
  display: block;
  margin-left: auto;
  marging-right: auto;
  width: 100%;
  height: 24rem;
`

// TODO: get text justification working
export const StyledBlockContent = styled(BlockContent)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
