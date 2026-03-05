"use client";

interface BottlePlaceholderProps {
  sizeLabel: string;
  className?: string;
}

export default function BottlePlaceholder({ sizeLabel, className = "" }: BottlePlaceholderProps) {
  return (
    <div
      className={`flex aspect-[3/4] items-center justify-center bg-stone-200 ${className}`}
    >
      <span className="font-courier text-[10px] uppercase tracking-label text-ash">
        {sizeLabel}
      </span>
    </div>
  );
}
