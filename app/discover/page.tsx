"use client";

import { useReducer, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/lib/questions";
import QuestionStep from "@/components/discover/QuestionStep";
import LoadingScreen from "@/components/discover/LoadingScreen";
import ResultsScreen from "@/components/discover/ResultsScreen";
import Link from "next/link";

type Phase = "questions" | "loading" | "results";
type Direction = "forward" | "back";

interface State {
  currentStep: number;
  answers: Record<string, string | string[]>;
  direction: Direction;
  phase: Phase;
  archiveId: string;
}

type Action =
  | { type: "ANSWER"; key: string; value: string | string[] }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "LOADING_DONE"; archiveId: string }
  | { type: "RESTART" };

function generateArchiveId() {
  return "SA-" + String(Math.floor(100000 + Math.random() * 900000));
}

function generateNotes(answers: Record<string, string | string[]>): string[] {
  const landscapeNotes: Record<string, string[]> = {
    forest: ["vetiver", "moss", "birch"],
    ocean: ["salt", "seaweed", "driftwood"],
    city_at_night: ["concrete", "smoke", "streetlight"],
    open_field: ["grass", "wheat", "wind"],
    mountains: ["stone", "pine", "cold air"],
    old_library: ["parchment", "leather", "dust"],
  };
  const timeNotes: Record<string, string[]> = {
    dawn: ["dew", "mist", "first light"],
    midday: ["warm stone", "grass", "sun"],
    dusk: ["amber", "shadow", "quiet"],
    midnight: ["cool air", "stars", "silence"],
  };
  const landscape = answers.landscape as string;
  const time = answers.time as string;
  const base = [
    ...(landscapeNotes[landscape] || ["cedar", "paper"]),
    ...(timeNotes[time] || ["warm parchment"]),
  ];
  return Array.from(new Set(base)).slice(0, 4);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ANSWER":
      return { ...state, answers: { ...state.answers, [action.key]: action.value } };
    case "NEXT":
      if (state.currentStep < questions.length - 1) {
        return { ...state, currentStep: state.currentStep + 1, direction: "forward" };
      }
      return { ...state, phase: "loading", direction: "forward" };
    case "PREV":
      if (state.currentStep > 0) {
        return { ...state, currentStep: state.currentStep - 1, direction: "back" };
      }
      return state;
    case "LOADING_DONE":
      return { ...state, phase: "results", archiveId: action.archiveId };
    case "RESTART":
      return {
        currentStep: 0,
        answers: {},
        direction: "forward",
        phase: "questions",
        archiveId: "",
      };
    default:
      return state;
  }
}

const initialState: State = {
  currentStep: 0,
  answers: {},
  direction: "forward",
  phase: "questions",
  archiveId: "",
};

export default function DiscoverPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = useCallback(() => {
    dispatch({ type: "NEXT" });
  }, []);

  const handlePrev = useCallback(() => {
    dispatch({ type: "PREV" });
  }, []);

  const handleAnswer = useCallback((key: string, value: string | string[]) => {
    dispatch({ type: "ANSWER", key, value });
  }, []);

  useEffect(() => {
    if (state.phase !== "loading") return;
    const archiveId = generateArchiveId();
    const id = setTimeout(() => {
      dispatch({ type: "LOADING_DONE", archiveId });
    }, 3000);
    return () => clearTimeout(id);
  }, [state.phase]);

  if (state.phase === "loading") {
    return (
      <div className="min-h-screen bg-cream pt-24">
        <LoadingScreen />
      </div>
    );
  }

  if (state.phase === "results") {
    const notes = generateNotes(state.answers);
    const identityStatement = "the quiet one who remembers everything";
    const narrative =
      "your scent carries the weight of mornings before the world wakes. it holds the silence of libraries and the warmth of skin against paper. this is your archive. held. permanent.";
    return (
      <div className="min-h-screen bg-cream pt-24">
        <ResultsScreen
          archiveId={state.archiveId}
          notes={notes}
          identityStatement={identityStatement}
          narrative={narrative}
        />
      </div>
    );
  }

  const question = questions[state.currentStep];
  const answer = state.answers[question.id] ?? (question.type === "tags" ? [] : "");
  const canProceed =
    question.type === "text"
      ? (answer as string).trim().length > 0
      : question.type === "options"
        ? (answer as string).length > 0
        : question.type === "tags"
          ? (answer as string[]).length === (question.maxTags ?? 3)
          : false;

  return (
    <div className="min-h-screen bg-cream pt-24 pb-32">
      <div className="relative min-h-[60vh]">
        <AnimatePresence mode="wait" custom={state.direction}>
          <motion.div
            key={state.currentStep}
            custom={state.direction}
            initial={{
              opacity: 0,
              y: state.direction === "forward" ? 20 : -10,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: state.direction === "forward" ? -10 : 20,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <QuestionStep
              question={question}
              value={answer}
              onChange={(v) => handleAnswer(question.id, v)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between px-6 py-8">
        <button
          onClick={handlePrev}
          disabled={state.currentStep === 0}
          className={`font-jost text-sm font-light ${
            state.currentStep === 0 ? "text-dust" : "text-ink hover:text-ash"
          } transition-all duration-500`}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`font-jost text-sm font-light ${
            canProceed ? "text-ink hover:text-ash" : "text-dust"
          } transition-all duration-500`}
        >
          →
        </button>
      </div>
    </div>
  );
}
