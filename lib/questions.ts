export type QuestionType = "text" | "options" | "tags";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: QuestionOption[];
  tags?: string[];
  maxTags?: number;
}

export const questions: Question[] = [
  {
    id: "memory",
    type: "text",
    prompt:
      "what is the first memory that comes to you when you close your eyes?",
  },
  {
    id: "time",
    type: "options",
    prompt: "choose a time of day that feels most like you.",
    options: [
      { value: "dawn", label: "dawn" },
      { value: "midday", label: "midday" },
      { value: "dusk", label: "dusk" },
      { value: "midnight", label: "midnight" },
    ],
  },
  {
    id: "landscape",
    type: "options",
    prompt: "which landscape do you return to in your mind?",
    options: [
      { value: "forest", label: "forest" },
      { value: "ocean", label: "ocean" },
      { value: "city_at_night", label: "city at night" },
      { value: "open_field", label: "open field" },
      { value: "mountains", label: "mountains" },
      { value: "old_library", label: "old library" },
    ],
  },
  {
    id: "remembered",
    type: "text",
    prompt: "how do you want to be remembered?",
  },
  {
    id: "words",
    type: "tags",
    prompt: "choose three words others use to describe you.",
    tags: [
      "quiet",
      "warm",
      "curious",
      "patient",
      "bold",
      "gentle",
      "precise",
      "dreamy",
      "grounded",
      "mysterious",
      "honest",
      "tender",
    ],
    maxTags: 3,
  },
  {
    id: "carry",
    type: "text",
    prompt: "what do you always carry with you?",
  },
];
