'use client';

import { useState, useEffect } from 'react';

// Exact Quranic text with explicit word spacing and complete Eraab
const WORDS = [
  'وَإِذَا',
  'مَرِضْتُ',
  'فَهُوَ',
  'يَشْفِينِ',
];

// Helper to extract grapheme clusters (base Arabic letter + eraab diacritics)
function getGraphemes(text: string): string[] {
  const regex = /[\u0600-\u06FF][\u064B-\u065F\u0670]*/g;
  return text.match(regex) || text.split('');
}

export default function AyatTypingEffect() {
  const [typedWords, setTypedWords] = useState<string[]>(['', '', '', '']);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;

    if (currentWordIdx >= WORDS.length) {
      setIsDone(true);
      return;
    }

    const currentWordGraphemes = getGraphemes(WORDS[currentWordIdx]);

    const timer = setTimeout(() => {
      if (currentCharIdx < currentWordGraphemes.length) {
        setTypedWords((prev) => {
          const next = [...prev];
          next[currentWordIdx] = currentWordGraphemes.slice(0, currentCharIdx + 1).join('');
          return next;
        });
        setCurrentCharIdx((prev) => prev + 1);
      } else {
        // Move to the next word
        setCurrentWordIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      }
    }, 110);

    return () => clearTimeout(timer);
  }, [currentWordIdx, currentCharIdx, isDone]);

  return (
    <div className="relative inline-flex items-center justify-center min-h-[5.5rem] sm:min-h-[7.5rem] w-full select-none py-2">
      <h1
        dir="rtl"
        lang="ar"
        className="font-arabic text-4xl sm:text-6xl lg:text-7xl font-bold tracking-normal leading-[1.35] text-emerald-950 flex items-center justify-center gap-3 sm:gap-5 flex-wrap drop-shadow-[0_2px_12px_rgba(6,78,59,0.1)]"
      >
        {WORDS.map((_, idx) => (
          <span key={idx} className="inline-block">
            {typedWords[idx]}
          </span>
        ))}

        {!isDone && (
          <span
            aria-hidden="true"
            className="inline-block w-1 sm:w-1.5 h-8 sm:h-12 bg-emerald-600 rounded-full animate-pulse align-middle"
          />
        )}
      </h1>
    </div>
  );
}