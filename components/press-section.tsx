import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pressItems = [
  {
    publication: "Surfer Magazine",
    title: "Lara Brazolin: The Future of Women's Surfing",
    date: "December 2025",
    url: "#",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    publication: "ESPN",
    title: "Rising Stars: Athletes to Watch in 2026",
    date: "November 2025",
    url: "#",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    publication: "Forbes",
    title: "How This Pro Surfer Built a Social Media Empire",
    date: "October 2025",
    url: "#",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    publication: "Outside Magazine",
    title: "Ocean Conservation: Athletes Taking Action",
    date: "September 2025",
    url: "#",
    logo: "/placeholder.svg?height=40&width=120",
  },
]

export function PressSection() {
  return (
    <section id="press" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">In The Media</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Press Coverage</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Featured in leading sports and lifestyle publications worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pressItems.map((item) => (
            <Card key={item.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-primary font-medium mb-1">{item.publication}</p>
                    <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm"
                      >
                        Read
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
