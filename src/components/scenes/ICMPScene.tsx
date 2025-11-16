import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Activity, AlertCircle, Clock, CheckCircle } from 'lucide-react';

export function ICMPScene() {
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
          <h2 className="text-5xl text-white mb-4">ICMP Protocol</h2>
          <p className="text-xl text-blue-300">Internet Control Message Protocol</p>
          <p className="text-lg text-gray-400 mt-2">Network Diagnostics & Error Reporting</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ping (Echo Request/Reply) */}
          <motion.div
            className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500/30 rounded-xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-green-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">Ping</h3>
                <p className="text-sm text-gray-400">Echo Request/Reply</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <motion.div
                className="flex items-center gap-3"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Packet size={40} />
                <div className="text-2xl">→</div>
                <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                  <p className="text-green-300 text-sm">Echo Request</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 flex-row-reverse"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
              >
                <Packet size={40} />
                <div className="text-2xl">←</div>
                <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                  <p className="text-green-300 text-sm">Echo Reply</p>
                </div>
              </motion.div>
            </div>

            <div className="px-4 py-3 bg-black/30 rounded-lg">
              <p className="text-green-300 font-mono text-sm">
                64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.2 ms
              </p>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              ✅ Tests if a host is reachable and measures round-trip time
            </p>
          </motion.div>

          {/* Destination Unreachable */}
          <motion.div
            className="p-8 bg-gradient-to-br from-red-500/20 to-red-700/20 border-2 border-red-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500/30 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">Destination Unreachable</h3>
                <p className="text-sm text-gray-400">Type 3</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="px-4 py-3 bg-red-500/10 border-l-4 border-red-400 rounded">
                <p className="text-red-300 mb-1">Code 0: Network Unreachable</p>
                <p className="text-xs text-gray-400">Can't reach network</p>
              </div>
              <div className="px-4 py-3 bg-red-500/10 border-l-4 border-red-400 rounded">
                <p className="text-red-300 mb-1">Code 1: Host Unreachable</p>
                <p className="text-xs text-gray-400">Host doesn't exist or is down</p>
              </div>
              <div className="px-4 py-3 bg-red-500/10 border-l-4 border-red-400 rounded">
                <p className="text-red-300 mb-1">Code 3: Port Unreachable</p>
                <p className="text-xs text-gray-400">Service not available</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              ❌ Informs sender that destination cannot be reached
            </p>
          </motion.div>

          {/* TTL Exceeded */}
          <motion.div
            className="p-8 bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-2 border-orange-400/30 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/30 rounded-xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-orange-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">Time Exceeded</h3>
                <p className="text-sm text-gray-400">TTL Expired</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[64, 32, 16, 8, 4, 2, 1, 0].map((ttl, i) => (
                  <motion.div
                    key={ttl}
                    className="px-3 py-2 bg-orange-500/20 border border-orange-400/30 rounded"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: ttl === 0 ? 0.3 : 1 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    <p className="text-orange-300 text-xs">TTL:{ttl}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-orange-300 text-sm">Each hop decrements TTL</p>
            </div>

            <div className="px-4 py-3 bg-black/30 rounded-lg">
              <p className="text-orange-300 text-sm">
                TTL reaches 0 → Packet dropped → ICMP Time Exceeded sent back
              </p>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              ⏱️ Prevents packets from looping forever in the network
            </p>
          </motion.div>

          {/* Redirect */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">Redirect</h3>
                <p className="text-sm text-gray-400">Route Optimization</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <p className="text-purple-300 text-sm">Host</p>
                </div>
                <motion.div
                  animate={{ x: [0, 30, 60] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <div className="text-2xl">→</div>
                </motion.div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <p className="text-purple-300 text-sm">Router A</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-purple-300 text-sm">↓ ICMP Redirect</p>
                <p className="text-gray-400 text-xs">"Use Router B instead!"</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <p className="text-purple-300 text-sm">Host</p>
                </div>
                <motion.div
                  animate={{ x: [0, 30, 60] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
                >
                  <div className="text-2xl">→</div>
                </motion.div>
                <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                  <p className="text-green-300 text-sm">Router B ✓</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center">
              🔄 Tells host to use a better route for future packets
            </p>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="inline-block px-8 py-4 bg-blue-500/10 border border-blue-400/30 rounded-xl">
            <p className="text-gray-300">
              ICMP is the messenger protocol - it reports errors and provides network diagnostics
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
