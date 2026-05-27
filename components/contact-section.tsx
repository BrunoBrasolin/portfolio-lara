import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, User, Download, ExternalLink, Instagram } from "lucide-react"
import type { ContactData, ContactMethod } from "@/lib/sanity"

interface ContactSectionProps {
  data?: ContactData | null
}

const iconMap = {
  mail: Mail,
  phone: Phone,
  instagram: Instagram,
  user: User,
}

// Fallback contact methods when Sanity is not configured
const fallbackContactMethods: ContactMethod[] = [
  { iconType: "mail", label: "Email", value: "email@email.com", href: "mailto:email@email.com" },
  { iconType: "phone", label: "Phone", value: "(13) 99603-6465", href: "tel:+5513996036465" },
  { iconType: "instagram", label: "Instagram", value: "larabrazolin_", href: "https://www.instagram.com/larabrazolin_/" },
]

const fallbackData: ContactData = {
  sectionLabel: "Vamos trabalhar juntos",
  title: "Faça uma parceria comigo",
  description: "Estou disposta a bla bla bla",
  mediaKitLabel: "Baixar Kit de Media",
  emailButtonLabel: "Enviar e-mail",
  emailAddress: "partnerships@mayasantos.com",
  contactMethods: fallbackContactMethods,
}

export function ContactSection({ data }: ContactSectionProps) {
  const content = data || fallbackData
  const contactMethods = content.contactMethods || fallbackContactMethods

  const mediaKitUrl = content.mediaKitFile?.asset?.url || "/media-kit.pdf"

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-foreground/80 font-medium tracking-widest uppercase text-sm mb-3">
            {content.sectionLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">{content.title}</h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" variant="secondary" className="min-w-[220px]" asChild>
            <a href={mediaKitUrl} download>
              <Download className="w-5 h-5 mr-2" />
              {content.mediaKitLabel}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[220px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <a href={`mailto:${content.emailAddress}`}>
              <Mail className="w-5 h-5 mr-2" />
              {content.emailButtonLabel}
            </a>
          </Button>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method) => {
            const IconComponent = iconMap[method.iconType] || Mail
            return (
              <Card key={method.label} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 text-primary-foreground mx-auto mb-4" />
                  <p className="text-sm text-primary-foreground/70 mb-1">{method.label}</p>
                  <a
                    href={method.href}
                    className="text-primary-foreground font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {method.value}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
