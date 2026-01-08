import { MapPin, Award, Users } from "lucide-react"

const stats = [
  { icon: Award, value: "1", label: "Campeonato ganho" },
  { icon: Users, value: "594+", label: "Seguidores" },
  { icon: MapPin, value: "3", label: "Idas para Saquarema" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img src="lara_2.jpeg" alt="Lara Brazolin portrait" className="w-full h-full object-cover" />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden sm:block">
              <p className="font-serif text-3xl font-bold">15</p>
              <p className="text-sm opacity-90">Years Pro</p>
            </div> */}
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Sobre mim</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Nascida para surfar
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Growing up on the shores of California, I discovered my passion for surfing at age 6. What started as a
                childhood obsession has become a professional career spanning over 15 years of international competition
                and brand partnerships.
              </p>
              <p>
                As a World Surf League competitor and environmental advocate, I combine athletic performance with
                meaningful partnerships that align with my values of sustainability, wellness, and ocean conservation.
              </p>
              <p>
                My audience trusts my authentic recommendations because I only partner with brands I genuinely believe
                in. Let&apos;s create something meaningful together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
