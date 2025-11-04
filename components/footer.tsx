'use client'

import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/raahul-01", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/raahul01", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:raahul.yxz@gmail.com", label: "Email" },
  ]

  return (
    <footer className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="space-y-8 sm:space-y-12">
        
        {/* Quote Section */}
        <div className="text-center space-y-3">
          <div className="inline-block">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
              "Nothing is Perfect — <br className="sm:hidden" />
              But You Can Make it <span className="text-white font-medium">Better</span>."
            </p>
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
        </div>

        {/* Social Links - Minimalist */}
        <div className="flex justify-center items-center gap-6 sm:gap-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 pb-6 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2025</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">Rahul Kumar Verma</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Crafted with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-gray-600">&</span>
            <span className="text-blue-400">Next.js</span>
          </div>

          <a 
            href="#" 
            className="group flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="text-xs">Back to top</span>
            <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  )
}
