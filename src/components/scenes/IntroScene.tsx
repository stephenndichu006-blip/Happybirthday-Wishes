import React from 'react';
import { motion } from 'framer-motion';

const IntroScene: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-8 bg-gradient-to-br from-pink-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-200"
      >
        <span className="text-white text-3xl font-bold">AW</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl text-pink-600 font-medium tracking-widest uppercase">Something Special is Coming</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 italic">For a very special person...</h1>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 3, delay: 2.5 }}
        className="h-[2px] bg-pink-300 rounded-full mx-auto"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="text-gray-400 font-light"
      >
        Sit back and enjoy the celebration
      </motion.p>
    </div>
  );
};

export default IntroScene;