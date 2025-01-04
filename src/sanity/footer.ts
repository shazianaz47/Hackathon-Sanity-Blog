


export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'contactInfo',
        type: 'string',
        title: 'Contact Information',
      },
      {
        name: 'socialMediaLinks',
        type: 'array',
        title: 'Social Media Links',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'platform',
                type: 'string',
                title: 'Platform',
              },
              {
                name: 'url',
                type: 'url',
                title: 'URL',
              },
            ],
          },
        ],
      },
    ],
  };
  