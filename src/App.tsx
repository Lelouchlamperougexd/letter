import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RejectionScreen } from './components/RejectionScreen';
import { CodeEntryScreen } from './components/CodeEntryScreen';
import { LetterScreen } from './components/LetterScreen';
import { MusicPlayer } from './components/MusicPlayer';
import backgroundImage from './assets/kuromi.jpg';

type Screen = 'welcome' | 'rejection' | 'codeEntry' | 'letter';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/40 to-red-100/50 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-white/20" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          {currentScreen === 'welcome' && (
            <WelcomeScreen
              key="welcome"
              onYes={() => setCurrentScreen('codeEntry')}
              onNo={() => setCurrentScreen('rejection')}
            />
          )}
          
          {currentScreen === 'rejection' && (
            <RejectionScreen
              key="rejection"
              onTryAgain={() => setCurrentScreen('welcome')}
            />
          )}
          
          {currentScreen === 'codeEntry' && (
            <CodeEntryScreen
              key="codeEntry"
              onCorrectCode={() => setCurrentScreen('letter')}
            />
          )}
          
          {currentScreen === 'letter' && (
            <LetterScreen key="letter" />
          )}
        </AnimatePresence>
      </div>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}
