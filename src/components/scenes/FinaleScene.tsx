import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Gift, PartyPopper } from 'lucide-react';

const FinaleScene: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <div className="flex justify-center mb-8">
           <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-6 bg-white/20 backdrop-blur-md rounded-full"
           >
              <PartyPopper size={48} />
           </motion.div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold">Cheers to You, Ann!</h1>
        <p className="text-xl md:text-2xl font-light max-w-xl mx-auto opacity-90">
          The best is yet to come. Enjoy your incredible day to the fullest!
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
          >
            <Gift size={20} />
            Unwrap Your Joy
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-pink-700 text-white rounded-full font-bold shadow-lg flex items-center justify-center gap-2 border border-pink-400"
          >
            <Share2 size={20} />
            Share the Love
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-12 text-sm opacity-60 uppercase tracking-widest"
        >
          Ann Wanjiku • 2024 Celebration
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FinaleScene;