import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Heart } from 'lucide-react';
import { Button } from './ui/button';

const questions = [
  {
    id: 1,
    question: "What do I love most about you?",
    answer: "Everything! But especially your kindness, your beautiful smile, and the way you make me feel like I can conquer the world. You have the most caring heart I've ever known.",
    image: "https://images.unsplash.com/photo-1591969851586-adbbd4accf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZXxlbnwxfHx8fDE3NjEyMDk1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    question: "What's my favorite memory of us so far?",
    answer: "Every moment is precious, but I especially cherish our quiet moments together - just talking, laughing, and being ourselves. Those simple times mean the world to me.",
    image: "https://images.unsplash.com/photo-1607005813965-1d5dc0e6246f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYxMjkwOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    question: "How do you make me feel?",
    answer: "You make me feel loved, safe, understood, and incredibly happy. With you, I can be my true self. You've shown me what it means to be truly cherished.",
    image: "https://images.unsplash.com/photo-1675188012164-2cedcf8fa19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1lbW9yaWVzfGVufDF8fHx8MTc2MTIxNjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    question: "What am I looking forward to with you?",
    answer: "Everything! I'm excited for all our future adventures, building a life together, making more beautiful memories, and growing old with you by my side. Every day with you is a gift.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0fGVufDF8fHx8MTc2MTI2NjE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function QuestionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#A8141D] p-6"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <Heart className="h-5 w-5 text-[#A8141D] fill-[#A8141D]" />
        <h3 className="text-[#292528] text-center" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Questions About Us
        </h3>
      </div>

      <div className="space-y-3">
        {questions.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-white/80 rounded-xl overflow-hidden border border-[#A8141D]/30"
          >
            <Button
              onClick={() => toggleQuestion(item.id)}
              variant="ghost"
              className="w-full justify-between p-4 hover:bg-[#A8141D]/5 h-auto"
            >
              <span className="text-[#292528] text-left" style={{ fontSize: '1rem', fontWeight: '500' }}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-[#A8141D] flex-shrink-0" />
              </motion.div>
            </Button>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 space-y-3">
                    <img
                      src={item.image}
                      alt="Memory"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-[#292528]" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
