import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Handshake, RefreshCw, TrendingUp } from 'lucide-react';

export function TCPScene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-y-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-5xl text-white mb-4">TCP - Transmission Control Protocol</h2>
          <p className="text-xl text-blue-300">Reliable, Connection-Oriented Transport</p>
        </motion.div>

        {/* 3-Way Handshake */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <Handshake className="w-8 h-8 text-blue-400" />
            3-Way Handshake - Connection Establishment
          </h3>

          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {/* Client */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                <p className="text-white text-2xl">Client</p>
              </div>
            </div>

            {/* Handshake steps */}
            <div className="flex-1 mx-8 space-y-6">
              {/* Step 1: SYN */}
              <motion.div
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="px-6 py-4 bg-blue-500/20 border-2 border-blue-400/50 rounded-lg relative">
                      <p className="text-blue-300 text-lg mb-1">1️⃣ SYN</p>
                      <p className="text-gray-400 text-sm">SEQ = 1000</p>
                      <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        animate={{ x: [0, 300] }}
                        transition={{ delay: 1, duration: 1 }}
                      >
                        <Packet size={30} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="ml-4 text-3xl text-blue-400">→</div>
                </div>
                <p className="text-gray-400 text-xs mt-2 ml-4">"Can we establish a connection?"</p>
              </motion.div>

              {/* Step 2: SYN-ACK */}
              <motion.div
                className="relative"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center">
                  <div className="mr-4 text-3xl text-purple-400">←</div>
                  <div className="flex-1">
                    <div className="px-6 py-4 bg-purple-500/20 border-2 border-purple-400/50 rounded-lg">
                      <p className="text-purple-300 text-lg mb-1">2️⃣ SYN-ACK</p>
                      <p className="text-gray-400 text-sm">SEQ = 2000, ACK = 1001</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2 mr-4 text-right">"Yes, I acknowledge. Here's my sequence."</p>
              </motion.div>

              {/* Step 3: ACK */}
              <motion.div
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="px-6 py-4 bg-green-500/20 border-2 border-green-400/50 rounded-lg">
                      <p className="text-green-300 text-lg mb-1">3️⃣ ACK</p>
                      <p className="text-gray-400 text-sm">ACK = 2001</p>
                    </div>
                  </div>
                  <div className="ml-4 text-3xl text-green-400">→</div>
                </div>
                <p className="text-gray-400 text-xs mt-2 ml-4">"Connection established!"</p>
              </motion.div>
            </div>

            {/* Server */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                <p className="text-white text-2xl">Server</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Sliding Window */}
          <motion.div
            className="p-8 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-cyan-300" />
              Sliding Window
            </h3>

            <div className="space-y-4">
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-lg">
                <p className="text-cyan-300 mb-3">Flow Control Mechanism</p>
                <div className="grid grid-cols-8 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((seg, i) => (
                    <div
                      key={seg}
                      className={`h-12 flex items-center justify-center rounded text-sm ${
                        i < 4 ? 'bg-green-500/50 text-white' : 'bg-gray-600/30 text-gray-400'
                      }`}
                    >
                      {seg}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-green-300">← Window Size: 4 →</span>
                  <span className="text-gray-400">Can send</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <p className="text-gray-300">Sender can transmit multiple segments</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <p className="text-gray-300">Window slides as ACKs received</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  <p className="text-gray-300">Prevents receiver overflow</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Congestion Control */}
          <motion.div
            className="p-8 bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-2 border-orange-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-300" />
              Congestion Control
            </h3>

            <div className="space-y-4">
              {/* Slow Start */}
              <div className="px-6 py-4 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                <p className="text-orange-300 mb-3">Slow Start</p>
                <div className="flex items-end gap-1 h-24">
                  {[1, 2, 4, 8, 16, 32, 64].map((val, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-orange-400 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${(val / 64) * 100}%` }}
                      transition={{ delay: 4 + i * 0.2, duration: 0.3 }}
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-2">Exponential growth: 1 → 2 → 4 → 8...</p>
              </div>

              {/* Congestion Avoidance */}
              <div className="px-6 py-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-300 mb-2">Congestion Avoidance</p>
                <p className="text-gray-400 text-sm">
                  After threshold: Linear increase (+1 per RTT)
                </p>
              </div>

              {/* Fast Recovery */}
              <div className="px-6 py-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 mb-2">Fast Retransmit & Recovery</p>
                <p className="text-gray-400 text-sm">
                  3 duplicate ACKs → Retransmit without waiting
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TCP Header */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">TCP Header</h3>
          <div className="grid grid-cols-6 gap-3">
            {[
              { name: 'Source Port', span: 2, color: 'bg-blue-500/30' },
              { name: 'Dest Port', span: 2, color: 'bg-purple-500/30' },
              { name: 'Sequence Number', span: 3, color: 'bg-green-500/30' },
              { name: 'Acknowledgment', span: 3, color: 'bg-cyan-500/30' },
              { name: 'Offset', span: 1, color: 'bg-orange-500/30' },
              { name: 'Flags', span: 1, color: 'bg-red-500/30' },
              { name: 'Window', span: 2, color: 'bg-yellow-500/30' },
              { name: 'Checksum', span: 1, color: 'bg-pink-500/30' },
              { name: 'Urgent Ptr', span: 1, color: 'bg-indigo-500/30' },
            ].map((field, i) => (
              <motion.div
                key={i}
                className={`${field.color} border border-white/20 rounded-lg p-3 text-center col-span-${field.span}`}
                style={{ gridColumn: `span ${field.span}` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.5 + i * 0.1 }}
              >
                <p className="text-white text-sm">{field.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center px-6 py-4 bg-blue-500/10 border border-blue-400/30 rounded-xl">
            <p className="text-gray-300">
              ✅ TCP ensures reliable delivery with acknowledgments, retransmissions, and flow control
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
