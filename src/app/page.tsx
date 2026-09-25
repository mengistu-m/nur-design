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
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
            alt="Construction Site" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/40 text-accent font-medium text-sm mb-6 uppercase tracking-widest">
              Premium Engineering Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
              Building the Future <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">With Precision</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Nur Design is a multidisciplinary construction and engineering consultancy delivering architectural brilliance and structural excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/quote" 
                className="group relative inline-flex h-14 items-center justify-center rounded-lg bg-accent px-8 py-3 text-base font-bold text-white shadow-xl shadow-accent/20 transition-all hover:bg-accent/90 hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex h-14 items-center justify-center rounded-lg bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-white/10 hover:border-white/20"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-16 relative z-20 -mt-12 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-2xl border border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold text-accent mb-2 tracking-tighter">{stat.value}</span>
                <span className="text-sm font-medium uppercase tracking-widest text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
          <DraftingCompass className="h-[500px] w-[500px] text-primary" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Our Core Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">Comprehensive engineering and design solutions tailored to your project's unique requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="h-16 w-16 rounded-xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20 relative z-10 text-white group-hover:bg-accent transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 relative z-10">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors group/link relative z-10 uppercase tracking-wider">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 md:py-32 bg-muted relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white border border-border font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg h-[450px] cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-10 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block py-1 px-3 rounded-md bg-accent text-white text-xs font-bold uppercase tracking-wider mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <Link href={`/portfolio/${i}`} className="inline-flex items-center text-white/80 font-medium hover:text-white mt-2">
                      View Case Study <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
             <Link href="/portfolio" className="inline-flex items-center justify-center w-full h-14 rounded-lg bg-primary font-bold text-white shadow-md">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-secondary/50 border border-white/10 rounded-2xl p-10 backdrop-blur-md text-left relative group hover:bg-secondary/80 transition-colors">
                <Quote className="absolute top-8 right-8 h-10 w-10 text-white/10 group-hover:text-accent/20 transition-colors" />
                <div className="flex items-center mb-8">
                  <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center font-bold text-xl mr-5 shadow-lg shadow-accent/20">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">John Doe</h4>
                    <span className="text-sm text-white/60 font-medium">Real Estate Developer</span>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed text-lg font-light">
                  "Nur Design delivered exceptional quality on our latest commercial project. Their attention to detail and ability to stay within budget was truly impressive. Highly recommended."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-15cb2a061414?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">Ready to Start Your Next Project?</h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium drop-shadow-sm">
            Contact us today for a free consultation. Our team of experts is ready to bring your vision to life.
          </p>
          <Link 
            href="/quote" 
            className="inline-flex h-16 items-center justify-center rounded-lg bg-white px-12 py-4 text-xl font-bold text-primary shadow-2xl transition-transform hover:scale-105 hover:shadow-white/20"
          >
            Request a Free Quote <ArrowRight className="ml-3 h-6 w-6 text-accent" />
          </Link>
        </div>
      </section>
    </div>
  )
}
