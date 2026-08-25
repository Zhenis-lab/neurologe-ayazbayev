import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  labelledBy?: string;
  tone?: "paper" | "surface" | "dark";
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  labelledBy,
  tone = "paper"
}: SectionProps) {
  return (
    <section
      id={id}
      className={`v2-section v2-section-${tone} ${className}`.trim()}
      aria-labelledby={labelledBy}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
