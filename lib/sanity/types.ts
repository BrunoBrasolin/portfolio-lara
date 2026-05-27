import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface HeroData {
  backgroundImage: SanityImageSource
  subtitle: string
  name: string
  description: string
  ctaText: string
  ctaLink: string
  instagramHandle: string
  instagramUrl: string
}

export interface AboutStat {
  iconType: "award" | "users" | "mapPin" | "trophy" | "star" | "heart"
  value: string
  label: string
}

export interface AboutData {
  image: SanityImageSource
  sectionLabel: string
  title: string
  paragraphs: string[]
  stats: AboutStat[]
}

export interface GalleryPhoto {
  image: SanityImageSource
  alt: string
}

export interface GalleryData {
  sectionLabel: string
  title: string
  description: string
  photos: GalleryPhoto[]
}

export interface VideoItem {
  _key: string
  title: string
  thumbnail: SanityImageSource
  embedUrl: string
  platform: string
}

export interface VideosData {
  sectionLabel: string
  title: string
  description: string
  videoList: VideoItem[]
}

export interface InstagramStat {
  iconType: "users" | "eye" | "messageCircle" | "heart" | "trendingUp"
  label: string
  value: string
}

export interface InstagramData {
  sectionLabel: string
  title: string
  description: string
  stats: InstagramStat[]
  lastUpdated: string
}

export interface Sponsor {
  name: string
  logo: SanityImageSource
}

export interface SponsorsData {
  sectionLabel: string
  title: string
  description: string
  sponsorList: Sponsor[]
}

export interface ContactMethod {
  iconType: "mail" | "phone" | "instagram" | "user"
  label: string
  value: string
  href: string
}

export interface ContactData {
  sectionLabel: string
  title: string
  description: string
  mediaKitLabel: string
  mediaKitFile?: {
    asset: {
      url: string
    }
  }
  emailButtonLabel: string
  emailAddress: string
  contactMethods: ContactMethod[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: "instagram" | "youtube" | "twitter" | "facebook"
  url: string
}

export interface FooterData {
  brandName: string
  brandDescription: string
  footerLinks: FooterLink[]
  socialLinks: SocialLink[]
  developerName: string
  developerUrl: string
  developerLogo: SanityImageSource
}

export interface NavLink {
  label: string
  href: string
}

export interface NavigationData {
  brandName: string
  navLinks: NavLink[]
  ctaText: string
  ctaLink: string
}

export interface SiteSettingsData {
  siteName: string
  siteDescription: string
  ogImage: SanityImageSource
}
