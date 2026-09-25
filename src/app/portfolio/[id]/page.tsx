import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react"

// Reuse the same projects list for simplicity in this demo
const projects = [
  { id: 0, title: "Skyline Tower", category: "Commercial", location: "Metropolis, NY", year: "2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", desc: "A 40-story commercial tower featuring sustainable materials and state-of-the-art office spaces." },
  { id: 1, title: "Eco Residence", category: "Residential", location: "Austin, TX", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", desc: "An eco-friendly residential complex designed with energy-efficient systems and modern luxury." },
  { id: 2, title: "City Mall", category: "Commercial", location: "Miami, FL", year: "2023", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1200&auto=format&fit=crop", desc: "A sprawling retail center offering high-end shopping and dining experiences." },
  { id: 3, title: "Metro Bridge", category: "Infrastructure", location: "Seattle, WA", year: "2022", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop", desc: "A crucial infrastructure project improving transportation and connectivity in the metro area." },
  { id: 4, title: "State University Library", category: "Institutional", location: "Boston, MA", year: "2024", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", desc: "A modern institutional building fostering education and collaborative learning." },
  { id: 5, title: "Modern Villa Interior", category: "Residential", location: "Los Angeles, CA", year: "2025", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop", desc: "High-end interior design and execution for a luxury private villa." },
]

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const projectId = parseInt(resolvedParams.id, 10)
  const project = projects.find(p => p.id === projectId) || projects[0]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      
      {/* Hero Image */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
          <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
          </Link>
          <span className="text-accent font-bold uppercase tracking-wider block mb-2">{project.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center"><MapPin className="h-5 w-5 mr-2 text-accent" /> {project.location}</span>
            <span className="flex items-center"><Calendar className="h-5 w-5 mr-2 text-accent" /> {project.year}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.desc} This project showcases Nur Design's commitment to delivering top-tier engineering and construction services. From initial planning to final execution, our team ensured every detail was meticulously crafted to meet the highest standards of safety, aesthetics, and functionality.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span>Delivered on time and within the allocated budget despite complex logistical challenges.</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span>Implemented advanced sustainable practices, reducing the environmental footprint by 25%.</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <span>Achieved zero lost-time incidents during the entire construction phase.</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-xl h-fit">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Fact Sheet</h3>
              <ul className="space-y-4">
                <li className="flex flex-col border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Client</span>
                  <span className="font-bold text-foreground">Confidential</span>
                </li>
                <li className="flex flex-col border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="font-bold text-foreground">{project.location}</span>
                </li>
                <li className="flex flex-col border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Completion Date</span>
                  <span className="font-bold text-foreground">{project.year}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Services Provided</span>
                  <span className="font-bold text-foreground">General Contracting, Design-Build</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Interested in starting a similar project?</p>
                <Link href="/quote" className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-md font-bold hover:bg-primary/90 transition-colors">
                  Request a Quote
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
