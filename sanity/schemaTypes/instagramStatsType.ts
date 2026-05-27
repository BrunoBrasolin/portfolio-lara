import {defineField, defineType} from 'sanity'

export const instagramStatsType = defineType({
  name: 'instagramStats',
  title: 'Métricas do Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Métricas',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Presença Digital',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
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
                  {title: 'Usuários', value: 'users'},
                  {title: 'Visualizações', value: 'eye'},
                  {title: 'Comentários', value: 'messageCircle'},
                  {title: 'Curtidas', value: 'heart'},
                  {title: 'Crescimento', value: 'trendingUp'},
                ],
              },
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Ex: Seguidores',
            }),
            defineField({
              name: 'value',
              title: 'Valor',
              type: 'string',
              description: 'Ex: 10.5K',
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
    defineField({
      name: 'lastUpdated',
      title: 'Última Atualização',
      type: 'string',
      description: 'Ex: 01/26',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lastUpdated',
    },
  },
})
