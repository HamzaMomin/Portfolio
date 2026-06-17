import { useHackerText } from "../hooks/useHackerText";

interface HackerTextProps {
  text: string;
  className?: string;
}

export default function HackerText({ text, className = "" }: HackerTextProps) {
  const displayText = useHackerText(text);

  return (
    <span className={`hacker-text font-bold ${className}`}>{displayText}</span>
  );
}
