import React from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { THEME } from '../../../style/colors'
// import { toggleShowPrivacyModal } from '../../../slices/rootSlice'

/**
 * The `a` tag colors need to be marked !important because the conflict with the base `a` tag
 * styles from the StyledRootDiv. I'm not sure why the conflict happens; I'm sure there is
 * some reason. With that said, !important shouldn't be used too often. We simply need to use
 * it here because, without it, the base `a` tag styles will be applied most of the time when
 * it should be overridden here.
 */
const StyledSidebarFooter = styled.div`
    position: fixed;
    width: 100%;
    left: 50%;
    bottom: 0;
    transform: translate(-50% , -50%);
    color: ${THEME.light.font.sidebar};
    & {
        a {
            color: currentColor !important;
        }
        p {
            margin-bottom: 2rem;
        }
    }
`

// const StyledFooterLink = styled.button`
//     background: none;
//     border: none;
//     color: ${THEME.light.font.accent};
//     font-weight: bold;
//     margin-left: 0.5rem;
//     margin-right: 0.5rem;
//     &:hover {
//         color: ${THEME.light.font.sidebar};
//     }
// `

// const FOOTER_ITEMS = [
//     'privacy',
//     'contact',
// ]

const SidebarFooter = () => {

    // const dispatch = useDispatch()

    return (
        <StyledSidebarFooter>
            <div style={{
                textAlign: `center`,
            }}
            >
                {/* {FOOTER_ITEMS.map((item) => (
                    <span
                      key={`sidebar-footer-link-${item.toLowerCase()}`}
                    >
                        <StyledFooterLink
                          onClick={() => {
                              if (item === 'privacy') dispatch(toggleShowPrivacyModal())
                          }}
                        >
                            {item}
                        </StyledFooterLink>
                    </span>
                ))} */}
            </div>
            <p style={{
                textAlign: `center`,
                fontSize: `12px`,
            }}
            >
                ©
                {new Date().getFullYear()}
            </p>
        </StyledSidebarFooter>
    )
}

export default SidebarFooter
