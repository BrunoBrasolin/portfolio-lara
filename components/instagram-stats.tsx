"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, MessageCircle, TrendingUp, Eye, Calendar, Instagram } from "lucide-react"
import type { InstagramData, InstagramStat } from "@/lib/sanity"

interface InstagramStatsProps {
  data?: InstagramData | null
}

const iconMap = {
  users: Users,
  eye: Eye,
  messageCircle: MessageCircle,
  heart: Heart,
  trendingUp: TrendingUp,
}

// Fallback data when Sanity is not configured
const fallbackStats: InstagramStat[] = [
  { iconType: "users", label: "Seguidores", value: "594" },
  { iconType: "eye", label: "Visualizações", value: "50k+" },
  { iconType: "messageCircle", label: "Interações", value: "600+" },
]

const fallbackData: InstagramData = {
  sectionLabel: "Alcance do Instagram",
  title: "Instagram",
  description: "Métricas reais do engajamento do meu Instagram",
  stats: fallbackStats,
  lastUpdated: "01/26",
}

const chartColors = ["text-chart-1", "text-chart-2", "text-chart-3", "text-chart-4", "text-chart-5"]

export function InstagramStats({ data }: InstagramStatsProps) {
  const content = data || fallbackData
  const stats = content.stats || fallbackStats

  return (
    <section id="instagram" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{content.sectionLabel}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            {content.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {content.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.iconType] || Users
            const colorClass = chartColors[index % chartColors.length]
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <IconComponent className={`w-6 h-6 mx-auto mb-2 ${colorClass}`} />
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Last Updated Notice */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Calendar className="w-4 h-4 inline-block mr-1" />
          Última atualização: {content.lastUpdated}
        </p>
      </div>
    </section>
  )
}
