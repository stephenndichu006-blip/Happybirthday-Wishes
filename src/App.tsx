import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
import IntroScene from './components/scenes/IntroScene';
import RevealScene from './components/scenes/RevealScene';
import MessageScene from './components/scenes/MessageScene';
import CakeScene from './components/scenes/CakeScene';
import FinaleScene from './components/scenes/FinaleScene';

const SCENES = [
  'INTRO',
  'REVEAL',
  'MESSAGE',
  'CAKE',
  'FINALE'
];

const SCENE_DURATIONS: Record<string, number> = {
  INTRO: 6000,
  REVEAL: 8000,
  MESSAGE: 8000,
  CAKE: 8000,
  FINALE: 10000,
};

function App() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  useEffect(() => {
    const duration = SCENE_DURATIONS[SCENES[currentSceneIndex]];
    
    // Stop at the last scene
    if (currentSceneIndex < SCENES.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSceneIndex((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [currentSceneIndex]);

  const currentScene = SCENES[currentSceneIndex];

  return (
    <div className="min-h-screen bg-[#faf8f6] text-[#3c3c3c] overflow-hidden relative">
      <AnimatePresence mode="wait">
        {currentScene === 'INTRO' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <IntroScene />
          </motion.div>
        )}

        {currentScene === 'REVEAL' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <RevealScene />
          </motion.div>
        )}

        {currentScene === 'MESSAGE' && (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <MessageScene />
          </motion.div>
        )}

        {currentScene === 'CAKE' && (
          <motion.div
            key="cake"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <CakeScene />
          </motion.div>
        )}

        {currentScene === 'FINALE' && (
          <motion.div
            key="finale"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <FinaleScene />
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster position="top-center" expand={true} richColors />
      
      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-pink-500/20 w-full z-50">
        <motion.div
          key={currentSceneIndex}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: SCENE_DURATIONS[SCENES[currentSceneIndex]] / 1000, ease: "linear" }}
          className="h-full bg-pink-500"
        />
      </div>
      
      {/* Scene indicator */}
      <div className="fixed bottom-6 right-6 flex gap-2 z-50">
        {SCENES.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === currentSceneIndex ? 'bg-pink-500 w-6' : 'bg-pink-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;