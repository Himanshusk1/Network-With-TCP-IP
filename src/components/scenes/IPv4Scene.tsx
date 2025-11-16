import { motion } from 'motion/react';
import { Network, Split, Merge } from 'lucide-react';

export function IPv4Scene() {
  const classes = [
    { class: 'A', range: '0.0.0.0 - 127.255.255.255', network: '8 bits', color: 'from-red-500 to-red-600', usage: 'Large organizations' },
    { class: 'B', range: '128.0.0.0 - 191.255.255.255', network: '16 bits', color: 'from-orange-500 to-orange-600', usage: 'Medium organizations' },
    { class: 'C', range: '192.0.0.0 - 223.255.255.255', network: '24 bits', color: 'from-yellow-500 to-yellow-600', usage: 'Small organizations' },
    { class: 'D', range: '224.0.0.0 - 239.255.255.255', network: 'Multicast', color: 'from-green-500 to-green-600', usage: 'Multicast groups' },
    { class: 'E', range: '240.0.0.0 - 255.255.255.255', network: 'Reserved', color: 'from-blue-500 to-blue-600', usage: 'Research' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-y-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 w-full max-w-7xl px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-5xl text-white mb-4">IPv4 Addressing</h2>
          <p className="text-xl text-blue-300">Classful & Classless Addressing</p>
        </motion.div>

        {/* Classful Addressing */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">Classful Addressing (Traditional)</h3>
          <div className="grid grid-cols-5 gap-4">
            {classes.map((cls, index) => (
              <motion.div
                key={cls.class}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`p-4 bg-gradient-to-br ${cls.color} rounded-xl shadow-lg border border-white/20`}>
                  <div className="text-center mb-3">
                    <div className="text-4xl text-white mb-2">Class {cls.class}</div>
                    <div className="text-xs text-white/90">{cls.network}</div>
                  </div>
                  <div className="text-xs text-white/80 mb-2 font-mono text-center">{cls.range}</div>
                  <div className="text-xs text-white/70 text-center px-2">{cls.usage}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CIDR */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">CIDR (Classless Inter-Domain Routing)</h3>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/30 rounded-2xl">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="px-6 py-4 bg-black/30 rounded-xl border border-cyan-400/30">
                  <p className="text-3xl text-cyan-300 font-mono">192.168.1.0/24</p>
                </div>
                <div className="text-cyan-300 text-2xl">→</div>
                <div className="text-left">
                  <p className="text-white mb-2"><span className="text-cyan-400">/24</span> = Prefix length</p>
                  <p className="text-gray-400 text-sm">24 bits for network, 8 bits for hosts</p>
                  <p className="text-cyan-300 text-sm">= 256 addresses (254 usable)</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg text-center">
                  <p className="text-cyan-400 text-xl font-mono">/8</p>
                  <p className="text-gray-400 text-sm mt-1">16M hosts</p>
                </div>
                <div className="p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg text-center">
                  <p className="text-cyan-400 text-xl font-mono">/16</p>
                  <p className="text-gray-400 text-sm mt-1">65K hosts</p>
                </div>
                <div className="p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg text-center">
                  <p className="text-cyan-400 text-xl font-mono">/24</p>
                  <p className="text-gray-400 text-sm mt-1">256 hosts</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subnetting & Supernetting */}
        <motion.div
          className="grid grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          {/* Subnetting */}
          <div className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-500/30 rounded-xl flex items-center justify-center">
                <Split className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="text-2xl text-white">Subnetting</h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-black/30 rounded-lg border border-purple-400/20">
                <p className="text-purple-300 font-mono mb-2">192.168.1.0/24</p>
                <div className="text-sm text-gray-400">Divided into:</div>
              </div>
              <div className="pl-6 space-y-2">
                <div className="p-3 bg-purple-500/10 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-200 font-mono text-sm">192.168.1.0/26 (64 hosts)</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-200 font-mono text-sm">192.168.1.64/26 (64 hosts)</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-200 font-mono text-sm">192.168.1.128/26 (64 hosts)</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm pt-2">Breaking large network into smaller subnets</p>
            </div>
          </div>

          {/* Supernetting */}
          <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-500/30 rounded-xl flex items-center justify-center">
                <Merge className="w-7 h-7 text-green-300" />
              </div>
              <h3 className="text-2xl text-white">Supernetting</h3>
            </div>
            <div className="space-y-3">
              <div className="pl-6 space-y-2 mb-3">
                <div className="p-3 bg-green-500/10 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-200 font-mono text-sm">192.168.0.0/24</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-200 font-mono text-sm">192.168.1.0/24</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-200 font-mono text-sm">192.168.2.0/24</p>
                </div>
              </div>
              <div className="text-center text-green-300 text-xl">⬇️ Combined</div>
              <div className="p-4 bg-black/30 rounded-lg border border-green-400/20">
                <p className="text-green-300 font-mono mb-2">192.168.0.0/22</p>
                <div className="text-sm text-gray-400">1024 hosts total</div>
              </div>
              <p className="text-gray-400 text-sm pt-2">Combining small networks into larger one</p>
            </div>
          </div>
        </motion.div>

        {/* Special Addresses */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-lg">
              <span className="text-red-300 text-sm">🔴 Broadcast: x.x.x.255</span>
            </div>
            <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <span className="text-blue-300 text-sm">🔵 Network: x.x.x.0</span>
            </div>
            <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
              <span className="text-green-300 text-sm">🟢 Loopback: 127.0.0.1</span>
            </div>
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
              <span className="text-purple-300 text-sm">🟣 Private: 10.x, 172.16.x, 192.168.x</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
