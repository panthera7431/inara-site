"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const messages = [
  { role: "user", text: "I'm feeling overwhelmed today..." },
  { role: "inara", text: "I hear you. Take a deep breath with me. You're not alone in this feeling." },
  { role: "user", text: "Thank you. That helps." },
  { role: "inara", text: "I'm here whenever you need to talk. Your feelings are valid." },
]

export function ChatDemo() {
  const [currentMessages, setCurrentMessages] = useState<typeof messages>([])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    let index = 0
    const interval = setInterval(() => {
      if (index < messages.length) {
        setCurrentMessages((prev) => [...prev, messages[index]])
        index++
      } else {
        setIsPlaying(false)
        clearInterval(interval)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlay = () => {
    setCurrentMessages([])
    setIsPlaying(true)
  }

  return (
    <section id="demo" className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#fdfcfa] to-[#e6ddf7]/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-12 opacity-0 animate-fade-in-up">
          Experience Inara
        </h2>

        <div
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-[#f6d5d8]/30 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Chat messages */}
          <div className="space-y-4 mb-6 min-h-[300px]">
            {currentMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#f6d5d8] to-[#f4b8c0] text-gray-800"
                      : "bg-gradient-to-r from-[#e6ddf7] to-[#d4c5f9] text-gray-800"
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Play button */}
          <div className="flex justify-center">
            <Button
              onClick={handlePlay}
              disabled={isPlaying}
              className="bg-gradient-to-r from-[#f6d5d8] to-[#f4b8c0] hover:from-[#f4b8c0] hover:to-[#f6d5d8] text-gray-800 font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              {isPlaying ? "Playing..." : "See Conversation"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
