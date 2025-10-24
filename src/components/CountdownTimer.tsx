import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function CountdownTimer() {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2025-08-24T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#A8141D]/30 p-8 mb-6"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <Calendar className="h-6 w-6 text-[#A8141D]" />
        </motion.div>
        <h3 className="text-[#292528] text-center" style={{ fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
          Time Together
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-4 text-center border-2 border-[#A8141D]/30 shadow-md">
          <motion.div
            key={timeElapsed.days}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#A8141D]"
            style={{ fontSize: '2.2rem', fontWeight: '800' }}
          >
            {timeElapsed.days}
          </motion.div>
          <div className="text-[#292528]/70 mt-1" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            DAYS
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-4 text-center border-2 border-[#A8141D]/30 shadow-md">
          <motion.div
            key={timeElapsed.hours}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#A8141D]"
            style={{ fontSize: '2.2rem', fontWeight: '800' }}
          >
            {timeElapsed.hours}
          </motion.div>
          <div className="text-[#292528]/70 mt-1" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            HOURS
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-4 text-center border-2 border-[#A8141D]/30 shadow-md">
          <motion.div
            key={timeElapsed.minutes}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#A8141D]"
            style={{ fontSize: '2.2rem', fontWeight: '800' }}
          >
            {timeElapsed.minutes}
          </motion.div>
          <div className="text-[#292528]/70 mt-1" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            MINUTES
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-4 text-center border-2 border-[#A8141D]/30 shadow-md">
          <motion.div
            key={timeElapsed.seconds}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#A8141D]"
            style={{ fontSize: '2.2rem', fontWeight: '800' }}
          >
            {timeElapsed.seconds}
          </motion.div>
          <div className="text-[#292528]/70 mt-1" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
            SECONDS
          </div>
        </div>
      </div>
    </motion.div>
  );
}
