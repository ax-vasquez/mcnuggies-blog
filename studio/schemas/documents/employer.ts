import { richTextFieldConfig } from "../../shared";

export default {
    name: `employer`,
    title: `Employer`,
    type: `document`,
    fields: [
      {
        name: `name`,
        title: `Name`,
        type: `string`,
        validation: Rule => Rule.required()
      },
      {
        title: 'Are you currently employed?',
        name: 'employed',
        type: 'boolean'
      },
      {
        name: `image`,
        title: `Image`,
        type: `image`,
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.required()
      },
      {
        title: `Start date`,
        name: `startDate`,
        type: `date`,
        options: {
          dateFormat: `YYYY-MM`,
          calendarTodayLabel: `Today`
        },
        validation: Rule => Rule.required()
      },
      {
        title: `End date`,
        name: `endDate`,
        type: `date`,
        options: {
          dateFormat: `YYYY-MM`,
          calendarTodayLabel: `Today`
        },
      },
      {
        name: `jobTitle`,
        title: `Job Title`,
        type: `string`,
        validation: Rule => Rule.required()
      },
      {
        name: `description`,
        title: `Description`,
        ...richTextFieldConfig,
        validation: Rule => Rule.required(),
      },
    ],
    preview: {
        select: {
          title: `name`,
          media: `image`,
        },
    },
}