"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { urlFor, type VideosData, type VideoItem } from "@/lib/sanity"

interface VideosSectionProps {
  data?: VideosData | null
}

// Fallback videos when Sanity is not configured
const fallbackVideos: VideoItem[] = [
  { _key: "1", title: "Vídeo Lara Brazolin 1", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/Kz7L71cJmos", platform: "YouTube" },
  { _key: "2", title: "Vídeo Lara Brazolin 2", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/r1hGW88gCGU", platform: "YouTube" },
  { _key: "3", title: "Vídeo Lara Brazolin 3", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/hk6u1iLHQFM", platform: "YouTube" },
  { _key: "4", title: "Vídeo Lara Brazolin 4", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/QpS0coC8kk4", platform: "YouTube" },
  { _key: "5", title: "Vídeo Lara Brazolin 5", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/1uONT_ZmisA", platform: "YouTube" },
  { _key: "6", title: "Vídeo Lara Brazolin 6", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/Rfo28N4q8uA", platform: "YouTube" },
  { _key: "7", title: "Vídeo Lara Brazolin 7", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/Mg44l4VGMKM", platform: "YouTube" },
  { _key: "8", title: "Vídeo Lara Brazolin 8", thumbnail: null as unknown as VideoItem["thumbnail"], embedUrl: "https://www.youtube.com/embed/U5Wii0wd8OQ", platform: "YouTube" },
]

const fallbackThumbnails = [
  "lara_11.jpeg",
  "lara_2.jpeg",
  "lara_12.jpeg",
  "lara_15.jpeg",
  "lara_16.jpeg",
  "lara_17.jpeg",
  "lara_6.jpeg",
  "lara_9.jpeg",
]

const fallbackData: VideosData = {
  sectionLabel: "Videos",
  title: "Watch Me Ride",
  description: "Competition highlights, travel vlogs, and behind-the-scenes content.",
  videoList: fallbackVideos,
}

export function VideosSection({ data }: VideosSectionProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const content = data || fallbackData
  const videos = content.videoList || fallbackVideos

  const getThumbnailUrl = (video: VideoItem, index: number) => {
    if (video.thumbnail) {
      return urlFor(video.thumbnail).url()
    }
    return fallbackThumbnails[index] || fallbackThumbnails[0]
  }

  return (
    <section id="videos" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{content.sectionLabel}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{content.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {content.description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={video._key} className="overflow-hidden group cursor-pointer pt-0" onClick={() => setActiveVideo(video._key)}>
              <div className="relative aspect-video">
                <img
                  src={getThumbnailUrl(video, index)}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
              src={videos.find((v) => v._key === activeVideo)?.embedUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videos.find((v) => v._key === activeVideo)?.title}
            />
          </div>
        </div>
      )}
    </section>
  )
}
