import { Instagram, Twitter, Youtube, Facebook } from "lucide-react"
import { urlFor, type FooterData, type FooterLink, type SocialLink } from "@/lib/sanity"

interface FooterProps {
  data?: FooterData | null
}

const socialIconMap = {
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  facebook: Facebook,
}

// Fallback footer links when Sanity is not configured
const fallbackFooterLinks: FooterLink[] = [
  { label: "Sobre", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Galeria", href: "#gallery" },
  { label: "Métricas", href: "#instagram" },
  { label: "Parceiros", href: "#sponsors" },
  { label: "Contato", href: "#contact" },
]

const fallbackSocialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://www.instagram.com/larabrazolin_/" },
  { platform: "youtube", url: "https://youtube.com" },
]

const fallbackData: FooterData = {
  brandName: "Lara Brazolin",
  brandDescription: "Surfista top.",
  footerLinks: fallbackFooterLinks,
  socialLinks: fallbackSocialLinks,
  developerName: "Gamidas",
  developerUrl: "https://leviathan.dev.br/",
  developerLogo: null as unknown as FooterData["developerLogo"],
}

export function Footer({ data }: FooterProps) {
  const content = data || fallbackData
  const footerLinks = content.footerLinks || fallbackFooterLinks

  const developerLogoUrl = content.developerLogo ? urlFor(content.developerLogo).url() : "gamidas.png"

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-4">{content.brandName}</p>
            <p className="text-background/70 text-sm leading-relaxed">
              {content.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-medium mb-4">Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} {content.brandName}. All rights reserved.
          </p>

          <a
            href={content.developerUrl}
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Desenvolvido por</span>
            <img
              src={developerLogoUrl}
              alt={content.developerName}
              loading="lazy"
              className="h-10 w-auto object-contain opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
