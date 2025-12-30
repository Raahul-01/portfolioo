'use client'

import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/raahul-01", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/raahul01", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: SpotifyIcon, href: "https://open.spotify.com/user/31gemj5ptslzd5jzro6jg2wk7koq?si=0fd29674e54342a4", label: "Spotify" },
    { icon: Mail, href: "mailto:raahul.inbox@gmail.com", label: "Email" },
  ]

  return (
    <footer id="contact" className="mt-12 sm:mt-16 pt-8 sm:pt-10">
      {/* Main Footer Content */}
      <div className="space-y-6 sm:space-y-8">
        
        {/* Quote Section */}
        <div className="text-center space-y-2">
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
        <div className="flex flex-col items-center gap-4 pt-6 pb-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <span>© 2025</span>
              <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
              <span className="text-gray-900 dark:text-gray-400 font-medium sm:font-normal">Rahul Kumar Verma</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-600">Crafted with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
            </div>
          </div>

          <a 
            href="#" 
            className="group flex items-center gap-1 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
