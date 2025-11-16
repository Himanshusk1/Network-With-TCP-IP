import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Hash, Globe, DoorOpen } from 'lucide-react';

export function AddressingScene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-5xl text-white mb-4">Addressing: The Packet's Identity</h2>
          <p className="text-xl text-blue-300">Three types of addresses guide our packet</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Physical Address (MAC) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl h-full">
              <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Hash className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl text-white text-center mb-4">Physical Address</h3>
              <div className="space-y-3">
                <div className="px-4 py-3 bg-black/30 rounded-lg border border-purple-400/20">
                  <p className="text-sm text-gray-400 mb-1">MAC Address</p>
                  <p className="text-purple-300 font-mono">AA:BB:CC:DD:EE:FF</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Hardware address burned into network card
                </p>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-300 text-xs">Data Link Layer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logical Address (IP) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-2xl h-full">
              <div className="w-16 h-16 bg-blue-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl text-white text-center mb-4">Logical Address</h3>
              <div className="space-y-3">
                <div className="px-4 py-3 bg-black/30 rounded-lg border border-blue-400/20">
                  <p className="text-sm text-gray-400 mb-1">IP Address</p>
                  <p className="text-blue-300 font-mono">192.168.1.10</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Software address assigned to device
                </p>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-xs">Network Layer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Port Address */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl h-full">
              <div className="w-16 h-16 bg-green-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <DoorOpen className="w-8 h-8 text-green-300" />
              </div>
              <h3 className="text-2xl text-white text-center mb-4">Port Address</h3>
              <div className="space-y-3">
                <div className="px-4 py-3 bg-black/30 rounded-lg border border-green-400/20">
                  <p className="text-sm text-gray-400 mb-1">Port Number</p>
                  <p className="text-green-300 font-mono">:80 (HTTP)</p>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  Identifies specific application or service
                </p>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-300 text-xs">Transport Layer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual representation with packet */}
        <motion.div
          className="flex items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="relative">
            <Packet size={100} />
            
            {/* Labels pointing to packet */}
            <motion.div
              className="absolute -top-16 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg whitespace-nowrap">
                <p className="text-green-300 text-sm">Port: 443</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-48 -translate-y-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
            >
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg whitespace-nowrap">
                <p className="text-blue-300 text-sm">IP: 192.168.1.10</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 -right-52 translate-y-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 }}
            >
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg whitespace-nowrap">
                <p className="text-purple-300 text-sm">MAC: AA:BB:CC:DD:EE:FF</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="inline-block px-8 py-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl">
            <p className="text-gray-300">
              🎯 Together, these three addresses ensure the packet reaches the correct device, application, and hardware interface
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
