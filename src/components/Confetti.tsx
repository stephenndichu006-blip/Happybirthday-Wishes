import React from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC = () => {
  const pieces = Array.from({ length: 50 });
  const colors = ['#f472b6', '#fb7185', '#38bdf8', '#fbbf24', '#a855f7'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            top: -20,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 1.5,
            rotate: 0
          }}
          animate={{
            top: '120%',
            left: `${Math.random() * 100}%`,
            rotate: 360 * Math.random() * 5
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;