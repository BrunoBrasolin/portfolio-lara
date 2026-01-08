"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const videos = [
  {
    id: "1",
    title: "Vídeo Lara Brazolin 1",
    thumbnail: "/lara_11.jpeg",
    embedUrl: "https://www.youtube.com/embed/Kz7L71cJmos",
    platform: "YouTube",
  },
  {
    id: "2",
    title: "Vídeo Lara Brazolin 2",
    thumbnail: "/lara_2.jpeg",
    embedUrl: "https://www.youtube.com/embed/r1hGW88gCGU",
    platform: "YouTube",
  },
  {
    id: "3",
    title: "Vídeo Lara Brazolin 3",
    thumbnail: "/lara_12.jpeg",
    embedUrl: "https://www.youtube.com/embed/hk6u1iLHQFM",
    platform: "YouTube",
  },
  {
    id: "4",
    title: "Vídeo Lara Brazolin 4",
    thumbnail: "/lara_15.jpeg",
    embedUrl: "https://www.youtube.com/embed/QpS0coC8kk4",
    platform: "YouTube",
  },
  {
    id: "5",
    title: "Vídeo Lara Brazolin 5",
    thumbnail: "/lara_16.jpeg",
    embedUrl: "https://www.youtube.com/embed/1uONT_ZmisA",
    platform: "YouTube",
  },
  {
    id: "6",
    title: "Vídeo Lara Brazolin 6",
    thumbnail: "/lara_17.jpeg",
    embedUrl: "https://www.youtube.com/embed/Rfo28N4q8uA",
    platform: "YouTube",
  },
  {
    id: "7",
    title: "Vídeo Lara Brazolin 7",
    thumbnail: "/lara_6.jpeg",
    embedUrl: "https://www.youtube.com/embed/Mg44l4VGMKM",
    platform: "YouTube",
  },
  {
    id: "8",
    title: "Vídeo Lara Brazolin 8",
    thumbnail: "/lara_9.jpeg",
    embedUrl: "https://www.youtube.com/embed/U5Wii0wd8OQ",
    platform: "YouTube",
  },
]

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="videos" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Videos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Watch Me Ride</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Competition highlights, travel vlogs, and behind-the-scenes content.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
                  {video.platform}
                </span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-background hover:text-background/80 z-10"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={videos.find((v) => v.id === activeVideo)?.embedUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videos.find((v) => v.id === activeVideo)?.title}
            />
          </div>
        </div>
      )}
    </section>
  )
}
