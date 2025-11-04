import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { DecorativeSlash } from "@/components/decorative-slash"
import { Interests } from "@/components/interests"
import { Elsewhere } from "@/components/elsewhere"
import { SectionIndex } from "@/components/section-index"
import { RightNav } from "@/components/right-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <RightNav />
      {/* Decorative slashes */}
      <DecorativeSlash className="top-[10%] left-[5%] hidden sm:block" />
      <DecorativeSlash className="top-[30%] right-[8%] hidden md:block" />
      <DecorativeSlash className="top-[50%] left-[10%] hidden lg:block" />
      <DecorativeSlash className="bottom-[30%] right-[5%] hidden sm:block" />
      <DecorativeSlash className="bottom-[10%] left-[15%] hidden md:block" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10 md:-translate-x-12 lg:-translate-x-24">
        <Hero />
        <SectionIndex />
        <Interests />
        <TechStack />
        <Projects />
        <Elsewhere />
        <Footer />
      </div>
    </main>
  )
}
