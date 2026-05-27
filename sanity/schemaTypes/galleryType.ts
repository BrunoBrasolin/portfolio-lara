import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeria de Fotos',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Galeria',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Momentos no Mar',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'photos',
      title: 'Fotos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Descrição da imagem para acessibilidade',
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
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
