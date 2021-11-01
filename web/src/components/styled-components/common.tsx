import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { COLORS } from '../../style/colors'
import BlockContent from '@sanity/block-content-to-react'

/**
 * The highest-level styled component
 */
export const StyledRootDiv = styled.div`
  height: 100%;
  width: 100%;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  & {
      ul, ol {
        margin: 0.5rem; 
        padding-left: 2rem;
      }
      li span {
        margin: 0.5rem; 
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
      li {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      h1 {
        font-size: 3rem;
        line-height: 1;
        
        color: ${COLORS.gray[700]}
      }
      h2 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: ${COLORS.gray[700]};
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${COLORS.gray[700]};
      }
      blockquote {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        border-left-width: 4px;
        width: 91.666667%;
        margin-left: auto;
        margin-right: auto;
        border-color: ${COLORS.gray[400]};
        background-color: ${COLORS.gray[100]};
        color: ${COLORS.gray[600]};
        font-style: italic;
      }
      a {
        color: ${COLORS.purple[500]};
        text-decoration: none;
        &:hover {
          color: ${COLORS.purple[800]};
        }
      }
      pre {
        background-color: ${COLORS.gray[600]};
        border-radius: 0.25rem;
      }
      code {
        padding: 0.125rem;
        background-color: ${COLORS.gray[200]};
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
