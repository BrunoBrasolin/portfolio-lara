import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Rodapé',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nome da Marca',
      type: 'string',
      description: 'Ex: Lara Brazolin',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brandDescription',
      title: 'Descrição da Marca',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'footerLinks',
      title: 'Links do Rodapé',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Texto do Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              description: 'Ex: #about ou /pagina',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociais',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Plataforma',
              type: 'string',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Twitter/X', value: 'twitter'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'TikTok', value: 'tiktok'},
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'developerName',
      title: 'Nome do Desenvolvedor',
      type: 'string',
      description: 'Ex: Dev Studio',
    }),
    defineField({
      name: 'developerUrl',
      title: 'URL do Desenvolvedor',
      type: 'url',
    }),
    defineField({
      name: 'developerLogo',
      title: 'Logo do Desenvolvedor',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
    },
  },
})
