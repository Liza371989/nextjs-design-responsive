import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "quiet" | "icon";
}

export function Button({ children, className = "", variant = "default", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={["ui-button", `ui-button--${variant}`, className].filter(Boolean).join(" ")} {...props}>{children}</button>;
}
