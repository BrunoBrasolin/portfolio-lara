import { Card, CardContent } from "@/components/ui/card"
import { urlFor, type SponsorsData, type Sponsor } from "@/lib/sanity"

interface SponsorsSectionProps {
  data?: SponsorsData | null
}

// Fallback sponsors when Sanity is not configured
const fallbackSponsors: Sponsor[] = [
  { name: "Maikai Surf Social", logo: null as unknown as Sponsor["logo"] },
  { name: "Motion Fit", logo: null as unknown as Sponsor["logo"] },
  { name: "Clínica de Fraturas Mongaguá", logo: null as unknown as Sponsor["logo"] },
  { name: "Essence Surf", logo: null as unknown as Sponsor["logo"] },
]

const fallbackLogos = [
  "maikai_surf_social.png",
  "motion_fit.png",
  "clinica_de_fraturas_mongagua.png",
  "essence_surf.png",
]

const fallbackData: SponsorsData = {
  sectionLabel: "Parcerias",
  title: "Patrocinadores e Apoiadores",
  description: "Orgulho de trabalhar com esse pessoal",
  sponsorList: fallbackSponsors,
}

export function SponsorsSection({ data }: SponsorsSectionProps) {
  const content = data || fallbackData
  const sponsors = content.sponsorList || fallbackSponsors

  const getLogoUrl = (sponsor: Sponsor, index: number) => {
    if (sponsor.logo) {
      return urlFor(sponsor.logo).url()
    }
    return fallbackLogos[index] || fallbackLogos[0]
  }

  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{content.sectionLabel}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{content.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor, index) => (
            <Card key={sponsor.name} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                <img
                  src={getLogoUrl(sponsor, index)}
                  alt={sponsor.name}
                  className="h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                />
                <p className="text-xs text-muted-foreground mt-3 text-center">{sponsor.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
