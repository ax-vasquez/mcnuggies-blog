import { richTextFieldConfig } from '../../shared'

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
        ...richTextFieldConfig,
        validation: Rule => Rule.required(),
      },
      {
        name: `categories`,
        title: `Categories`,
        type: `array`,
        of: [{ type: `reference`, to: [{type: `category`}] }]
      },
      {
        name: `series`,
        title: `Series`,
        type: `reference`,
        to: [{type: `series`}]
      },
      {
        name: `seriesIndex`,
        title: `Series Index`,
        type: `number`,
      }
    ],
    preview: {
      select: {
        title: `title`,
        media: `image`,
      },
    },
  }
