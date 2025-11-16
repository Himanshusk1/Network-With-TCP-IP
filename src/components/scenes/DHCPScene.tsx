import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Server, MonitorSmartphone } from 'lucide-react';

export function DHCPScene() {
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
          <h2 className="text-5xl text-white mb-4">DHCP Protocol</h2>
          <p className="text-xl text-blue-300">Dynamic Host Configuration Protocol</p>
          <p className="text-lg text-gray-400 mt-2">Automatic IP Address Assignment</p>
        </motion.div>

        <div className="flex items-center justify-between max-w-5xl mx-auto mb-12">
          {/* Client */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl mb-4">
              <MonitorSmartphone className="w-16 h-16 text-white" />
            </div>
            <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <p className="text-blue-300">Client</p>
            </div>
            <motion.div
              className="mt-4 px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-red-300 text-sm">No IP Address</p>
            </motion.div>
          </motion.div>

          {/* DHCP Server */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl mb-4">
              <Server className="w-16 h-16 text-white" />
            </div>
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
              <p className="text-purple-300">DHCP Server</p>
            </div>
            <motion.div
              className="mt-4 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-green-300 text-sm">IP Pool Available</p>
            </motion.div>
          </motion.div>
        </div>

        {/* DORA Process */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl text-white text-center mb-8">DORA Process (4 Steps)</h3>

          {/* 1. Discover */}
          <motion.div
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                1
              </div>
              <div className="flex-1 p-6 bg-gradient-to-r from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-xl">
                <h4 className="text-xl text-white mb-2 flex items-center gap-2">
                  <span className="text-2xl">🔍</span> DISCOVER
                </h4>
                <p className="text-gray-300 mb-2">Client broadcasts: "I need an IP address!"</p>
                <div className="px-4 py-2 bg-black/30 rounded-lg inline-block">
                  <p className="text-blue-300 font-mono text-sm">Broadcast to 255.255.255.255</p>
                </div>
              </div>
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-1/2"
                animate={{ x: [0, 100, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
              >
                <Packet size={40} />
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Offer */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                2
              </div>
              <div className="flex-1 p-6 bg-gradient-to-r from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-xl">
                <h4 className="text-xl text-white mb-2 flex items-center gap-2">
                  <span className="text-2xl">📮</span> OFFER
                </h4>
                <p className="text-gray-300 mb-2">Server offers an available IP address</p>
                <div className="px-4 py-2 bg-black/30 rounded-lg inline-block">
                  <p className="text-purple-300 font-mono text-sm">Offering: 192.168.1.100</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Request */}
          <motion.div
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                3
              </div>
              <div className="flex-1 p-6 bg-gradient-to-r from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-xl">
                <h4 className="text-xl text-white mb-2 flex items-center gap-2">
                  <span className="text-2xl">✋</span> REQUEST
                </h4>
                <p className="text-gray-300 mb-2">Client requests the offered IP address</p>
                <div className="px-4 py-2 bg-black/30 rounded-lg inline-block">
                  <p className="text-green-300 font-mono text-sm">Request: 192.168.1.100 please!</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Acknowledge */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                4
              </div>
              <div className="flex-1 p-6 bg-gradient-to-r from-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30 rounded-xl">
                <h4 className="text-xl text-white mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span> ACKNOWLEDGE
                </h4>
                <p className="text-gray-300 mb-2">Server confirms and assigns the IP</p>
                <div className="px-4 py-2 bg-black/30 rounded-lg inline-block">
                  <p className="text-cyan-300 font-mono text-sm">Confirmed! IP assigned for 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5 }}
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-2 border-green-400/30 rounded-xl">
            <p className="text-2xl text-green-300">🎉 IP Address Assigned Successfully!</p>
            <p className="text-gray-400 mt-2">Our packet now has its logical address</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
