import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero - Seção Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Imagem de Fundo',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Ex: Surfista Amadora',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      description: 'Ex: Lara Brazolin',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto do Botão Principal',
      type: 'string',
      description: 'Ex: Entre em contato',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link do Botão',
      type: 'string',
      description: 'Ex: #contact',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      description: 'Ex: @larabrazolin_',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Link do Instagram',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
})
