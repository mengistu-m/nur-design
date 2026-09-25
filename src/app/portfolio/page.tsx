"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

const projects = [
  { id: 1, title: "Skyline Tower", category: "Commercial", location: "Metropolis, NY", year: "2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Eco Residence", category: "Residential", location: "Austin, TX", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "City Mall", category: "Commercial", location: "Miami, FL", year: "2023", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Metro Bridge", category: "Infrastructure", location: "Seattle, WA", year: "2022", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "State University Library", category: "Institutional", location: "Boston, MA", year: "2024", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Modern Villa Interior", category: "Residential", location: "Los Angeles, CA", year: "2025", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
]

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Institutional"]

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of our capabilities across various sectors of construction and design.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background min-h-[600px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-accent text-white shadow-md" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-shadow cursor-pointer h-[350px]"
                >
                  <img src={project.image} alt={project.title} className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {project.location}</span>
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

