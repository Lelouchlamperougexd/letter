import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Heart } from 'lucide-react';
import { Button } from './ui/button';

const questions = [
  {
    id: 1,
    question: "What was my first impression of you?",
    answer: "I was really amazed by you, when I saw your social media. I thought, 'Hmm, she is so talented and interesting, I wanna know her better.' Guitar, art, dancing are such a impressive skills, and know when I know you better, I can confirm that I was right about it.",
  },
  {
    id: 2,
    question: "What do I love most about you?",
    answer: "I genuinely love to listen you. Hearing your voice makes me want to stop everything and just focus on you. Your little giggles, your fake sarcastic laugh, the way you construct sentences - everything about your voice is music to my ears. Which",
  },
  {
    id: 3,
    question: "What's my favorite memory of us so far?",
    answer: "There so many things happend already. For example, when you said you were confident about me and I differ from others, was a really special moment to me. But if I have to choose best one, I would say how we were sitting in the car, listening music at the parking lot, and you started singing along with songs. I was incredibly happy that day" ,
  },
  {
    id: 4,
    question: "How do you make me feel?",
    answer: "Almost after each conversation with you, I feel like I want to say I love you, I just can't fight against it. Silly me, is too weak to win this battle, and I guess I would never want to win it anyway.",
    
  },
  {
    id: 5,
    question: "What am I looking forward to with you?",
    answer: "To be completely honest I'm terrified about future, there is so many variables that I can't control. But one thing I'm sure about is that I want you to be part of my future. But I wish us to face it together.",

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
