import { groq } from "next-sanity"

// Hero Section
export const heroQuery = groq`*[_type == "hero"][0]{
  backgroundImage,
  subtitle,
  name,
  description,
  ctaText,
  ctaLink,
  instagramHandle,
  instagramUrl
}`

// About Section
export const aboutQuery = groq`*[_type == "about"][0]{
  image,
  sectionLabel,
  title,
  paragraphs,
  stats[]{
    iconType,
    value,
    label
  }
}`

// Gallery
export const galleryQuery = groq`*[_type == "gallery"][0]{
  sectionLabel,
  title,
  description,
  photos[]{
    image,
    alt
  }
}`

// Videos
export const videosQuery = groq`*[_type == "videos"][0]{
  sectionLabel,
  title,
  description,
  videoList[]{
    _key,
    title,
    thumbnail,
    embedUrl,
    platform
  }
}`

// Instagram Stats
export const instagramQuery = groq`*[_type == "instagramStats"][0]{
  sectionLabel,
  title,
  description,
  stats[]{
    iconType,
    label,
    value
  },
  lastUpdated
}`

// Sponsors
export const sponsorsQuery = groq`*[_type == "sponsors"][0]{
  sectionLabel,
  title,
  description,
  sponsorList[]{
    name,
    logo
  }
}`

// Contact
export const contactQuery = groq`*[_type == "contact"][0]{
  sectionLabel,
  title,
  description,
  mediaKitLabel,
  mediaKitFile,
  emailButtonLabel,
  emailAddress,
  contactMethods[]{
    iconType,
    label,
    value,
    href
  }
}`

// Footer
export const footerQuery = groq`*[_type == "footer"][0]{
  brandName,
  brandDescription,
  footerLinks[]{
    label,
    href
  },
  socialLinks[]{
    platform,
    url
  },
  developerName,
  developerUrl,
  developerLogo
}`

// Navigation
export const navigationQuery = groq`*[_type == "navigation"][0]{
  brandName,
  navLinks[]{
    label,
    href
  },
  ctaText,
  ctaLink
}`

// Site Settings (SEO)
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteName,
  siteDescription,
  ogImage
}`
