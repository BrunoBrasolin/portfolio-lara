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

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <AchievementsSection /> */}
      <PhotoGallery />
      <VideosSection />
      <InstagramStats />
      <SponsorsSection />
      {/* <PressSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
