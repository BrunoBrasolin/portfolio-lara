import { Card, CardContent } from "@/components/ui/card"

const sponsors = [
  {
    name: "Maikai Surf Social",
    logo: "maikai_surf_social.png"
  },
  {
    name: "Motion Fit",
    logo: "motion_fit.png"
  },
  {
    name: "Clínica de Fraturas Mongaguá",
    logo: "clinica_de_fraturas_mongagua.png"
  },
  {
    name: "Essence Surf",
    logo: "essence_surf.png"
  }
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Parcerias</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Patrocinadores e Apioadores</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Orgulho de trabalhar com esse pessoal
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.name} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-2 flex flex-col items-center justify-center h-full">
                <img src={sponsor.logo} alt={sponsor.name} className="h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                <p className="text-xs text-muted-foreground mt-3 text-center">{sponsor.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
