import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

interface RejectionScreenProps {
  onTryAgain: () => void;
}

export function RejectionScreen({ onTryAgain }: RejectionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-10 p-12 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#A8141D]/30 max-w-2xl mx-auto relative overflow-hidden"
    >
      {/* Floating hearts background */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 3 + i * 0.5, 
            repeat: Infinity,
            delay: i * 0.3
          }}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        >
          <Heart className="w-8 h-8 text-[#A8141D] fill-[#A8141D]" />
        </motion.div>
      ))}

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
        className="relative z-10"
      >
        <Heart className="w-24 h-24 text-[#A8141D] fill-[#A8141D]" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 relative z-10"
      >
        <p
          className="text-[#292528] text-center max-w-md"
          style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}
        >
          I promise you'll like it
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#292528]/70 text-center"
          style={{ fontSize: '1.1rem' }}
        >
          Trust me... it's worth it! (ㅅ•́ ₃•̀)
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10"
      >
        <Button
          onClick={onTryAgain}
          className="px-10 py-7 bg-gradient-to-r from-[#A8141D] to-[#990011] hover:from-[#990011] hover:to-[#A8141D] text-white shadow-xl border-none rounded-2xl transition-all transform hover:scale-105"
          style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.02em' }}
        >
          Try Again 💖
        </Button>
      </motion.div>
    </motion.div>
  );
}
