import React from 'react'
import { FaPaperclip } from 'react-icons/fa'

const highlightIcon = () => (
  <span style={{ fontWeight: `bold` }}>H</span>
)
const highlightRender = props => (
  <span style={{ backgroundColor: `yellow` }}>{props.children}</span>
)

export default {
    name: `article`,
    title: `Article`,
    type: `document`,
    fields: [
      {
        name: `title`,
        title: `Title`,
        type: `string`,
        validation: Rule => Rule.required()
      },
      {
        name: `slug`,
        title: `Slug`,
        type: `slug`,
        options: {
          source: `title`,
          slugify: (input: string) => input
                           .toLowerCase()
                           .replace(/\s+/g, `-`)
                           .slice(0, 200)
        },
      },
      {
        title: `Publish date`,
        name: `publishDate`,
        type: `date`,
        options: {
          dateFormat: `YYYY-MM-DD`,
          calendarTodayLabel: `Today`
        },
        validation: Rule => Rule.required()
      },
      {
        title: `Author`,
        name: `author`,
        type: `reference`,
        to: [{ type: `creator` }],
        validation: Rule => Rule.required()
      },
      {
        name: `image`,
        title: `Image`,
        type: `image`,
        options: {
          hotspot: true,
        },
      },
      {
        name: `body`,
        title: `Body`,
        type: `array`,
        validation: Rule => Rule.required(),
        of: [
          {
            title: `Block`,
            type: `block`,
            styles: [
                { title: `Normal`, value: `normal` },
                {title: `H1`, value: `h1`},
                {title: `H2`, value: `h2`},
                {title: 'Quote', value: 'blockquote'}
            ],
            marks: {
                decorators: [
                  { title: `Strong`, value: `strong` },
                  { title: `Emphasis`, value: `em` },
                  { title: `Highlight`, value: `highlight`, 
                    blockEditor: {
                      icon: highlightIcon,
                      render: highlightRender
                    }
                  },
                  { title: `Inline-code`, value: `code` }
                ],
                annotations: [
                  {
                    name: `link`,
                    type: `object`,
                    title: `link`,
                    fields: [
                      {
                        name: `url`,
                        type: `url`
                      }
                    ]
                  },
                  {
                    name: `internalLink`,
                    type: `object`,
                    title: `Internal link`,
                    blockEditor: {
                      icon: FaPaperclip
                    },
                    fields: [
                      {
                        name: `reference`,
                        type: `reference`,
                        to: [
                          { type: `article` }
                        ]
                      }
                    ]
                  },
                ],
            },
            lists: [
              {title: 'Bullet', value: 'bullet'},
              {title: 'Number', value: 'number'},
            ],
          },
          {
            type: `code`
          }
        ],
      },
      {
        name: `categories`,
        title: `Categories`,
        type: `array`,
        of: [{ type: `reference`, to: [{type: `category`}] }]
      }
    ],
    preview: {
      select: {
        title: `name`,
        media: `image`,
      },
    },
  }
