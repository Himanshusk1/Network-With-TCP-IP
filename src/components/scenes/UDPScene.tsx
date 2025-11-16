import { motion } from 'motion/react';
import { Zap, Check, X } from 'lucide-react';

export function UDPScene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
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
          <h2 className="text-5xl text-white mb-4">UDP - User Datagram Protocol</h2>
          <p className="text-xl text-blue-300">Fast, Connectionless Transport</p>
        </motion.div>

        {/* TCP vs UDP Comparison */}
        <div className="grid grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* TCP */}
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl text-white mb-6 text-center">TCP</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Connection-oriented</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Reliable delivery</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Ordered packets</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Flow control</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Error checking</p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">Higher overhead</p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">Slower</p>
              </div>
            </div>
            <div className="mt-6 px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg text-center">
              <p className="text-blue-300 text-sm">Use: Web, Email, File Transfer</p>
            </div>
          </motion.div>

          {/* UDP */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl text-white mb-6 text-center flex items-center justify-center gap-2">
              UDP <Zap className="w-6 h-6 text-yellow-400" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Connectionless</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Fast & lightweight</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Low overhead</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Simple header</p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">No reliability guarantee</p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">No flow control</p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <p className="text-gray-300">Packets may be lost/reordered</p>
              </div>
            </div>
            <div className="mt-6 px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg text-center">
              <p className="text-purple-300 text-sm">Use: Streaming, Gaming, DNS, VoIP</p>
            </div>
          </motion.div>
        </div>

        {/* UDP Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">UDP Header (Only 8 bytes!)</h3>
          <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30 rounded-2xl">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { name: 'Source Port', bits: '16 bits', color: 'bg-blue-500/30' },
                { name: 'Destination Port', bits: '16 bits', color: 'bg-purple-500/30' },
                { name: 'Length', bits: '16 bits', color: 'bg-green-500/30' },
                { name: 'Checksum', bits: '16 bits', color: 'bg-orange-500/30' },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  className={`${field.color} border border-white/20 rounded-lg p-6 text-center`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                >
                  <p className="text-white text-lg mb-1">{field.name}</p>
                  <p className="text-white/60 text-sm">{field.bits}</p>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 bg-green-500/20 border border-green-400/30 rounded-xl text-center">
              <p className="text-green-300 mb-2">+ Data Payload</p>
              <p className="text-gray-400 text-sm">Simple and efficient!</p>
            </div>
          </div>
        </motion.div>

        {/* Multiplexing/Demultiplexing */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">Port Multiplexing & Demultiplexing</h3>
          <div className="p-8 bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 border-2 border-indigo-400/30 rounded-2xl">
            <div className="grid grid-cols-3 gap-6">
              {/* Multiple apps */}
              <div className="space-y-3">
                <div className="px-4 py-3 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-center">
                  <p className="text-indigo-300 text-sm">App 1: Port 5000</p>
                </div>
                <div className="px-4 py-3 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-center">
                  <p className="text-indigo-300 text-sm">App 2: Port 5001</p>
                </div>
                <div className="px-4 py-3 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-center">
                  <p className="text-indigo-300 text-sm">App 3: Port 5002</p>
                </div>
              </div>

              {/* Transport layer */}
              <div className="flex items-center justify-center">
                <div className="px-6 py-8 bg-indigo-500/30 border-2 border-indigo-400/50 rounded-xl text-center">
                  <p className="text-white text-lg mb-2">Transport Layer</p>
                  <p className="text-indigo-300 text-sm">UDP/TCP</p>
                  <div className="mt-4 space-y-2">
                    <div className="text-2xl">⬇️ Mux</div>
                    <div className="text-2xl">⬆️ Demux</div>
                  </div>
                </div>
              </div>

              {/* Network */}
              <div className="flex items-center justify-center">
                <div className="px-6 py-12 bg-indigo-500/20 border border-indigo-400/30 rounded-xl text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <p className="text-white">Network</p>
                  <p className="text-indigo-300 text-sm mt-2">Single IP</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-center mt-6">
              Ports allow multiple applications to share the same network connection
            </p>
          </div>
        </motion.div>

        {/* SCTP mention */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <div className="px-8 py-6 bg-gradient-to-r from-teal-500/20 to-teal-700/20 border border-teal-400/30 rounded-xl text-center">
            <h3 className="text-xl text-white mb-3">📌 SCTP - Stream Control Transmission Protocol</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="px-4 py-2 bg-teal-500/20 rounded-lg">
                <p className="text-teal-300">Multi-homing</p>
              </div>
              <div className="px-4 py-2 bg-teal-500/20 rounded-lg">
                <p className="text-teal-300">Multi-streaming</p>
              </div>
              <div className="px-4 py-2 bg-teal-500/20 rounded-lg">
                <p className="text-teal-300">Message-oriented</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">Combines TCP reliability with UDP-like message boundaries</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
