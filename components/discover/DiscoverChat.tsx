"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface DiscoverChatProps {
  onComplete: (archiveId: string, notes: string[], identityStatement: string, narrative: string) => void;
}

const OPENING =
  "hello. i’m here to listen. tell me about yourself — a place you love, a memory that lingers, how you’d like to feel. we’ll find your scent through the conversation, not a form.";

const LANDSCAPE_MAP: Record<string, string[]> = {
  forest: ["vetiver", "moss", "birch"],
  ocean: ["salt", "seaweed", "driftwood"],
  city: ["concrete", "smoke", "streetlight"],
  field: ["grass", "wheat", "wind"],
  mountain: ["stone", "pine", "cold air"],
  library: ["parchment", "leather", "dust"],
  morning: ["dew", "mist", "first light"],
  night: ["cool air", "stars", "silence"],
  book: ["parchment", "paper", "cedar"],
  rain: ["petrichor", "wet stone", "green"],
  sea: ["salt", "seaweed", "driftwood"],
  garden: ["soil", "herb", "flower"],
  coffee: ["warm", "bitter", "smoke"],
  skin: ["warmth", "salt", "clean"],
  quiet: ["cedar", "paper", "silence"],
  old: ["leather", "dust", "amber"],
};

function extractNotes(text: string): string[] {
  const lower = text.toLowerCase();
  const found: string[] = [];
  for (const [key, notes] of Object.entries(LANDSCAPE_MAP)) {
    if (lower.includes(key)) {
      found.push(...notes);
    }
  }
  return Array.from(new Set(found)).slice(0, 4);
}

function generateArchiveId() {
  return "ÉT-" + String(Math.floor(100000 + Math.random() * 900000));
}

function getReply(userText: string, turnCount: number): string {
  const t = userText.toLowerCase().trim();
  if (turnCount === 0) {
    if (t.length < 10) return "tell me a little more. what place or moment comes to mind first?";
    if (t.includes("?")) return "i’m the one asking — but gently. what’s a memory or a place that feels like you?";
    return "that’s a start. what time of day fits that feeling? and is it more landscape, or more interior — a room, a person?";
  }
  if (turnCount === 1) {
    return "i’m holding that. one more thing: in three words, how would someone who knows you well describe you?";
  }
  if (turnCount >= 2) {
    return "i have enough. your archive is ready.";
  }
  return "go on. i’m listening.";
}

export default function DiscoverChat({ onComplete }: DiscoverChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "0",
      role: "assistant",
      content: OPENING,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const userTurnCount = messages.filter((m) => m.role === "user").length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isComposing) return;

    const userMsg: ChatMessage = {
      id: String(messages.length),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const replyContent = getReply(trimmed, userTurnCount);
    const isComplete = userTurnCount >= 2;

    if (isComplete) {
      const archiveId = generateArchiveId();
      const notes = extractNotes(
        messages.filter((m) => m.role === "user").map((m) => m.content).join(" ") + " " + trimmed
      );
      if (notes.length < 2) notes.push("cedar", "paper", "warm parchment");
      const identityStatement = "the quiet one who remembers everything";
      const narrative =
        "your scent carries the weight of mornings before the world wakes. it holds the silence of libraries and the warmth of skin against paper. this is your archive. held. permanent.";

      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          role: "assistant",
          content: replyContent,
          timestamp: Date.now(),
        },
      ]);
      setTimeout(() => {
        setShowResults(true);
        onComplete(archiveId, notes.slice(0, 4), identityStatement, narrative);
      }, 1200);
      return;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          role: "assistant",
          content: replyContent,
          timestamp: Date.now(),
        },
      ]);
    }, 600 + Math.min(trimmed.length * 20, 400));
  };

  if (showResults) return null;

  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col px-6 pt-8 pb-24 md:pb-32">
      <p className="mb-8 font-courier text-[10px] uppercase tracking-label text-ash">
        discover · conversation
      </p>
      <div className="flex flex-1 flex-col gap-8 overflow-y-auto">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className={msg.role === "user" ? "ml-8 text-right" : "mr-8"}
            >
              {msg.role === "assistant" ? (
                <p className="font-jost text-base font-light leading-[1.8] text-ink">
                  {msg.content}
                </p>
              ) : (
                <p className="font-cormorant text-lg font-light italic text-ink">
                  {msg.content}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} className="mt-8 border-t border-dust pt-6">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="type here..."
          rows={3}
          className="min-h-[120px] w-full resize-none border-b border-dust bg-transparent font-jost text-base font-light text-ink placeholder:text-ash/60 focus:border-gold-thread focus:outline-none"
          disabled={showResults}
        />
        <p className="mt-2 font-courier text-[10px] uppercase tracking-label text-ash">
          your state. your scent.
        </p>
      </form>
    </div>
  );
}
