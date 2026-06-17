import { useEffect, useState } from "react";

const DEFAULT_HACKER_CHARS = "!@#$%^&*()_+{}:<>?~";

export function useHackerText(
  targetText: string,
  hackerChars: string = DEFAULT_HACKER_CHARS
) {
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const runAnimation = () => {
      let iterations = 0;

      intervalId = setInterval(() => {
        setDisplayText(
          targetText
            .split("")
            .map((char, index) => {
              if (index < iterations) return char;
              return hackerChars[Math.floor(Math.random() * hackerChars.length)];
            })
            .join("")
        );

        if (iterations >= targetText.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(runAnimation, 4000);
        }

        iterations += 1;
      }, 100);
    };

    runAnimation();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [targetText, hackerChars]);

  return displayText;
}
