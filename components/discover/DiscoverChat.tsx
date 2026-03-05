"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const ÉTAT_STORAGE_KEY = "etat_discover";

export function setEtatDiscoverStorage(data: {
  archiveId: string;
  notes: string[];
  identityStatement: string;
  narrative: string;
}) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(ÉTAT_STORAGE_KEY, JSON.stringify(data));
  }
}

export function getEtatDiscoverStorage(): {
  archiveId: string;
  notes: string[];
  identityStatement: string;
  narrative: string;
} | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ÉTAT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

interface DiscoverChatProps {
  onComplete?: (archiveId: string, notes: string[], identityStatement: string, narrative: string) => void;
  onShowResults: (archiveId: string, notes: string[], identityStatement: string, narrative: string) => void;
}

const STAGE_PROMPTS = [
  "I'm here to listen. tell me about a place you always return to in your memory.",
  "and what time of day does it feel like?",
  "what feeling do you carry with you most often?",
  "is there something you always have with you? something small.",
  "how do you want to be remembered?",
];

const TIME_HINTS = ["dawn", "midday", "dusk", "midnight"];

const PLACE_NOTES: Record<string, string> = {
  forest: "vetiver",
  ocean: "salt",
  sea: "driftwood",
  city: "smoke",
  mountain: "pine",
  garden: "soil",
  library: "parchment",
  room: "cedar",
  home: "warmth",
  beach: "salt",
  rain: "petrichor",
};
const TIME_NOTES: Record<string, string> = {
  dawn: "mist",
  midday: "warm stone",
  dusk: "amber",
  midnight: "cool air",
};
const EMOTION_NOTES: Record<string, string> = {
  quiet: "violet",
  longing: "violet",
  warmth: "amber",
  melancholy: "vetiver",
  joy: "neroli",
  peace: "white tea",
  calm: "white tea",
  sad: "vetiver",
  happy: "neroli",
  love: "rose",
  hope: "iris",
};
const OBJECT_NOTES: Record<string, string> = {
  book: "parchment",
  keys: "iron",
  key: "iron",
  ring: "musk",
  photo: "cedar",
  photograph: "cedar",
  letter: "parchment",
  stone: "stone",
  flower: "petal",
  watch: "metal",
  pen: "ink",
};
const IDENTITY_NOTES: Record<string, string> = {
  remembered: "white musk",
  gentle: "white musk",
  unforgettable: "oud",
  quiet: "sandalwood",
  quietly: "sandalwood",
  bold: "oud",
  soft: "cashmere musk",
  forever: "amber",
};

function generateArchiveId() {
  return "ÉT-" + String(Math.floor(100000 + Math.random() * 900000));
}

function findNote(text: string, map: Record<string, string>): string | null {
  const lower = text.toLowerCase().trim();
  for (const [key, note] of Object.entries(map)) {
    if (lower.includes(key)) return note;
  }
  return null;
}

/** Returns exactly 5 notes: [landscape, mood, heart, texture, signature] */
function deriveNotes(answers: string[]): string[] {
  const [place = "", time = "", emotion = "", object = "", identity = ""] = answers;
  const landscape = findNote(place, PLACE_NOTES) ?? "cedar";
  const mood = findNote(time, TIME_NOTES) ?? "mist";
  const heart = findNote(emotion, EMOTION_NOTES) ?? "amber";
  const texture = findNote(object, OBJECT_NOTES) ?? "parchment";
  const signature = findNote(identity, IDENTITY_NOTES) ?? "white musk";
  return [landscape, mood, heart, texture, signature];
}

function deriveIdentityStatement(answers: string[]): string {
  const words = answers.join(" ").toLowerCase().split(/\s+/).filter((w) => w.length > 3);
  const picked = words.slice(0, 3);
  if (picked.length === 0) return "the one who remembers.";
  return "the one who carries " + picked.join(", ") + ".";
}

const TYPEWRITER_MS = 40;
const NOTE_STAGGER_MS = 400;
const CLOSING_DELAY_AFTER_TYPEWRITER_MS = 2000;

