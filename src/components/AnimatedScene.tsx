import { motion } from 'motion/react';

interface AnimatedSceneProps {
  isPlaying: boolean;
}

export function AnimatedScene({ isPlaying }: AnimatedSceneProps) {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900 overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isPlaying ? {
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={isPlaying ? {
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-600/30 blur-3xl"
        style={{ right: '10%', top: '40%' }}
        animate={isPlaying ? {
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center circle with pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={isPlaying ? {
          rotate: 360,
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-48 h-48 rounded-full border-4 border-white/20"
          animate={isPlaying ? {
            scale: [1, 1.2, 1],
            borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)'],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Geometric shapes */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-20 h-20 border-4 border-cyan-400/50"
        animate={isPlaying ? {
          rotate: [0, 180, 360],
          scale: [1, 1.5, 1],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-1/4 bottom-1/4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg"
        animate={isPlaying ? {
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isPlaying ? {
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 1.2],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.2, 0.8, 1],
        }}
      >
        <h1 className="text-6xl text-white drop-shadow-2xl">
          Animated Experience
        </h1>
      </motion.div>

      {/* Particle trail */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-3 h-3 bg-white rounded-full"
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          animate={isPlaying ? {
            x: [0, Math.cos((i * Math.PI * 2) / 8) * 200],
            y: [0, Math.sin((i * Math.PI * 2) / 8) * 200],
            opacity: [1, 0],
            scale: [1, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Wave effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/50 to-transparent"
        animate={isPlaying ? {
          y: [0, -20, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
