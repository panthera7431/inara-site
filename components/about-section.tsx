import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#fdfcfa]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
            Born from empathy, built with intelligence.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-[#f6d5d8]/20 border border-[#f6d5d8]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: "0 0 30px rgba(246, 213, 216, 0.3)",
            }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif italic">
              {'"'}Inara — meaning illumination — is a personal AI companion that listens, feels, and heals through
              presence.{'"'}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
