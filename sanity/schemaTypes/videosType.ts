import {defineField, defineType} from 'sanity'

export const videosType = defineType({
  name: 'videos',
  title: 'Vídeos',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Vídeos',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Em Ação',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'videoList',
      title: 'Lista de Vídeos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título do Vídeo',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              options: {hotspot: true},
              description: 'Imagem de capa do vídeo',
            }),
            defineField({
              name: 'embedUrl',
              title: 'URL do Vídeo (Embed)',
              type: 'url',
              description: 'Ex: https://www.youtube.com/embed/VIDEO_ID',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'platform',
              title: 'Plataforma',
              type: 'string',
              options: {
                list: [
                  {title: 'YouTube', value: 'YouTube'},
                  {title: 'Vimeo', value: 'Vimeo'},
                  {title: 'TikTok', value: 'TikTok'},
                  {title: 'Instagram', value: 'Instagram'},
                ],
              },
              initialValue: 'YouTube',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'platform',
              media: 'thumbnail',
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
