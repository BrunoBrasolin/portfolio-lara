import { SchemaTypeDefinition } from 'sanity'
import { aboutType } from './aboutType'
import { contactType } from './contactType'
import { footerType } from './footerType'
import { galleryType } from './galleryType'
import { heroType } from './heroType'
import { instagramStatsType } from './instagramStatsType'
import { navigationType } from './navigationType'
import { sponsorsType } from './sponsorsType'
import { videosType } from './videosType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    aboutType,
    galleryType,
    videosType,
    instagramStatsType,
    sponsorsType,
    contactType,
    footerType,
    navigationType
  ]
}