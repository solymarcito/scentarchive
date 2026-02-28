"use client";

import { Question } from "@/lib/questions";
import OptionSelect from "./OptionSelect";
import TagSelect from "./TagSelect";

interface QuestionStepProps {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

export default function QuestionStep({ question, value, onChange }: QuestionStepProps) {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <h2 className="font-cormorant text-2xl font-light text-ink md:text-3xl">
        {question.prompt}
      </h2>
      <div className="mt-12">
        {question.type === "text" && (
          <textarea
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="begin here..."
            rows={4}
            className="w-full resize-none border-b border-dust bg-transparent font-jost text-base font-light text-ink placeholder:text-ash/60 focus:border-gold-thread focus:outline-none"
          />
        )}
        {question.type === "options" && question.options && (
          <OptionSelect
            options={question.options}
            value={typeof value === "string" ? value : ""}
            onChange={(v) => onChange(v)}
          />
        )}
        {question.type === "tags" && question.tags && (
          <TagSelect
            tags={question.tags}
            value={Array.isArray(value) ? value : []}
            onChange={(v) => onChange(v)}
            maxTags={question.maxTags ?? 3}
          />
        )}
      </div>
    </div>
  );
}