export default function DiscoverChat({ onShowResults }: DiscoverChatProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showTimeHints, setShowTimeHints] = useState(false);
  const [closingPhase, setClosingPhase] = useState<
    "idle" | "typewriter" | "notes" | "identity" | "links"
  >("idle");
  const [typewriterText, setTypewriterText] = useState("");
  const [visibleNoteCount, setVisibleNoteCount] = useState(0);
  const [finalData, setFinalData] = useState<{
    archiveId: string;
    notes: string[];
    identityStatement: string;
    narrative: string;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isStage1Opening = messages.length === 0;

  useEffect(() => {
    if (isStage1Opening) {
      setMessages([
        {
          id: "0",
          role: "assistant",
          content: STAGE_PROMPTS[0],
          timestamp: Date.now(),
        },
      ]);
    }
  }, [isStage1Opening]);

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
    const newAnswers = [...answers, trimmed];
    setAnswers(newAnswers);
    setInput("");
    setShowTimeHints(false);

    if (newAnswers.length >= 5) {
      const archiveId = generateArchiveId();
      const notes = deriveNotes(newAnswers);
      const identityStatement = deriveIdentityStatement(newAnswers);
      const narrative =
        "your scent carries the weight of mornings before the world wakes. it holds the silence of libraries and the warmth of skin against paper. this is your archive. held. permanent.";
      setFinalData({ archiveId, notes, identityStatement, narrative });
      setClosingPhase("typewriter");
      setVisibleNoteCount(0);
      const fullText = "I think I've found your état.";
      const startTypewriter = () => {
        let i = 0;
        const iv = setInterval(() => {
          i++;
          setTypewriterText(fullText.slice(0, i));
          if (i >= fullText.length) {
            clearInterval(iv);
            setTimeout(() => {
              setClosingPhase("notes");
            }, CLOSING_DELAY_AFTER_TYPEWRITER_MS);
          }
        }, TYPEWRITER_MS);
      };
      setTimeout(startTypewriter, 2000);
      return;
    }

    const nextPromptIndex = newAnswers.length;
    setMessages((prev) => [
      ...prev,
      {
        id: String(prev.length + 1),
        role: "assistant",
        content: STAGE_PROMPTS[nextPromptIndex],
        timestamp: Date.now(),
      },
    ]);
    if (nextPromptIndex === 1) setShowTimeHints(true);
  };

  useEffect(() => {
    if (closingPhase !== "notes" || !finalData) return;
    if (visibleNoteCount >= finalData.notes.length) {
      const t = setTimeout(() => setClosingPhase("identity"), 1000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleNoteCount((n) => n + 1), NOTE_STAGGER_MS);
    return () => clearTimeout(t);
  }, [closingPhase, finalData, visibleNoteCount]);

  useEffect(() => {
    if (closingPhase === "identity" && finalData) {
      const t = setTimeout(() => setClosingPhase("links"), 1000);
      return () => clearTimeout(t);
    }
  }, [closingPhase, finalData]);

  const handleHintClick = (hint: string) => {
    setInput(hint);
    inputRef.current?.focus();
  };

  const handleSeeFullArchive = () => {
    if (finalData) {
      setEtatDiscoverStorage(finalData);
      onShowResults(
        finalData.archiveId,
        finalData.notes,
        finalData.identityStatement,
        finalData.narrative
      );
    }
  };

  const handleOrderEtat = () => {
    if (finalData) {
      setEtatDiscoverStorage(finalData);
      router.push("/order");
    }
  };

  const showInput = closingPhase === "idle" || closingPhase === "typewriter";

  return (
    <div className="mx-auto flex h-full max-w-xl flex-col bg-cream px-6">
      <div
        className="flex-1 space-y-6 overflow-y-auto py-8"
        style={{ maxHeight: "calc(100vh - 12rem)" }}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={msg.role === "user" ? "text-right" : ""}
            >
              {msg.role === "assistant" ? (
                <p className="font-cormorant text-xl font-light italic leading-snug text-ink md:text-2xl">
                  {msg.content}
                </p>
              ) : (
                <p className="font-jost text-sm font-light text-ash">
                  {msg.content}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {closingPhase !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {(closingPhase === "typewriter" || typewriterText) && (
              <p className="font-cormorant text-xl font-light italic text-ink md:text-2xl">
                {typewriterText}
              </p>
            )}
            {(closingPhase === "notes" ||
              closingPhase === "identity" ||
              closingPhase === "links") &&
              finalData &&
              visibleNoteCount > 0 && (
                <p className="font-cormorant text-xl font-light italic text-gold-thread md:text-2xl">
                  {finalData.notes.slice(0, visibleNoteCount).join(" · ")}
                </p>
              )}
            {(closingPhase === "identity" || closingPhase === "links") &&
              finalData && (
                <>
                  <hr className="border-t border-dust/40" />
                  <p className="font-cormorant text-lg font-light italic text-ash">
                    {finalData.identityStatement}
                  </p>
                </>
              )}
            {closingPhase === "links" && finalData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 pt-2"
              >
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSeeFullArchive();
                  }}
                  className="font-jost text-sm font-light text-ink hover:text-ash"
                >
                  see your full archive →
                </Link>
                <Link
                  href="/order"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOrderEtat();
                  }}
                  className="font-jost text-sm font-light text-ink hover:text-ash"
                >
                  order your état →
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {showInput && (
        <>
          <div className="border-t border-dust pt-6" />
          <form onSubmit={handleSubmit} className="pb-8 pt-4">
            {showTimeHints && (
              <p className="mb-2 font-courier text-[10px] uppercase tracking-label text-ash">
                {TIME_HINTS.map((h, i) => (
                  <span key={h}>
                    <button
                      type="button"
                      onClick={() => handleHintClick(h)}
                      className="hover:text-ink"
                    >
                      {h}
                    </button>
                    {i < TIME_HINTS.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            )}
            <div className="flex items-end gap-3 border-b border-ink pb-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                placeholder="type here..."
                className="min-w-0 flex-1 bg-transparent font-jost text-sm font-light text-ink placeholder:text-ash focus:outline-none"
                disabled={closingPhase !== "idle"}
              />
              <button
                type="submit"
                disabled={!input.trim() || isComposing}
                className="font-courier text-sm text-ink hover:text-ash disabled:opacity-40"
              >
                →
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
