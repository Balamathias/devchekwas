import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient";
  containerSize?: "sm" | "md" | "lg" | "full";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  containerSize = "lg",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-100",
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
