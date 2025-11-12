import { ScrollReveal } from "@/components/scroll-reveal"

export function PurposeSection() {
  const purposes = [
    {
      title: "Listen with empathy.",
      gradient: "from-[#f6d5d8] to-[#e6ddf7]",
    },
    {
      title: "Speak with compassion.",
      gradient: "from-[#e6ddf7] to-[#fdfcfa]",
    },
    {
      title: "Heal through presence.",
      gradient: "from-[#fdfcfa] to-[#f6d5d8]",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#fdfcfa] to-[#e6ddf7]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {purposes.map((purpose, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${purpose.gradient} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group`}
                style={{
                  boxShadow: "0 0 25px rgba(230, 221, 247, 0.4)",
                }}
              >
                <p className="text-xl md:text-2xl font-serif text-gray-800 text-center leading-relaxed group-hover:text-gray-900 transition-colors">
                  {purpose.title}
                </p>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
