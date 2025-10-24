import { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { motion, AnimatePresence } from 'motion/react';

const playlist = [
  { title: 'Perfect - Ed Sheeran', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'All of Me - John Legend', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Thinking Out Loud - Ed Sheeran', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
];

export function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-[#A8141D] p-4 w-72"
          >
            <h3 className="text-[#292528] mb-3" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
              {playlist[currentTrack].title}
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={prevTrack}
                className="h-8 w-8 p-0 hover:bg-[#A8141D]/10"
              >
                <SkipBack className="h-4 w-4 text-[#292528]" />
              </Button>
              
              <Button
                size="sm"
                onClick={togglePlay}
                className="h-10 w-10 p-0 bg-[#A8141D] hover:bg-[#990011] rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-white" />
                ) : (
                  <Play className="h-5 w-5 text-white ml-0.5" />
                )}
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={nextTrack}
                className="h-8 w-8 p-0 hover:bg-[#A8141D]/10"
              >
                <SkipForward className="h-4 w-4 text-[#292528]" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-[#292528]" />
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>

            <audio
              ref={audioRef}
              src={playlist[currentTrack].url}
              onEnded={nextTrack}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-[#A8141D] hover:bg-[#990011] shadow-2xl border-2 border-white"
      >
        <Music className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}
