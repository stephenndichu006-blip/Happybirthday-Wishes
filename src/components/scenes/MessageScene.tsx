import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Sparkles } from 'lucide-react';

const MessageScene: React.FC = () => {
  const words = "Wishing you a year full of love, happiness, and incredible adventures. You bring so much joy to everyone around you, and today is all about celebrating the wonderful person you are.".split(" ");

  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#fffafa] px-6 text-center">
      <div className="max-w-2xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-pink-400"><Heart fill="currentColor" size={32} /></motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="text-yellow-400"><Stars size={32} /></motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="text-purple-400"><Sparkles size={32} /></motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-medium text-gray-700"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="pt-8 italic text-pink-500 text-lg font-serif"
        >
          - With lots of love and best wishes
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 p-8 opacity-10">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d86fbc1c-2fa0-46c9-9726-5aaf3029560f/birthday-card-bg-b99f7576-1775243307322.webp" 
          alt="Pattern"
          className="w-48 h-48 object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 p-8 opacity-10 scale-x-[-1]">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d86fbc1c-2fa0-46c9-9726-5aaf3029560f/birthday-card-bg-b99f7576-1775243307322.webp" 
          alt="Pattern"
          className="w-48 h-48 object-contain"
        />
      </div>
    </div>
  );
};

export default MessageScene;