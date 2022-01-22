/**
 * Tailwind Colors
 *
 * @see https://tailwindcss.com/docs/customizing-colors
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
        900: `rgba(76, 29, 149, 1)`,
    },
    gray: {
        100: `#F3F4F6`,
        200: `#E5E7EB`,
        300: `#D1D5DB`,
        400: `#9CA3AF`,
        500: `#6B7280`,
        600: `#4B5563`,
        700: `#374151`,
        800: `#1F2937`,
        900: `#111827`,
    },
    indigo: {
        100: `#E0E7FF`,
        200: `#C7D2FE`,
        300: `#A5B4FC`,
        400: `#818CF8`,
        500: `#6366F1`,
        600: `#4F46E5`,
        700: `#4338CA`,
        800: `#3730A3`,
        900: `#312E81`,
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
    black: `rgba(0, 0, 0, 1)`,
} as {
    [key: string]: {
        [range: number]: string
    } | string
}

type ThemeConfig = {
    /**
     * Font colors
     */
    font: {
        /**
         * The default font color (for things like `<p>`)
         */
        default: string
        /**
         * heading color; applies to all heading tags (e.g., `h1`, `h2`, etc.)
         */
        heading: string
        /**
         * "Preview" text font color; used for `<p>` tags that contain small
         * bodies of text, such as the `ArticleRow`
         */
        blockquote: string
        /**
         * The font color for the date banner on the Blog Feed; also applied to the
         * date banner filter icon
         */
        dateBanner: string
        /**
         * The font color the nav bar items; also applied to any static icons
         * in the nav bar, such as the menu button icon
         */
        nav: string
        /**
         * The font color for items in the sidebar, including any accompanying icons (aside
         * from any logos from third-party integrations/providers/etc)
         */
        sidebar: string
        /**
         * The font color for all `<a>` tags
         */
        link: string
        /**
         * The font color for all `<a>` tags when hovered
         */
        linkHovered: string
        /**
         * The font color for things like publish dates and employments
         */
        accent: string
        /**
         * The font color to use for generic tags, such as category labels
         */
        tag: string
        /**
         * The active variant font color to use for generic tags, such as category labels
         */
        tagActive: string
        /**
         * The font color for the "accept"-logic buttons (such as the "OK" button on the
         * blog feed modal)
         */
        accept: string
    },
    background: {
        /**
         * The background color for highlighted text
         */
        highlight: string
        /**
         * The background color for code snippets (not code blocks - those are styled separately since
         * they are created via a third party module)
         */
        code: string
        /**
         * The background color for blockquotes
         */
        blockquote: string
        /**
         * The base background color to use for the `main` content of the site (also includes the modal)
         */
        default: string
        /**
         * The base background color to use for items that highlight when hovered
         */
        defaultHovered: string
        /**
         * The background color for the nav bar
         */
        nav: string
        /**
         * The background color for items in the nav bar when they are hovered
         */
        navHovered: string
        /**
         * The background color for the sidebar
         */
        sidebar: string,
        /**
         * The background color for items in the sidebar when hovered
         */
        sidebarHovered: string
        /**
         * The background color for the date banners on the blog feed
         */
        dateBanner: string
        /**
         * The background color for the date banners on the blog feed when hovered
         */
        dateBannerHovered: string
        /**
         * The background color for the "accept"-logic buttons (such as the "OK" button on the
         * blog feed modal)
         */
        accept: string
        /**
         * The background color for the "accept"-logic buttons (such as the "OK" button on the
         * blog feed modal) when hovered
         */
        acceptHovered: string
        /**
         * The background color to use for generic tags, such as category labels
         */
        tag: string
        /**
         * The background color to use for generic tags, such as category labels when hovered
         */
        tagHovered: string
        /**
         * The active variant background color to use for generic tags, such as category labels
         */
        tagActive: string
        /**
         * The active variant background color to use for generic tags, such as category labels when hovered
         */
        tagActiveHovered: string
    },
    border: {
        /**
         * Border color
         */
        default: string
        /**
         * The border color to use for generic tags, such as category labels
         */
        tag: string
        /**
         * The active variant border color to use for generic tags, such as category labels
         */
        tagActive: string
    }
}

export const THEME = {
    light: {
        font: {
            default: `${TW_COLORS.black}`,
            heading: `${TW_COLORS.gray[700]}`,
            blockquote: `${TW_COLORS.gray[500]}`,
            dateBanner: `${TW_COLORS.white}`,
            nav: `${TW_COLORS.white}`,
            sidebar: `${TW_COLORS.white}`,
            link: `${TW_COLORS.indigo[600]}`,
            linkHovered: `${TW_COLORS.indigo[400]}`,
            accent: `${TW_COLORS.gray[700]}`,
            tag: `${TW_COLORS.gray[700]}`,
            tagActive: `${TW_COLORS.indigo[500]}`,
            accept: `${TW_COLORS.white}`,
        },
        background: {
            highlight: `${TW_COLORS.yellow[200]}`,
            code: `${TW_COLORS.gray[200]}`,
            blockquote: `${TW_COLORS.gray[200]}`,
            default: `${TW_COLORS.white}`,
            defaultHovered: `${TW_COLORS.gray[100]}`,
            nav: `${TW_COLORS.gray[800]}`,
            navHovered: `${TW_COLORS.gray[900]}`,
            sidebar: `${TW_COLORS.gray[600]}`,
            sidebarHovered: `${TW_COLORS.gray[800]}`,
            dateBanner: `${TW_COLORS.gray[800]}`,
            dateBannerHovered: `${TW_COLORS.gray[700]}`,
            accept: `${TW_COLORS.green[300]}`,
            acceptHovered: `${TW_COLORS.green[500]}`,
            tag: `${TW_COLORS.gray[100]}`,
            tagHovered: `${TW_COLORS.gray[200]}`,
            tagActive: `${TW_COLORS.indigo[100]}`,
        },
        border: {
            default: `${TW_COLORS.gray[200]}`,
            tag: `${TW_COLORS.gray[300]}`,
            tagActive: `${TW_COLORS.indigo[500]}`,
        },
    },
} as {
    light: ThemeConfig
}
