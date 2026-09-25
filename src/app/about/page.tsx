import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, Users, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Nur Design Construction Consultancy",
  description: "Learn more about Nur Design, our mission, vision, values, and leadership team.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Page Header */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Nur Design</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a legacy of excellence through engineering precision and sustainable practices.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded over 15 years ago, Nur Design began with a simple mission: to raise the standard of construction and engineering consultancy. What started as a small team of civil engineers has grown into a multidisciplinary firm handling everything from complex infrastructure to bespoke interior designs.
              </p>
              <p className="text-muted-foreground mb-8">
                We believe that every project, regardless of scale, deserves rigorous attention to detail, uncompromising safety standards, and innovative problem-solving.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Mission</h3>
                    <p className="text-sm text-muted-foreground">To deliver exceptional construction consultancy services that exceed client expectations while fostering sustainable development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Vision</h3>
                    <p className="text-sm text-muted-foreground">To be the region's most trusted engineering partner, known for integrity, innovation, and unwavering quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Architects collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-white/80">We never compromise on quality. Every blueprint, every foundation, and every finish meets the highest industry standards.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-white/80">Transparency in our pricing, honesty in our timelines, and accountability in our work. We build trust alongside structures.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <Users className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-white/80">We work closely with clients, contractors, and stakeholders to ensure seamless execution from concept to completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (Tender Support) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Licenses & Certifications</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are fully licensed and certified to undertake large-scale commercial, institutional, and government projects. Our adherence to global standards ensures your project is in safe hands.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Placeholders for certification logos */}
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm font-bold text-lg border border-border">ISO 9001</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm font-bold text-lg border border-border">ISO 45001</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm font-bold text-lg border border-border">LEED Certified</div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm font-bold text-lg border border-border">National Engineering Board</div>
          </div>
          <div className="mt-12">
             <Link href="/quote" className="inline-flex items-center text-primary font-medium hover:underline">
               Request Company Profile (PDF) &rarr;
             </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

