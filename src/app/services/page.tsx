import Link from "next/link"
import { ArrowRight, DraftingCompass, HardHat, Home as HomeIcon, Zap, Droplets } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Nur Design Construction Consultancy",
  description: "Explore our comprehensive engineering, architectural, and construction consultancy services.",
}

const services = [
  { 
    id: "civil",
    title: "Civil Works & Construction", 
    icon: HardHat, 
    short: "Foundations, structural works, and road developments built to last.",
    desc: "From initial site surveys to the final pour of concrete, our civil engineering team ensures the structural integrity of your project. We handle earthworks, deep foundations, high-rise structural frameworks, and municipal infrastructure.",
    image: "https://images.unsplash.com/photo-1541888081622-15cb2a061414?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "sanitation",
    title: "Sanitation & Plumbing", 
    icon: Droplets, 
    short: "Modern drainage, water supply, and complete plumbing solutions.",
    desc: "We design and implement highly efficient plumbing and sanitation systems. Whether it's a multi-story commercial building or an industrial complex, we ensure safe water delivery and environmentally compliant waste management.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "electrical",
    title: "Electrical Installation", 
    icon: Zap, 
    short: "Safe, efficient, and scalable electrical systems for any project.",
    desc: "Our electrical engineers design power distribution grids, lighting layouts, and integrated low-voltage systems. We prioritize energy efficiency, safety compliance, and future-proof scalability for smart building integration.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "architectural",
    title: "Architectural Design", 
    icon: DraftingCompass, 
    short: "Innovative and sustainable architectural planning and design.",
    desc: "Our architectural division turns visions into buildable blueprints. We specialize in modern aesthetics fused with functional space planning, ensuring every structure is as beautiful as it is practical.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "interior",
    title: "Interior Design", 
    icon: HomeIcon, 
    short: "Functional and aesthetically pleasing interior spaces.",
    desc: "We don't just build shells; we create environments. Our interior design team selects materials, fixtures, and layouts that elevate the user experience, from luxury residential to corporate office spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            End-to-end consultancy and execution across every discipline of construction and design.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-lg text-accent mb-2">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-xl font-medium text-muted-foreground">{service.short}</p>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mt-4 text-muted-foreground">
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-accent" /> Initial Feasibility & Planning</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-accent" /> Detailed Design & Blueprinting</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-accent" /> Project Execution & Supervision</li>
                  </ul>
                  <div className="pt-4">
                    <Link href={`/quote?service=${service.id}`} className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                      Request a Quote for {service.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

