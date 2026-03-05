"use client";

interface TagSelectProps {
  tags: string[];
  value: string[];
  onChange: (value: string[]) => void;
  maxTags: number;
}

export default function TagSelect({ tags, value, onChange, maxTags }: TagSelectProps) {
  const toggle = (tag: string) => {
    if (value.includes(tag)) {
      onChange(value.filter((t) => t !== tag));
    } else if (value.length < maxTags) {
      onChange([...value, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`rounded-none border px-4 py-3 font-jost text-sm font-light transition-all duration-500 ${
            value.includes(tag)
              ? "border-gold-thread text-ink"
              : "border-dust text-ash hover:border-ash hover:text-ink"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
