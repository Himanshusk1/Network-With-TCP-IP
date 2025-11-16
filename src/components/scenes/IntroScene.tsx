import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Monitor } from 'lucide-react';

export function IntroScene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center space-y-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl text-white mb-4">The Journey Begins</h1>
          <p className="text-2xl text-blue-300">Meet your guide: The Data Packet</p>
        </motion.div>

        <div className="flex items-center justify-center gap-16">
          {/* Computer A */}
          <motion.div
            className="relative"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/50">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <p className="text-blue-300">Computer A</p>
              </div>
            </div>
          </motion.div>

          {/* Packet in center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <Packet size={80} />
            <motion.div
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg">
                <p className="text-cyan-300 text-sm">Our Hero!</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Computer B */}
          <motion.div
            className="relative"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/50">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="px-6 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
                <p className="text-purple-300">Computer B</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission text */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm">
            <p className="text-xl text-gray-300 leading-relaxed">
              Follow this packet's journey through the <span className="text-blue-400">TCP/IP network stack</span> as it travels from Computer A to Computer B, learning every networking concept along the way!
            </p>
          </div>
        </motion.div>

        {/* Animated arrow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-400">
              <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
