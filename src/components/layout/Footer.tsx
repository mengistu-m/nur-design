import Link from "next/link"
import { HardHat, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HardHat className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold tracking-tight">Nur Design</span>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Multidisciplinary construction consultancy offering top-tier civil works, engineering, and architectural services.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-accent font-medium text-sm">
                Facebook
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent font-medium text-sm">
                Twitter
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent font-medium text-sm">
                Instagram
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent font-medium text-sm">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Projects Portfolio</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/services#civil" className="hover:text-white transition-colors">Civil Works</Link></li>
              <li><Link href="/services#sanitation" className="hover:text-white transition-colors">Sanitation & Plumbing</Link></li>
              <li><Link href="/services#electrical" className="hover:text-white transition-colors">Electrical Installation</Link></li>
              <li><Link href="/services#architectural" className="hover:text-white transition-colors">Architectural Design</Link></li>
              <li><Link href="/services#interior" className="hover:text-white transition-colors">Interior Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>123 Engineering Blvd, Suite 400<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>info@Nur Design.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Nur Design Construction Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

