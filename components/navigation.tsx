"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Galeria", href: "#gallery" },
  { label: "Métricas", href: "#instagram" },
  { label: "Parceiros", href: "#sponsors" },
  { label: "Contato", href: "#contact" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent",)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className={cn("font-serif text-xl lg:text-2xl font-bold tracking-tight text-foreground", isScrolled ? "text-black" : "text-white",)}>
            Lara Brazolin
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Entre em contato</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={cn("lg:hidden p-2 text-foreground", isScrolled ? "text-black" : "text-white",)} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block py-3 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Entre em contato
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
