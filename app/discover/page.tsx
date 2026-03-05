"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DiscoverChat from "@/components/discover/DiscoverChat";
import LoadingScreen from "@/components/discover/LoadingScreen";
import ResultsScreen from "@/components/discover/ResultsScreen";

type Phase = "chat" | "loading" | "results";

export default function DiscoverPage() {
  const [phase, setPhase] = useState<Phase>("chat");
  const [archiveId, setArchiveId] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [identityStatement, setIdentityStatement] = useState("");
  const [narrative, setNarrative] = useState("");

  useEffect(() => {
    if (phase !== "loading") return;
    const t = setTimeout(() => setPhase("results"), 2400);
    return () => clearTimeout(t);
  }, [phase]);

  const handleComplete = useCallback(
    (id: string, n: string[], statement: string, narr: string) => {
      setArchiveId(id);
      setNotes(n);
      setIdentityStatement(statement);
      setNarrative(narr);
      setPhase("loading");
    },
    []
  );

  return (
    <div className="flex min-h-screen flex-col justify-between bg-cream pt-24 pb-24 md:pb-32">
      <AnimatePresence mode="wait">
        {phase === "chat" && (
          <motion.div
            key="chat"
            className="flex min-h-0 flex-1 flex-col"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DiscoverChat onComplete={handleComplete} />
          </motion.div>
        )}
        {phase === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-[60vh]"
          >
            <LoadingScreen />
          </motion.div>
        )}
        {phase === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsScreen
              archiveId={archiveId}
              notes={notes}
              identityStatement={identityStatement}
              narrative={narrative}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
