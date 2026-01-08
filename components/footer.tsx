import { Instagram, Twitter, Youtube, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.comlarabrazolin_/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
]

const footerLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Galeria", href: "#gallery" },
  { label: "Métricas", href: "#instagram" },
  { label: "Parceiros", href: "#sponsors" },
  { label: "Contato", href: "#contact" }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-4">Lara Brazolin</p>
            <p className="text-background/70 text-sm leading-relaxed">
              Surfista amadora mas top.
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
            © {new Date().getFullYear()} Lara Brazolin. All rights reserved.
          </p>

          <a href="https://leviathan.dev.br/" className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition" target="_blank" rel="noopener noreferrer">
            <span>Desenvolvido por</span>
            <img src="/gamidas.png" alt="Gamidas" loading="lazy" className="h-10 w-auto object-contain opacity-80" />
          </a>
        </div>

      </div>
    </footer>
  )
}
