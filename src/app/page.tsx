"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight, DraftingCompass, HardHat, Home as HomeIcon, Zap, Droplets, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { title: "Civil Works", icon: HardHat, desc: "Foundations, structural works, and road developments built to last." },
  { title: "Sanitation & Plumbing", icon: Droplets, desc: "Modern drainage, water supply, and complete plumbing solutions." },
  { title: "Electrical Installation", icon: Zap, desc: "Safe, efficient, and scalable electrical systems for any project." },
  { title: "Architectural Design", icon: DraftingCompass, desc: "Innovative and sustainable architectural planning and design." },
  { title: "Interior Design", icon: HomeIcon, desc: "Functional and aesthetically pleasing interior spaces." },
]

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "300+" },
  { label: "Clients Served", value: "150+" },
  { label: "Industry Awards", value: "12" },
]

const portfolio = [
  { title: "Skyline Tower", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
  { title: "Eco Residence", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { title: "City Mall", category: "Commercial", image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop" },
  { title: "Metro Bridge", category: "Infrastructure", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
            alt="Construction Site" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Building the Future <br/>
            <span className="text-accent">With Precision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Multidisciplinary construction and engineering consultancy delivering excellence from design to execution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/quote" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-medium text-white shadow transition-colors hover:bg-accent/90"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 text-base font-medium text-white shadow transition-colors hover:bg-white/20"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-accent mb-2">{stat.value}</span>
                <span className="text-sm uppercase tracking-wider text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive engineering and design solutions tailored to your project's unique requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">A showcase of our most recent and impactful developments across various sectors.</p>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center text-primary font-medium hover:underline">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-accent font-medium mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <Link href={`/portfolio/${i}`} className="inline-flex items-center text-white/80 hover:text-white">
                    View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link href="/portfolio" className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-base font-medium text-white shadow">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm text-left relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/40" />
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-bold text-lg mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <span className="text-sm text-white/60">Real Estate Developer</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Nur Design delivered exceptional quality on our latest commercial project. Their attention to detail and ability to stay within budget was truly impressive."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <HardHat className="h-96 w-96 text-white" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation. Our team of experts is ready to bring your vision to life.
          </p>
          <Link 
            href="/quote" 
            className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 py-3 text-lg font-bold text-accent shadow-lg transition-transform hover:scale-105"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

