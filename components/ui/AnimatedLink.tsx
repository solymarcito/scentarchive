"use client";

import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedLink({ href, children, className = "" }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-block ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full" />
    </Link>
  );
}
