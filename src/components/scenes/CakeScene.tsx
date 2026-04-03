import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const CakeScene: React.FC = () => {
  const [isBlown, setIsBlown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlown(true);
      toast("Wish coming true in 3, 2, 1...", {
        icon: '✨',
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Make a Wish, Ann!</h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm">Blow out the virtual candles</p>
      </motion.div>

      <div className="relative">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d86fbc1c-2fa0-46c9-9726-5aaf3029560f/birthday-cake-9ef28351-1775243308586.webp"
          alt="Birthday Cake"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-8 border-white"
        />

        <AnimatePresence>
          {!isBlown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 2, filter: 'blur(20px)' }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                  }}
                  className="w-3 h-8 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full blur-[2px]"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {isBlown && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-4xl"
          >
            💨
          </motion.div>
        )}
      </div>

      {isBlown && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-12 text-2xl font-serif italic text-pink-600 font-semibold"
        >
          ✨ May all your dreams come true! ✨
        </motion.div>
      )}
    </div>
  );
};

export default CakeScene;