import {richTextFieldConfig} from '../../shared'

export default {
  name: `creator`,
  title: `Creator`,
  type: `document`,
  fields: [
    {
      name: `name`,
      validation: (Rule) => Rule.required(),
      title: `Name`,
      type: `string`,
    },
    {
      name: `slug`,
      title: `Slug`,
      type: `slug`,
      options: {
        source: `name`,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, `-`)
          .slice(0, 200),
      },
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
      title: `Github`,
      name: `githubUrl`,
      type: `url`,
    },
    {
      title: `LinkedIn`,
      name: `linkedInUrl`,
      type: `url`,
    },
    {
      name: `bio`,
      title: `Bio`,
      validation: (Rule) => Rule.required(),
      ...richTextFieldConfig,
    },
  ],
  preview: {
    select: {
      title: `name`,
      media: `image`,
    },
  },
}
