"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, MessageCircle, TrendingUp, Eye, Calendar, Instagram, EyeIcon } from "lucide-react"

interface InstagramStats {
  followers: number
  avgLikes: number
  avgComments: number
  engagementRate: number
  monthlyReach: number
  monthlyImpressions: number
  lastUpdated: string
}

interface RecentPost {
  id: string
  imageUrl: string
  likes: number
  comments: number
}

const defaultStats: InstagramStats = {
  followers: 856000,
  avgLikes: 42500,
  avgComments: 1850,
  engagementRate: 5.2,
  monthlyReach: 2400000,
  monthlyImpressions: 4800000,
  lastUpdated: "2026-01-05T14:30:00Z",
}

const defaultRecentPosts: RecentPost[] = [
  { id: "1", imageUrl: "/surfer-woman-ocean-wave-action-instagram.jpg", likes: 45200, comments: 1920 },
  { id: "2", imageUrl: "/beach-sunset-lifestyle-surf-instagram.jpg", likes: 38900, comments: 1650 },
  { id: "3", imageUrl: "/placeholder.svg?height=300&width=300", likes: 41300, comments: 1780 },
  { id: "4", imageUrl: "/placeholder.svg?height=300&width=300", likes: 52100, comments: 2340 },
  { id: "5", imageUrl: "/placeholder.svg?height=300&width=300", likes: 39800, comments: 1520 },
  { id: "6", imageUrl: "/placeholder.svg?height=300&width=300", likes: 47600, comments: 2100 },
]

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function InstagramStats() {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>(defaultRecentPosts)


  const statCards = [
    { icon: Users, label: "Seguidores", value: 594, color: "text-chart-1" },
    { icon: Eye, label: "Visualizações", value: "50k+", color: "text-chart-2" },
    { icon: MessageCircle, label: "Interações", value: "600+", color: "text-chart-3" }
  ]

  return (
    <section id="instagram" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Alcance do Instagram</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            Instagram
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Métricas reais do engajamento do meu Instagram
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {statCards.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-4 sm:p-6">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts Grid */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {recentPosts.map((post) => (
                <div key={post.id} className="relative aspect-square group rounded-lg overflow-hidden">
                  <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt="Instagram post"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-background text-xs">
                      <div className="flex items-center gap-1 mb-1">
                        <Heart className="w-3 h-3" />
                        <span>{formatNumber(post.likes)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{formatNumber(post.comments)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Last Updated Notice */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Calendar className="w-4 h-4 inline-block mr-1" />
          Última atualização: 01/26
        </p>
      </div>
    </section>
  )
}
