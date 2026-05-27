import {defineField, defineType} from 'sanity'

export const sponsorsType = defineType({
  name: 'sponsors',
  title: 'Patrocinadores',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Parceiros',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Marcas Parceiras',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'sponsorList',
      title: 'Lista de Patrocinadores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome da Marca',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Website (opcional)',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
