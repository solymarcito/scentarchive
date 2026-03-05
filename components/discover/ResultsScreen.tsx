"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { setEtatDiscoverStorage } from "./DiscoverChat";

interface ResultsScreenProps {
  archiveId: string;
  notes: string[];
  identityStatement: string;
  narrative: string;
}

const placeholderNotes = [
  "vetiver",
  "mist",
  "amber",
  "parchment",
  "white musk",
];
const placeholderStatement = "the one who remembers.";
const placeholderNarrative =
  "your scent carries the weight of mornings before the world wakes. it holds the silence of libraries and the warmth of skin against paper. this is your archive. held. permanent.";

export default function ResultsScreen({
  archiveId,
  notes,
  identityStatement,
  narrative,
}: ResultsScreenProps) {
  const router = useRouter();
  const displayNotes = notes.length > 0 ? notes : placeholderNotes;
  const displayStatement = identityStatement || placeholderStatement;
  const displayNarrative = narrative || placeholderNarrative;

  const handleOrderBottle = () => {
    setEtatDiscoverStorage({
      archiveId,
      notes: displayNotes,
      identityStatement: displayStatement,
      narrative: displayNarrative,
    });
    router.push("/order");
  };

  const handleSaveIdentity = () => {
    const content = `MAISON MARGIELA REPLICA: ÉTAT · IDENTITY FILE\nArchive ID: ${archiveId}\n\nNotes: ${displayNotes.join(" · ")}\n\n${displayStatement}\n\n${displayNarrative}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `etat-${archiveId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="mx-auto max-w-2xl px-6 py-20"
    >
      <p className="font-courier text-[10px] uppercase tracking-label text-ash">
        YOUR ARCHIVE ID · {archiveId}
      </p>
      <h2 className="mt-6 font-cormorant text-3xl font-light italic text-gold-thread md:text-4xl">
        {displayNotes.join(" · ")}
      </h2>
      <p className="mt-4 font-cormorant text-xl font-light italic text-ink">
        {displayStatement}
      </p>
      <p className="mt-8 font-jost text-base font-light leading-[1.8] text-ink">
        {displayNarrative}
      </p>
      <div className="mt-12 flex flex-col gap-6 sm:flex-row">
        <button
          type="button"
          onClick={handleOrderBottle}
          className="group relative inline-block font-jost text-base font-light text-ink transition-all duration-500 hover:text-ash"
        >
          order your état →
          <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full" />
        </button>
        <button
          onClick={handleSaveIdentity}
          className="font-jost text-base font-light text-gold-thread transition-all duration-500 hover:text-ash"
        >
          save your identity file
        </button>
      </div>
      <p className="mt-12 font-courier text-[10px] uppercase tracking-label text-ash">
        your identity. share it.
      </p>
      <div className="mt-4 flex gap-6">
        <a
          href={`https://twitter.com/intent/tweet?text=My scent identity: ${displayNotes.join(", ")} — ${displayStatement}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-jost text-sm font-light text-ash transition-all duration-500 hover:text-ink"
        >
          share
        </a>
      </div>
    </motion.div>
  );
}
