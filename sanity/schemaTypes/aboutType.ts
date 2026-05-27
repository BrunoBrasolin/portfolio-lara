import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sobre Mim',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Sobre mim',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Nascida para surfar',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Parágrafos',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Adicione os parágrafos do texto sobre você',
    }),
    defineField({
      name: 'stats',
      title: 'Estatísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'iconType',
              title: 'Tipo de Ícone',
              type: 'string',
              options: {
                list: [
                  {title: 'Troféu', value: 'award'},
                  {title: 'Usuários', value: 'users'},
                  {title: 'Localização', value: 'mapPin'},
                  {title: 'Troféu 2', value: 'trophy'},
                  {title: 'Estrela', value: 'star'},
                  {title: 'Coração', value: 'heart'},
                ],
              },
            }),
            defineField({
              name: 'value',
              title: 'Valor',
              type: 'string',
              description: 'Ex: 594+',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Ex: Seguidores',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
