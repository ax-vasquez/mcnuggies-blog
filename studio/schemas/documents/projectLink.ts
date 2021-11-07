export default {
    name: 'projectLink',
    title: 'Project Link',
    type: 'document',
    fields: [
      {
        name: 'provider',
        title: 'Title',
        type: 'reference',
        to: [{ type: 'projectLinkProvider' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image',
        },
    },
}
