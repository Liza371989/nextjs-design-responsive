import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Logo({ label }: { label: string }) {
  return <a className="logo" href="#" aria-label={label}><span>✦</span> {label}<sup>®</sup></a>;
}

export function TextLink({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return <a className="text-link" href={href}>{children}</a>;
}
