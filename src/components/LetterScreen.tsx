import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { MessageCarousel } from './MessageCarousel';
import { QuestionsSection } from './QuestionsSection';
import catLaying from 'figma:asset/26db705a43eff34bf6da2fe44ca1594f5a6d79ca.png';
import catHappy from 'figma:asset/8f84f4d762657b783bc02eab1dcc1e34ac813b05.png';

export function LetterScreen() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Message Carousel */}
      <MessageCarousel />

      {/* Main Letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Hearts */}
        <div className="relative w-full h-20">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-1/4"
          >
            <Heart className="w-8 h-8 text-[#A8141D] fill-[#A8141D] opacity-60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-1/4"
          >
            <Heart className="w-6 h-6 text-[#990011] fill-[#990011] opacity-60" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Sparkles className="w-10 h-10 text-[#A8141D]" />
          </motion.div>
        </div>

        {/* Letter Container */}
        <motion.div
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-[#A8141D]"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#A8141D] text-center mb-6"
            style={{ fontSize: '2.5rem', fontWeight: '700' }}
          >
            Happy 2 Month Together! (˶ᵔ ᵕ ᵔ˶) ‹𝟹 
          </motion.h1>

          {/* Cat Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-6 flex justify-center gap-6 items-center flex-wrap"
          >
            <motion.img
              src={catLaying}
              alt="Relaxing cat"
              className="w-32 h-32 object-contain"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Heart className="w-8 h-8 text-[#A8141D] fill-[#A8141D]" />
            <motion.img
              src={catHappy}
              alt="Happy cat"
              className="w-32 h-32 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

        {/* Letter Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-4 text-[#292528]"
        >
          <p className="text-center" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            My Dearest Durochka,
          </p>
          
          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            I could not believe that I'm doing such stuff for someone tbh... But anyways, it's been 2 months? It means that I didn't see you for such time. I couldn't say that it's long period of time before, but now I understand how badly I want to see you again. Soooo, I told you that i like to celebrate such things. But things got rough and I had no resources to make you in real life present, sorry my bad tho... It was unfortunate, so I've decided to use my personal skills, to make you a present. Hope you like it. I will kill you if not, because I spent on this much more time than I've ever expected. So you better read and appreciate it.
          </p>

          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Jokes aside. I want to make sure you know how much you mean to me. Just like how your furry son brings us joy, you bring light to my darkest days. Thank you for being there when I needed you most, for supporting me when it was uneasy, and for choosing to walk this path together with me.
          </p>

          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            You're not only my girlfriend but also a partner, my inspiration, and my dearest friend. Every day, I find more reasons to appreciate you, admire you, and, most importantly, love you even more.
          </p>

          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            I was scared earliear to say "I love you", because I put a lot of meaning to this 3 simple words and by them I usually mean that I see everything beautiful in you - your kindness, your dreams, and even your unique quirks. But now I'm more confident to say it. I love how thoughtful you are, how you push yourself despite all the struggles, and how you constantly strive to be your best. You remind me of the strength and resilience it takes to face challenges head-on, and I’m so proud of you for everything you accomplish, even if you can’t always see it yourself.
          </p>

          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Your presence in my life has been a gift beyond words. You’ve taught me so much about love, trust, and vulnerability. With you, I’m learning what it means to truly give myself to someone, not out of need, but out of a genuine desire to make you feel valued, loved, and enough-because you are. I feel lucky to be the one who gets to remind you of that every day.
          </p>

          <p className="text-center" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            
          </p>

          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-[#A8141D]"
            style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem' }}
          >
            I love you endlessly! ❤️
          </motion.p>
        </motion.div>

          {/* Footer Hearts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-2 mt-6 justify-center"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                <Heart className="w-6 h-6 text-[#A8141D] fill-[#A8141D]" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Questions Section */}
      <QuestionsSection />
    </div>
  );
}
