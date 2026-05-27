import {defineField, defineType} from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navegação',
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
      name: 'navLinks',
      title: 'Links de Navegação',
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
      name: 'ctaText',
      title: 'Texto do Botão CTA',
      type: 'string',
      description: 'Ex: Contato',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link do Botão CTA',
      type: 'string',
      description: 'Ex: #contact',
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
    },
  },
})
