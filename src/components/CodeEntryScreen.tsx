import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Eye, EyeOff } from 'lucide-react';
import envelopeImage from '../assets/envelope.png';

interface CodeEntryScreenProps {
  onCorrectCode: () => void;
}

export function CodeEntryScreen({ onCorrectCode }: CodeEntryScreenProps) {
  const [code, setCode] = useState('');
  const [letterClicks, setLetterClicks] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showHintOption, setShowHintOption] = useState(false);

  const handleLetterClick = () => {
    if (letterClicks < 2) {
      setLetterClicks(letterClicks + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase() === 'hero') {
      onCorrectCode();
    } else {
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      
      if (newFailedAttempts >= 3 && !showHintOption) {
        setShowHintOption(true);
      }
      
      setCode('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#A8141D]/20 max-w-4xl mx-auto"
    >
      {/* Envelope Section */}
      <div className="flex flex-col items-center gap-6 w-full md:w-1/2">
        <motion.h2
          className="text-[#292528] text-center"
          style={{ fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.01em' }}
        >
          A Secret Letter (¬_¬")
        </motion.h2>

        <motion.p
          className="text-[#292528] text-center max-w-sm"
          style={{ fontSize: '1.1rem', lineHeight: '1.6' }}
        >
          {letterClicks === 0 && "Click the envelope to open your surprise..."}
          {letterClicks === 1 && "Keep clicking to reveal what's inside..."}
          {letterClicks === 2 && "Answer the question first!"}
        </motion.p>

        <motion.button
          onClick={handleLetterClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer focus:outline-none mt-4"
        >
          <motion.img
            src={envelopeImage}
            alt="Love envelope"
            className="w-80 h-auto max-w-full"
            animate={{
              y: letterClicks === 0 ? [0, -10, 0] : 0,
              rotate: letterClicks === 1 ? [0, -5, 5, -5, 5, 0] : 0,
              scale: letterClicks === 2 ? [1, 1.1, 1] : 1,
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.5 },
              scale: { duration: 0.3 },
            }}
          />

          {/* Click indicator dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: i <= letterClicks ? 1 : 0.7,
                  backgroundColor: i < letterClicks 
                    ? '#A8141D' 
                    : i === letterClicks 
                    ? '#990011' 
                    : '#D1D5DB'
                }}
                className="w-3 h-3 rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            ))}
          </div>
        </motion.button>
      </div>

      {/* Code Entry Section */}
      <div className="flex flex-col items-center gap-6 w-full md:w-1/2">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[#292528] text-center mb-6"
          style={{ fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.01em' }}
        >
          Enter the Secret Code 
        </motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {showHintOption && !showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-pink-50 border-2 border-[#A8141D]/30 rounded-xl p-4 space-y-3"
            >
              <p className="text-[#292528] text-center" style={{ fontSize: '0.95rem' }}>
                Having trouble? Would you like a hint?
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setShowHint(true)}
                  className="flex-1 bg-[#A8141D] hover:bg-[#990011] text-white rounded-xl"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Yes, show hint
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowHintOption(false)}
                  variant="outline"
                  className="flex-1 border-2 border-[#292528] text-[#292528] hover:bg-gray-100 rounded-xl"
                >
                  <EyeOff className="w-4 h-4 mr-2" />
                  No, I got this
                </Button>
              </div>
            </motion.div>
          )}

          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-pink-50 to-red-50 border-2 border-[#A8141D] rounded-xl p-4"
            >
              <p className="text-[#292528] text-center italic" style={{ fontSize: '0.95rem' }}>
                💡 Who saved your life when it was so difficult?
              </p>
            </motion.div>
          )}

          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code..."
            className="border-2 border-[#292528] focus:border-[#A8141D] text-center py-6 rounded-xl"
            style={{ fontSize: '1.1rem' }}
            autoFocus
          />

          {failedAttempts > 0 && failedAttempts < 3 && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#990011] text-center"
              style={{ fontSize: '0.9rem', fontWeight: '600' }}
            >
              Try again ({3 - failedAttempts} attempts remaining)
            </motion.p>
          )}

          <Button
            type="submit"
            className="w-full py-7 bg-gradient-to-r from-[#A8141D] to-[#990011] hover:from-[#990011] hover:to-[#A8141D] text-white shadow-xl border-none rounded-2xl transition-all transform hover:scale-105"
            style={{ fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.02em' }}
          >
            Unlock Letter 💖
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
