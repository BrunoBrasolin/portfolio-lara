import { Button } from "@/components/ui/button"
import { Instagram, ChevronDown } from "lucide-react"
import { urlFor, type HeroData } from "@/lib/sanity"

interface HeroSectionProps {
  data?: HeroData | null
}

// Fallback data when Sanity is not configured
const fallbackData: HeroData = {
  backgroundImage: null as unknown as HeroData["backgroundImage"],
  subtitle: "Surfista Amadora",
  name: "Lara Brazolin",
  description: "Amante do surf",
  ctaText: "Entre em contato",
  ctaLink: "#contact",
  instagramHandle: "@larabrazolin_",
  instagramUrl: "https://www.instagram.com/larabrazolin_/",
}

export function HeroSection({ data }: HeroSectionProps) {
  const content = data || fallbackData
  const backgroundImageUrl = content.backgroundImage ? urlFor(content.backgroundImage).url() : "lara_1.jpeg"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImageUrl}
          alt={`${content.name} surfing a large wave`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-foreground/90 text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
            {content.subtitle}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            {content.name}
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[200px]" asChild>
              <a href={content.ctaLink}>{content.ctaText}</a>
            </Button>

            <Button size="lg" variant="outline" className="min-w-[200px] border-primary text-primary hover:bg-primary/10" asChild>
              <a href={content.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                {content.instagramHandle}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce" aria-label="Scroll to About section">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
