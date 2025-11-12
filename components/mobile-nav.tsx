"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile nav button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 md:hidden bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-gradient-to-b from-[#f6d5d8] via-[#e6ddf7] to-[#fdfcfa] backdrop-blur-lg animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-medium text-gray-800 hover:text-[#f4b8c0] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-medium text-gray-800 hover:text-[#f4b8c0] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("purpose")}
              className="text-2xl font-medium text-gray-800 hover:text-[#f4b8c0] transition-colors"
            >
              Purpose
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-2xl font-medium text-gray-800 hover:text-[#f4b8c0] transition-colors"
            >
              Join
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
