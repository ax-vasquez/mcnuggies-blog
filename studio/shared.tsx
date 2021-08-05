import React from 'react'
import { FaPaperclip } from 'react-icons/fa'

const highlightIcon = () => (
    <span style={{ fontWeight: `bold` }}>H</span>
)
const highlightRender = props => (
    <span style={{ backgroundColor: `yellow` }}>{props.children}</span>
)

export const richTextFieldConfig = {
    type: `array`,
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
}
