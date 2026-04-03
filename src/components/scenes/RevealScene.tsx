import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Confetti from '../Confetti';

const RevealScene: React.FC = () => {
  useEffect(() => {
    toast.success("Yay! It's Ann's special day!", {
      duration: 5000,
    });
  }, []);

  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden bg-white">
      <Confetti />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-pink-400 mb-2">Happiest Birthday</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-sm pb-4">
            Ann Wanjiku
          </h1>
          <motion.div
            animate={{ rotate: [0, -2, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -right-4 md:-right-10 text-5xl md:text-7xl"
          >
            👑
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 text-xl text-gray-600 max-w-lg mx-auto leading-relaxed"
        >
          May your day be as beautiful and glowing as you are!
        </motion.p>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d86fbc1c-2fa0-46c9-9726-5aaf3029560f/celebration-bg-6f3a008b-1775243308855.webp" 
          alt="Balloons" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RevealScene;