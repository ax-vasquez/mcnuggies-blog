export default {
  name: `jobTitle`,
  title: `Job Title`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: `Start date`,
      name: `startDate`,
      type: `date`,
      options: {
        dateFormat: `YYYY-MM`,
        calendarTodayLabel: `Today`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: `End date`,
      name: `endDate`,
      type: `date`,
      options: {
        dateFormat: `YYYY-MM`,
        calendarTodayLabel: `Today`,
      },
    },
    {
      title: `Current job title?`,
      name: `currentJobTitle`,
      type: `boolean`,
    },
    {
      title: `Responsibilities`,
      name: `responsibilities`,
      type: `array`,
      of: [{ type: `string` }],
    },
  ],
  preview: {
    select: {
      title: `title`,
    },
  },
  initialValue: {
    currentJobTitle: false,
  },
};
