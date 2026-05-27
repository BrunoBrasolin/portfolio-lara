import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contato',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label da Seção',
      type: 'string',
      description: 'Ex: Contato',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ex: Vamos Conversar?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mediaKitLabel',
      title: 'Texto do Botão Media Kit',
      type: 'string',
      description: 'Ex: Baixar Media Kit',
    }),
    defineField({
      name: 'mediaKitFile',
      title: 'Arquivo Media Kit (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'emailButtonLabel',
      title: 'Texto do Botão de Email',
      type: 'string',
      description: 'Ex: Enviar Email',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Endereço de Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'contactMethods',
      title: 'Métodos de Contato',
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
                  {title: 'Email', value: 'mail'},
                  {title: 'Telefone', value: 'phone'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Usuário', value: 'user'},
                ],
              },
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Ex: Email',
            }),
            defineField({
              name: 'value',
              title: 'Valor',
              type: 'string',
              description: 'Ex: contato@lara.com',
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'Ex: mailto:contato@lara.com',
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
    },
  },
})
