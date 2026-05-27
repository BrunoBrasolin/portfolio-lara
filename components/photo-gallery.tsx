"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { urlFor, type GalleryData, type GalleryPhoto } from "@/lib/sanity"

interface PhotoGalleryProps {
  data?: GalleryData | null
}

// Fallback photos when Sanity is not configured
const fallbackPhotos: GalleryPhoto[] = [
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
  { image: null as unknown as GalleryPhoto["image"], alt: "Lara Brazolin" },
]

const fallbackSrcs = [
  "lara_3.jpeg",
  "lara_4.jpeg",
  "lara_5.jpeg",
  "lara_6.jpeg",
  "lara_7.jpeg",
  "lara_8.jpeg",
  "lara_10.jpeg",
  "lara_11.jpeg",
  "lara_12.jpeg",
  "lara_13.jpeg",
  "lara_14.jpeg",
  "lara_15.jpeg",
]

const fallbackData: GalleryData = {
  sectionLabel: "Galeria",
  title: "Vida no mar",
  description: "Um pequeno recorte do meu dia a dia",
  photos: fallbackPhotos,
}

export function PhotoGallery({ data }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const content = data || fallbackData
  const photos = content.photos || fallbackPhotos

  const getImageUrl = (photo: GalleryPhoto, index: number) => {
    if (photo.image) {
      return urlFor(photo.image).url()
    }
    return fallbackSrcs[index] || fallbackSrcs[0]
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">{content.sectionLabel}</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{content.title}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {content.description}
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg group cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <img
                src={getImageUrl(photo, index)}
                alt={photo.alt || "Lara Brazolin"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-background hover:text-background/80 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-background hover:text-background/80 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[90vh] mx-4">
            <img
              src={getImageUrl(photos[currentIndex], currentIndex)}
              alt={photos[currentIndex].alt || "Lara Brazolin"}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-center text-background/80 mt-4">
              {currentIndex + 1} / {photos.length}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-background hover:text-background/80 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
