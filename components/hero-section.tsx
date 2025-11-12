import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f6d5d8] via-[#e6ddf7] to-[#fdfcfa] px-4">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Wave effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-wave" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
        {/* Glowing Arabic logo */}
        <div className="w-64 md:w-96 animate-float">
          <Image
            src="/images/inara-logo.png"
            alt="Inara - Your Voice of Comfort"
            width={400}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#f6d5d8] to-[#f4b8c0] hover:from-[#f4b8c0] hover:to-[#f6d5d8] text-gray-800 font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Enter Inara AI
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border-gray-300 font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Visit MH Resources
          </Button>
        </div>
      </div>
    </section>
  )
}
