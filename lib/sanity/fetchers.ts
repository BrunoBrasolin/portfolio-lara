import { client } from "./client"
import {
  heroQuery,
  aboutQuery,
  galleryQuery,
  videosQuery,
  instagramQuery,
  sponsorsQuery,
  contactQuery,
  footerQuery,
  navigationQuery,
  siteSettingsQuery,
} from "./queries"
import type {
  HeroData,
  AboutData,
  GalleryData,
  VideosData,
  InstagramData,
  SponsorsData,
  ContactData,
  FooterData,
  NavigationData,
  SiteSettingsData,
} from "./types"

export async function getHero(): Promise<HeroData | null> {
  return client.fetch(heroQuery)
}

export async function getAbout(): Promise<AboutData | null> {
  return client.fetch(aboutQuery)
}

export async function getGallery(): Promise<GalleryData | null> {
  return client.fetch(galleryQuery)
}

export async function getVideos(): Promise<VideosData | null> {
  return client.fetch(videosQuery)
}

export async function getInstagramStats(): Promise<InstagramData | null> {
  return client.fetch(instagramQuery)
}

export async function getSponsors(): Promise<SponsorsData | null> {
  return client.fetch(sponsorsQuery)
}

export async function getContact(): Promise<ContactData | null> {
  return client.fetch(contactQuery)
}

export async function getFooter(): Promise<FooterData | null> {
  return client.fetch(footerQuery)
}

export async function getNavigation(): Promise<NavigationData | null> {
  return client.fetch(navigationQuery)
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  return client.fetch(siteSettingsQuery)
}

export async function getAllPageData() {
  const [hero, about, gallery, videos, instagram, sponsors, contact, footer, navigation] = await Promise.all([
    getHero(),
    getAbout(),
    getGallery(),
    getVideos(),
    getInstagramStats(),
    getSponsors(),
    getContact(),
    getFooter(),
    getNavigation(),
  ])

  return {
    hero,
    about,
    gallery,
    videos,
    instagram,
    sponsors,
    contact,
    footer,
    navigation,
  }
}
