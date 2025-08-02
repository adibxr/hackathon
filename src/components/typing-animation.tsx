'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
}

export default function TypingAnimation({ text }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className="font-code text-lg md:text-xl lg:text-2xl mt-4 text-slate-300">
      <span className="typing-text">{displayedText}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}
