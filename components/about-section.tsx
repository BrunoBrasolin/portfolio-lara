import { MapPin, Award, Users, Trophy, Star, Heart } from "lucide-react"
import { urlFor, type AboutData, type AboutStat } from "@/lib/sanity"

interface AboutSectionProps {
  data?: AboutData | null
}

const iconMap = {
  award: Award,
  users: Users,
  mapPin: MapPin,
  trophy: Trophy,
  star: Star,
  heart: Heart,
}

// Fallback data when Sanity is not configured
const fallbackStats: AboutStat[] = [
  { iconType: "award", value: "1", label: "Campeonato ganho" },
  { iconType: "users", value: "594+", label: "Seguidores" },
  { iconType: "mapPin", value: "3", label: "Idas para Saquarema" },
]

const fallbackData: AboutData = {
  image: null as unknown as AboutData["image"],
  sectionLabel: "Sobre mim",
  title: "Nascida para surfar",
  paragraphs: [
    "Growing up on the shores of California, I discovered my passion for surfing at age 6. What started as a childhood obsession has become a professional career spanning over 15 years of international competition and brand partnerships.",
    "As a World Surf League competitor and environmental advocate, I combine athletic performance with meaningful partnerships that align with my values of sustainability, wellness, and ocean conservation.",
    "My audience trusts my authentic recommendations because I only partner with brands I genuinely believe in. Let's create something meaningful together.",
  ],
  stats: fallbackStats,
}

export function AboutSection({ data }: AboutSectionProps) {
  const content = data || fallbackData
  const imageUrl = content.image ? urlFor(content.image).url() : "lara_2.jpeg"

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img src={imageUrl} alt="Lara Brazolin portrait" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{content.sectionLabel}</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {content.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {content.stats.map((stat) => {
                const IconComponent = iconMap[stat.iconType] || Award
                return (
                  <div key={stat.label} className="text-center">
                    <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
