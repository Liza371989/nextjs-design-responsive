import type { HTMLAttributes, ReactNode } from "react";

export function Card({ children, className = "", ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return <article className={["ui-card", className].filter(Boolean).join(" ")} {...props}>{children}</article>;
}
