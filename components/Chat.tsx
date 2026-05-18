"use client"

import { useEffect, useRef, useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: string
}

export default function Chat() {

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hola, soy el asistente financiero de BanCogo.",
      timestamp: new Date().toLocaleTimeString()
    }
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [messages])

  async function handleSend() {

    if (!input.trim()) return

    const question = input

    const userMessage: Message = {
      role: "user",
      content: question,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages((prev) => [
      ...prev,
      userMessage
    ])

    setInput("")
    setLoading(true)

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/ask",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            question: question
          })
        }
      )

      const data = await response.json()

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date().toLocaleTimeString()
      }

      setMessages((prev) => [
        ...prev,
        assistantMessage
      ])

    } catch (error) {

      const assistantMessage: Message = {
        role: "assistant",
        content: "Error conectando con el backend.",
        timestamp: new Date().toLocaleTimeString()
      }

      setMessages((prev) => [
        ...prev,
        assistantMessage
      ])

    }

    setLoading(false)
  }

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      border-zinc-200
      h-[500px]
      flex
      flex-col
    ">

      {/* Header */}
      <div className="
        p-4
        border-b
        border-zinc-200
      ">

        <h2 className="font-bold text-black text-lg">
          AI Financial Assistant
        </h2>

        <p className="text-sm text-zinc-500">
          Pregunta sobre transacciones, fraude y métricas.
        </p>

      </div>

      {/* Messages */}
      <div className="
        flex-1
        overflow-y-auto
        p-4
        space-y-4
      ">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`
              flex
              flex-col
              ${
                message.role === "user"
                  ? "items-end"
                  : "items-start"
              }
            `}
          >

            <div
              className={`
                max-w-[80%]
                p-4
                rounded-2xl
                ${
                  message.role === "user"
                    ? "bg-black text-white"
                    : "bg-zinc-100 text-black"
                }
              `}
            >
              {message.content}
            </div>

            <span className="
              text-xs
              text-zinc-400
              mt-1
            ">
              {message.timestamp}
            </span>

          </div>

        ))}

        {/* Loading */}
        {loading && (

          <div className="
            bg-zinc-100
            text-black
            p-4
            rounded-2xl
            w-fit
          ">
            Analizando datos bancarios...
          </div>

        )}

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}
      <div className="
        p-4
        border-t
        border-zinc-200
        flex
        gap-2
      ">

        <input
          type="text"
          placeholder="Pregunta algo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}

          className="
            flex-1
            border
            border-zinc-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-black
            text-black
          "
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
            bg-black
            text-white
            px-5
            rounded-xl
            hover:bg-zinc-800
            transition
            disabled:opacity-50
          "
        >
          Enviar
        </button>

      </div>

    </div>

  )
}
