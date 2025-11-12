import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PurposeSection } from "@/components/purpose-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { ChatDemo } from "@/components/chat-demo"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <MobileNav />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/spiritual-background.jpg"
          alt="Spiritual background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#fdfcfa]/40" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-[#f6d5d8]/40 rounded-full animate-particle"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#e6ddf7]/40 rounded-full animate-particle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-60 left-1/4 w-2 h-2 bg-[#f6d5d8]/30 rounded-full animate-particle"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-3 h-3 bg-[#e6ddf7]/30 rounded-full animate-particle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-10 w-2 h-2 bg-[#f6d5d8]/40 rounded-full animate-particle"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#e6ddf7]/40 rounded-full animate-particle"
          style={{ animationDelay: "5s" }}
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#f6d5d8]/10 rounded-full blur-3xl pointer-events-none z-[5]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e6ddf7]/10 rounded-full blur-3xl pointer-events-none z-[5]" />

      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <ChatDemo />
        <div id="purpose">
          <PurposeSection />
        </div>
        <div id="join">
          <JoinSection />
        </div>
        <Footer />
      </div>
    </main>
  )
}
