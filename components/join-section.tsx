"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"

export function JoinSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#e6ddf7]/30 to-[#fdfcfa]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Join the Journey</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-xl text-gray-700 leading-relaxed">
            {'"'}Be part of Inara{"'"}s evolution — crafted with empathy.{'"'}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-lg rounded-full border-2 border-[#e6ddf7] focus:border-[#f6d5d8] bg-white/80 backdrop-blur-sm shadow-md focus:shadow-lg transition-all"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#f6d5d8] to-[#e6ddf7] hover:from-[#e6ddf7] hover:to-[#f6d5d8] text-gray-800 font-medium px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
