"use client";

import { QuestionOption } from "@/lib/questions";

interface OptionSelectProps {
  options: QuestionOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function OptionSelect(props: OptionSelectProps) {
  const { options, value, onChange } = props;
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={
              isSelected
                ? "border-b-2 border-gold-thread py-3 font-jost text-base font-light text-ink transition-all duration-500"
                : "border-b border-transparent py-3 font-jost text-base font-light text-ash transition-all duration-500 hover:text-ink"
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
