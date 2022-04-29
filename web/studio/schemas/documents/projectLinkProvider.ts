
export default {
  name: `projectLinkProvider`,
  title: `Project Link Provider`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required()
    },
    {
      name: `icon`,
      title: `Icon`,
      type: `image`,
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: `title`,
      media: `image`,
    },
  },
}
