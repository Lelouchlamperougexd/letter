import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';
import catWithFlowers from 'figma:asset/a03dcd151efb570f8dce97a3ab26535930a4e969.png';

interface WelcomeScreenProps {
  onYes: () => void;
  onNo: () => void;
}

export function WelcomeScreen({ onYes, onNo }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6 p-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#A8141D]/30 max-w-2xl mx-auto relative overflow-hidden"
    >
      {/* Decorative hearts */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-4 right-4"
      >
        <Heart className="w-6 h-6 text-[#A8141D] fill-[#A8141D] opacity-30" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute top-4 left-4"
      >
        <Heart className="w-5 h-5 text-[#990011] fill-[#990011] opacity-30" />
      </motion.div>

      {/* Cat Image */}
      <motion.img
        src={catWithFlowers}
        alt="Cute cat with flowers"
        className="w-48 h-48 object-contain"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      />

      {/* Hello Text */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#292528] text-center"
        style={{ fontSize: '4.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}
      >
        Hello
      </motion.h1>

      {/* My love! Text */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[#A8141D] text-center -mt-4"
        style={{ fontSize: '3.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}
      >
        My love!
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-32 h-1 bg-gradient-to-r from-transparent via-[#A8141D] to-transparent"
      />

      {/* Question Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-[#292528] text-center max-w-md"
        style={{ fontSize: '1.2rem', lineHeight: '1.6' }}
      >
        do you want to see your gift?
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md mx-auto justify-center"
      >
        <Button
          onClick={onYes}
          className="px-8 py-7 bg-gradient-to-r from-[#A8141D] to-[#990011] hover:from-[#990011] hover:to-[#A8141D] text-white shadow-xl border-none rounded-2xl transition-all transform hover:scale-105"
          style={{ fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.02em' }}
        >
          YEAH, GO FOR IT! ◝(ᵔᗜᵔ)◜
        </Button>
        <Button
          onClick={onNo}
          className="px-8 py-7 bg-[#292528] hover:bg-[#990011] text-white shadow-xl border-none rounded-2xl transition-all transform hover:scale-105"
          style={{ fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.02em' }}
        >
          NAH, THANKS ( • ̀ω•́ )✧
        </Button>
      </motion.div>
    </motion.div>
  );
}
