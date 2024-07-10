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
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, `-`).slice(0, 200),
      },
    },
    {
      title: `GitHub Owner`,
      name: `githubOwner`,
      type: `string`,
    },
    {
      title: `GitHub Repo`,
      name: `githubRepo`,
      type: `string`,
    },
    {
      title: `Repo URL`,
      name: `repoUrl`,
      type: `url`,
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
      name: `description`,
      validation: (Rule) => Rule.required(),
      title: `Description`,
      type: `array`,
      of: [
        {
          title: `Block`,
          type: `block`,
          styles: [{ title: `Normal`, value: `normal` }],
          lists: [],
        },
      ],
    },
  ],
};
