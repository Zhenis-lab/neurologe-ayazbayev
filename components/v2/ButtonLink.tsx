import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "../Icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  arrow = false
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`v2-button v2-button-${variant} ${className}`.trim()}>
      <span>{children}</span>
      {arrow ? <ArrowIcon /> : null}
    </Link>
  );
}
