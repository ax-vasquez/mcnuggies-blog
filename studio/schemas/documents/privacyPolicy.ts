import { richTextFieldConfig } from '../../shared'

export default {
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'infoCollectionDescription',
        title: 'Info Collection Description',
        description: 'A description for the kinds of information you collect on your site (e.g., names, addresses, phone numbers, etc.)',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionRationale',
        title: 'Info Collection Rationale',
        description: 'An explanation for why the collected information is necessary',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionPractices',
        title: 'Info Collection Practices',
        description: 'An explanation for how you collect the information (e.g., cookies, logs, surveys, etc.)',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionUsage',
        title: 'Info Collection Usage',
        description: 'An explanation for how you will use the information you collect (and who else may have access to it)',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionChangeNotifications',
        title: 'Info Collection Usage',
        description: 'An explanation for how you will notify users of information collection policy practices',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionContact',
        title: 'Info Collection Contact',
        description: 'Information about who to contact if someone has questions about your information collection practices',
        ...richTextFieldConfig,
      },
      {
        name: 'infoCollectionSafety',
        title: 'Info Collection Safety',
        description: 'How is user data protected?',
        ...richTextFieldConfig,
      },
    ],
    preview: {
        select: {
          title: 'title',
        },
    },
  }
