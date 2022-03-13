import {richTextFieldConfig} from '../../shared'

export default {
  name: `series`,
  title: `Series`,
  type: `document`,
  fields: [
    {
      name: `seriesTitle`,
      title: `Series Title`,
      type: `string`,
      validation: (Rule) => Rule.required()
    },
    {
      name: `seriesDescription`,
      title: `Series Description`,
      ...richTextFieldConfig,
      validation: (Rule) => Rule.required(),
    },
    {
      name: `articles`,
      title: `Articles`,
      type: `array`,
      of: [{type: `reference`, to: [{type: `article`}]}]
    }
  ]
}
