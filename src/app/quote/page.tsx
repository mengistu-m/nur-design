"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tell us about your project requirements and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Section */}
            <div className="w-full lg:w-2/3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p>Thank you for reaching out. A Nur Design representative will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex text-primary font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <input required type="text" id="firstName" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <input required type="text" id="lastName" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                      <input required type="email" id="email" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                      <input required type="tel" id="phone" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Required</label>
                    <select required id="service" className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                      <option value="">Select a service...</option>
                      <option value="civil">Civil Works & Construction</option>
                      <option value="sanitation">Sanitation & Plumbing</option>
                      <option value="electrical">Electrical Installation</option>
                      <option value="architectural">Architectural Design</option>
                      <option value="interior">Interior Design</option>
                      <option value="multiple">Multiple Services / General Contracting</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                    <textarea required id="message" rows={5} className="w-full p-3 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your project scale, timeline, and specific requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-md bg-accent text-white font-bold shadow hover:bg-accent/90 transition-colors flex justify-center items-center gap-2">
                    Submit Request <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-muted p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Head Office</h4>
                      <p className="text-muted-foreground mt-1">123 Engineering Blvd, Suite 400<br/>Metropolis, NY 10001</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Phone</h4>
                      <p className="text-muted-foreground mt-1">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <p className="text-muted-foreground mt-1">info@Nur Design.com<br/>tenders@Nur Design.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">Working Hours</h4>
                      <p className="text-muted-foreground mt-1">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-white p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-3">Urgent Requirement?</h3>
                <p className="text-white/80 mb-6 text-sm">Our support team is available via WhatsApp for immediate assistance.</p>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow hover:bg-[#25D366]/90 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

