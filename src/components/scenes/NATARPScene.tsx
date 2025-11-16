import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Globe, Home, MessageSquare } from 'lucide-react';

export function NATARPScene() {
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
          <h2 className="text-5xl text-white mb-4">NAT & ARP</h2>
          <p className="text-xl text-blue-300">Address Translation Protocols</p>
        </motion.div>

        {/* NAT Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-blue-400" />
            NAT - Network Address Translation
          </h3>

          <div className="flex items-center justify-between max-w-5xl mx-auto">
            {/* Private Network */}
            <motion.div
              className="flex-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-8 h-8 text-green-300" />
                  <h4 className="text-2xl text-white">Private Network</h4>
                </div>
                <div className="space-y-3">
                  <div className="px-4 py-3 bg-black/30 rounded-lg border border-green-400/20">
                    <p className="text-sm text-gray-400 mb-1">Device 1</p>
                    <p className="text-green-300 font-mono">192.168.1.10</p>
                  </div>
                  <div className="px-4 py-3 bg-black/30 rounded-lg border border-green-400/20">
                    <p className="text-sm text-gray-400 mb-1">Device 2</p>
                    <p className="text-green-300 font-mono">192.168.1.20</p>
                  </div>
                  <div className="px-4 py-3 bg-black/30 rounded-lg border border-green-400/20">
                    <p className="text-sm text-gray-400 mb-1">Device 3</p>
                    <p className="text-green-300 font-mono">192.168.1.30</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">🔒 Private IPs (Not routable on Internet)</p>
              </div>
            </motion.div>

            {/* NAT Router */}
            <motion.div
              className="mx-8 flex flex-col items-center gap-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </motion.div>
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm">NAT Router</p>
              </div>
              <motion.div
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </motion.div>

            {/* Public Internet */}
            <motion.div
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-purple-300" />
                  <h4 className="text-2xl text-white">Public Internet</h4>
                </div>
                <div className="space-y-3">
                  <div className="px-4 py-3 bg-black/30 rounded-lg border border-purple-400/20 text-center">
                    <p className="text-sm text-gray-400 mb-1">All devices appear as</p>
                    <p className="text-purple-300 font-mono text-lg">203.0.113.5</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="px-3 py-2 bg-purple-500/10 rounded text-xs text-gray-400 border-l-4 border-purple-400">
                      192.168.1.10:5000 → 203.0.113.5:5000
                    </div>
                    <div className="px-3 py-2 bg-purple-500/10 rounded text-xs text-gray-400 border-l-4 border-purple-400">
                      192.168.1.20:5001 → 203.0.113.5:5001
                    </div>
                    <div className="px-3 py-2 bg-purple-500/10 rounded text-xs text-gray-400 border-l-4 border-purple-400">
                      192.168.1.30:5002 → 203.0.113.5:5002
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">🌐 Single Public IP</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="inline-block px-6 py-3 bg-blue-500/10 border border-blue-400/30 rounded-xl">
              <p className="text-gray-300">NAT translates private IPs to public IP, conserving IPv4 addresses</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ARP Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <MessageSquare className="w-8 h-8 text-cyan-400" />
            ARP - Address Resolution Protocol
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30 rounded-2xl">
              <p className="text-xl text-center text-white mb-8">
                "I know the IP address, but what's the MAC address?"
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* ARP Request */}
                <motion.div
                  className="p-6 bg-cyan-500/10 border border-cyan-400/20 rounded-xl"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.5 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">📢</div>
                    <h4 className="text-xl text-white">ARP Request</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">Sender IP</p>
                      <p className="text-cyan-300 font-mono">192.168.1.10</p>
                    </div>
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">Target IP</p>
                      <p className="text-cyan-300 font-mono">192.168.1.20</p>
                    </div>
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">Question</p>
                      <p className="text-cyan-300">"Who has 192.168.1.20?"</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs text-center mt-3">Broadcast to all devices</p>
                </motion.div>

                {/* ARP Reply */}
                <motion.div
                  className="p-6 bg-green-500/10 border border-green-400/20 rounded-xl"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 4 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">✅</div>
                    <h4 className="text-xl text-white">ARP Reply</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">My IP</p>
                      <p className="text-green-300 font-mono">192.168.1.20</p>
                    </div>
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">My MAC</p>
                      <p className="text-green-300 font-mono">AA:BB:CC:DD:EE:FF</p>
                    </div>
                    <div className="px-3 py-2 bg-black/30 rounded">
                      <p className="text-gray-400">Answer</p>
                      <p className="text-green-300">"That's me!"</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs text-center mt-3">Unicast to sender</p>
                </motion.div>
              </div>

              <motion.div
                className="text-center px-6 py-4 bg-black/30 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }}
              >
                <p className="text-gray-300">
                  ARP maps IP addresses (Layer 3) to MAC addresses (Layer 2)
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}