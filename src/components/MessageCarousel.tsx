import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const loveMessages = [
  "I'm the luckiest person alive",
  "You're my shelter, I feel protected with you",
  "I want to grow around you, and fix my flaws to stand beside you",
  "Silly me, sleep better, when you say: Спокойной ночи, Я люблю тебя",
  "Every time I hug you, I wish time to stop",
  "You understand me like no one else does",
  "Love the way how we can freely be ourselves around each other",
  "You're not ideal, but I love you for not pretending to be one",
  "I'm cringe, but to be cringe is fun with you",
];

export function MessageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % loveMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % loveMessages.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + loveMessages.length) % loveMessages.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#A8141D] p-6 mb-6 relative overflow-hidden"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-5 w-5 text-[#A8141D] fill-[#A8141D]" />
        <h3 className="text-[#292528] text-center" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Messages from My Heart
        </h3>
      </div>

      <div className="relative h-24 flex items-center justify-center px-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.p
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="text-[#292528] text-center absolute"
            style={{ fontSize: '1.1rem', lineHeight: '1.6' }}
          >
            {loveMessages[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          size="sm"
          variant="ghost"
          onClick={prev}
          className="h-8 w-8 p-0 hover:bg-[#A8141D]/10 rounded-full"
        >
          <ChevronLeft className="h-5 w-5 text-[#A8141D]" />
        </Button>

        <div className="flex gap-1.5">
          {loveMessages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-6 bg-[#A8141D]' : 'w-2 bg-[#A8141D]/30'
              }`}
            />
          ))}
        </div>

        <Button
          size="sm"
          variant="ghost"
          onClick={next}
          className="h-8 w-8 p-0 hover:bg-[#A8141D]/10 rounded-full"
        >
          <ChevronRight className="h-5 w-5 text-[#A8141D]" />
        </Button>
      </div>
    </motion.div>
  );
}
