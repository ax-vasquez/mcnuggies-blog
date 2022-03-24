export default {
  name: `project`,
  title: `Project`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required(),
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
          .slice(0, 200),
      },
    },
    {
      title: `Repo URL`,
      name: `repoUrl`,
      type: `url`,
    },
    {
      name: `link`,
      title: `Links`,
      type: `array`,
      of: [{type: `reference`, to: [{type: `projectLink`}]}],
    },
    {
      name: `description`,
      validation: (Rule) => Rule.required(),
      title: `Description`,
      type: `array`,
      of: [
        {
          title: `Block`,
          type: `block`,
          styles: [{title: `Normal`, value: `normal`}],
          lists: [],
        },
      ],
    },
    {
      name: `version`,
      title: `Version`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    },
  ],
}
