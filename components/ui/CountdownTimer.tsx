"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2025-03-30T00:00:00Z");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex items-center gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="font-courier text-2xl tabular-nums text-warm-white md:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 font-courier text-[10px] uppercase tracking-label text-ash">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="h-8 w-px bg-dust/50" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
