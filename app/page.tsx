import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AchievementsSection } from "@/components/achievements-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideosSection } from "@/components/videos-section"
import { InstagramStats } from "@/components/instagram-stats"
import { SponsorsSection } from "@/components/sponsors-section"
import { PressSection } from "@/components/press-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getAllPageData } from "@/lib/sanity"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const data = await getAllPageData()

  return (
    <main>
      <Navigation data={data.navigation} />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      {/* <AchievementsSection /> */}
      <PhotoGallery data={data.gallery} />
      <VideosSection data={data.videos} />
      <InstagramStats data={data.instagram} />
      <SponsorsSection data={data.sponsors} />
      {/* <PressSection /> */}
      <ContactSection data={data.contact} />
      <Footer data={data.footer} />
    </main>
  )
}
