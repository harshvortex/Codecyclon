"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
  timestamp: Date
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! Welcome to Codecyclon. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [step, setStep] = useState<"initial" | "website-type" | "budget" | "contact">("initial")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = (question: string, nextStep: typeof step) => {
    addMessage(question, "user")
    setStep(nextStep)

    setTimeout(() => {
      let botResponse = ""
      switch (nextStep) {
        case "website-type":
          botResponse =
            "Great! What type of website are you looking for?\n\n• Landing Page\n• Business Website\n• E-commerce Store\n• Custom Platform\n• Portfolio"
          break
        case "budget":
          botResponse =
            "What's your budget range?\n\n• Under ₹5,000\n• ₹5,000 - ₹15,000\n• ₹15,000 - ₹50,000\n• ₹50,000+"
          break
        case "contact":
          botResponse =
            "Perfect! To get started, I'll need your contact information. Share your email or WhatsApp number, and we'll reach out within 24 hours!"
          break
        default:
          botResponse = "How can I help you further?"
      }
      addMessage(botResponse, "bot")
    }, 500)
  }

  const addMessage = (text: string, sender: "bot" | "user") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    addMessage(input, "user")
    setInput("")

    setTimeout(() => {
      let botResponse = ""

      if (step === "contact") {
        if (input.includes("@") || input.match(/\d{10}/)) {
          botResponse =
            "Thanks for sharing! We've captured your info. A specialist will contact you shortly. Is there anything else I can help with?"
          setStep("initial")
        } else {
          botResponse = "Please share a valid email or phone number so we can reach you."
        }
      } else if (step === "initial") {
        botResponse =
          "I can help you with that! Would you like to get a free website audit or learn more about our services?"
      } else {
        botResponse = "Great choice! Let me collect some more details. What's your budget range?"
      }

      addMessage(botResponse, "bot")
    }, 600)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {isOpen && (
          <div className="mb-4 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-96 animate-in fade-in slide-in-from-bottom-2">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Codecyclon Bot</h3>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors text-xl"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${message.sender === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-card border border-border text-foreground"
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies or input */}
            <div className="p-4 border-t border-border space-y-2 bg-card">
              {step === "initial" && messages[messages.length - 1]?.text.includes("free website audit") && (
                <div className="space-y-2">
                  <button
                    onClick={() => handleQuickReply("Get free website audit", "budget")}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
                  >
                    Free Website Audit
                  </button>
                  <button
                    onClick={() => handleQuickReply("Tell me about your services", "website-type")}
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
                  >
                    View Services
                  </button>
                </div>
              )}

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
                <button
                  type="submit"
                  className="p-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  ➤
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full transition-all duration-300 text-2xl ${isOpen
              ? "bg-accent text-accent-foreground shadow-lg"
              : "bg-accent text-accent-foreground hover:scale-110 shadow-lg hover:shadow-xl"
            } animate-glow-pulse`}
        >
          {isOpen ? "✕" : "💬"}
        </button>
      </div>
    </>
  )
}
