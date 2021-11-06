
/**
 * Tailwind Colors
 */
const TW_COLORS = {
    purple: {
        100: `rgba(237, 233, 254, 1)`,
        200: `rgba(221, 214, 254, 1)`,
        300: `rgba(196, 181, 253, 1)`,
        400: `rgba(167, 139, 250, 1)`,
        500: `rgba(139, 92, 246, 1)`,
        600: `rgba(124, 58, 237, 1)`,
        700: `rgba(109, 40, 217, 1)`,
        800: `rgba(91, 33, 182, 1)`,
        900: `rgba(76, 29, 149, 1)`
    },
    gray: {
        100: `rgba(243, 244, 246, 1)`,
        200: `rgba(229, 231, 235, 1)`,
        300: `rgba(209, 213, 219, 1)`,
        400: `rgba(156, 163, 175, 1)`,
        500: `rgba(107, 114, 128, 1)`,
        600: `rgba(75, 85, 99, 1)`,
        700: `rgba(55, 65, 81, 1)`,
        800: `rgba(31, 41, 55, 1)`,
        900: `rgba(17, 24, 39, 1)`
    },
    green: {
        100: `rgba(209, 250, 229, 1)`,
        200: `rgba(167, 243, 208, 1)`,
        300: `rgba(110, 231, 183, 1)`,
        500: `rgba(16, 185, 129, 1)`,
    },
    yellow: {
        200: `rgba(253, 230, 138, 1)`,
    },
    white: `rgba(255, 255, 255, 1)`,
    black: `rgba(0, 0, 0, 1)`
} as {
    [key: string]: {
        [range: number]: string
    } | string
}

export const BG_COLORS = {
    main: {
        light: `${TW_COLORS.white}`,
    },
    about: {
        detailsCard: {
            light: `${TW_COLORS.gray[200]}`,
        }
    },
    modal: {
        light: `${TW_COLORS.white}`,
        buttons: {
            submit: {
                light: `${TW_COLORS.green[100]}`,
                lightHovered: `${TW_COLORS.green[200]}`
            }
        }
    },
    code: {
        light: `${TW_COLORS.gray[200]}`,
        dark: ``,
    },
    categoryLabel: {
        default: {
            light: `${TW_COLORS.gray[100]}`,
            lightHovered: ``,
        },
        active: {
            light: `${TW_COLORS.purple[100]}`,
            lightHovered: ``,
        }
    },
    dateBanner: {
        light: `${TW_COLORS.gray[800]}`,
    },
    blockquote: {
        light: `${TW_COLORS.gray[100]}`,
    },
    articleRow: {
        light: `${TW_COLORS.gray[100]}`,
        lightHovered: `${TW_COLORS.gray[200]}`,
    },
    sidebar: {
        light: `${TW_COLORS.gray[600]}`,
        rootItems: {
            lightHovered: `${TW_COLORS.gray[800]}`
        }
    },
    home: {
        tile: {
            light: `${TW_COLORS.gray[800]}`,
            lightHovered: `${TW_COLORS.gray[700]}`
        }
    },
    nav: {
        light: `${TW_COLORS.gray[800]}`
    },
    templates: {
        blogArticle: {
            highlight: {
                light: `${TW_COLORS.yellow[200]}`,
            }
        }
    }
}

export const FONT_COLORS = {
    '404': {
        imageOverlay: `${TW_COLORS.gray[300]}`
    },
    about: {
        detailsCard: {
            employmentDates: {
                light: `${TW_COLORS.gray[400]}`,
            }
        }
    },
    base: {
        light: `${TW_COLORS.black}`,
    },
    heading: {
        light: `${TW_COLORS.gray[700]}`,
    },
    home: {
        tile: {
            light: `${TW_COLORS.white}`,
            lightHovered: `${TW_COLORS.white}`
        }
    },
    blockquote: {
        light: `${TW_COLORS.gray[500]}`,
    },
    categoryLabel: {
        default: {
            light: `${TW_COLORS.gray[500]}`,
        },
        active: {
            light: `${TW_COLORS.purple[500]}`,
        }
    },
    dateBanner: {
        light: `${TW_COLORS.white}`,
        lightHovered: `${TW_COLORS.purple[400]}`,
        dark: ``,
        darkHovered: ``
    },
    link: {
        light: `${TW_COLORS.purple[500]}`,
        lightHovered: `${TW_COLORS.purple[800]}`,
    },
    sidebar: {
        rootItems: {
            light: `${TW_COLORS.white}`
        },
        footerItems: {
            a: {
                light: `${TW_COLORS.gray[500]}`,
                lightHovered: `${TW_COLORS.gray[400]}`,
            },
            p: {
                light: `${TW_COLORS.gray[800]}`,
            }
        }
    },
    nav: {
        light: `${TW_COLORS.white}`,
        lightHovered: `${TW_COLORS.gray[300]}`
    },
    templates: {
        blogArticle: {
            publishDate: {
                light: `${TW_COLORS.gray[500]}`,
            },
            highlight: {
                light: `${TW_COLORS.yellow[200]}`,
            }
        }
    },
    modal: {
        buttons: {
            submit: {
                light: `${TW_COLORS.green[500]}`,
            }
        }
    },
}

export const BORDER_COLORS = {
    categoryLabel: {
        default: {
            light: `${TW_COLORS.gray[500]}`,
            lightHovered: ``,
        },
        active: {
            light: `${TW_COLORS.purple[500]}`,
            lightHovered: ``,
        }
    },
    home: {
        tile: {
            light: `${TW_COLORS.purple[300]}`,
            lightHovered: `${TW_COLORS.purple[500]}`
        }
    },
    modal: {
        buttons: {
            submit: {
                light: `${TW_COLORS.green[300]}`,
            }
        }
    },
}
