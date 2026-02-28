"use client";

const filters = [
  { value: "all", label: "ALL" },
  { value: "memory", label: "MEMORY" },
  { value: "nature", label: "NATURE" },
  { value: "urban", label: "URBAN" },
  { value: "intimate", label: "INTIMATE" },
];

interface FilterBarProps {
  active: string;
  onChange: (filter: string) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 border-b border-dust pb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`font-courier text-[10px] uppercase tracking-label transition-all duration-500 ${
            active === filter.value ? "text-ink" : "text-ash hover:text-ink"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
