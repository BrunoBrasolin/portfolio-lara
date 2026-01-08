import { Trophy, Medal, Star, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    year: "2025",
    event: "Pipeline Masters",
    result: "1st Place",
    description: "Conquered the legendary Banzai Pipeline with a perfect 10-point ride in the finals.",
    icon: Trophy,
  },
  {
    year: "2024",
    event: "WSL Championship Tour",
    result: "3rd Overall",
    description: "Career-best season finish on the World Surf League Championship Tour.",
    icon: Medal,
  },
  {
    year: "2024",
    event: "Roxy Pro Gold Coast",
    result: "2nd Place",
    description: "Battled through challenging conditions to reach the finals in Australia.",
    icon: Medal,
  },
  {
    year: "2023",
    event: "Tahiti Pro",
    result: "1st Place",
    description: "First-ever win at the iconic Teahupo'o break in French Polynesia.",
    icon: Trophy,
  },
  {
    year: "2023",
    event: "US Open of Surfing",
    result: "1st Place",
    description: "Hometown victory in front of thousands of fans in Huntington Beach.",
    icon: Trophy,
  },
  {
    year: "2022",
    event: "ISA World Games",
    result: "Gold Medal",
    description: "Represented Team USA and brought home gold in team surfing event.",
    icon: Award,
  },
  {
    year: "2021",
    event: "WSL Rookie of the Year",
    result: "Winner",
    description: "Named top first-year competitor on the Championship Tour.",
    icon: Star,
  },
  {
    year: "2020",
    event: "Qualifying Series Champion",
    result: "1st Place",
    description: "Dominated the QS circuit to earn Championship Tour qualification.",
    icon: Trophy,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Conquistas</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Career Highlights</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A decade of dedication, countless waves, and memorable victories.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-6 md:space-y-0">
            {achievements.map((achievement, index) => (
              <div
                key={`${achievement.year}-${achievement.event}`}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-primary">{achievement.year}</span>
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                              {achievement.result}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">{achievement.event}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
