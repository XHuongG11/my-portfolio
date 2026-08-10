import { useInView } from "../../hooks/useInView.ts";

type RevealDirection = "left" | "right" | "up" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  id?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  id,
}: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const animClass = isVisible
    ? direction === "left"
      ? "animate-slide-in-left"
      : direction === "right"
        ? "animate-slide-in-right"
        : direction === "up"
          ? "animate-slide-in-up"
          : ""
    : "opacity-0";

  return (
    <div
      id={id}
      ref={ref}
      className={`${animClass} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export const RevealSection = Reveal;
