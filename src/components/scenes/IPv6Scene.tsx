import { motion } from 'motion/react';
import { ArrowRight, Globe2 } from 'lucide-react';

export function IPv6Scene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-y-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="text-5xl text-white mb-4">IPv6 - The Future of Internet</h2>
          <p className="text-xl text-blue-300">Next Generation Internet Protocol</p>
        </motion.div>

        {/* IPv4 vs IPv6 */}
        <div className="grid grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          <motion.div
            className="p-8 bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-2 border-orange-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl text-white mb-6 text-center">IPv4 (Old)</h3>
            <div className="space-y-4">
              <div className="px-6 py-4 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                <p className="text-orange-300 text-sm mb-1">Address Format</p>
                <p className="text-white font-mono">192.168.1.1</p>
                <p className="text-gray-400 text-xs mt-1">Dotted decimal (32-bit)</p>
              </div>
              <div className="px-6 py-4 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                <p className="text-orange-300 text-sm mb-1">Address Space</p>
                <p className="text-white text-xl">~4.3 Billion</p>
                <p className="text-gray-400 text-xs mt-1">2³² addresses</p>
              </div>
              <div className="px-6 py-4 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                <p className="text-orange-300 text-sm mb-1">Header Size</p>
                <p className="text-white">20-60 bytes</p>
              </div>
              <div className="px-6 py-4 bg-red-500/20 border border-red-400/30 rounded-lg text-center">
                <p className="text-red-300">❌ Address Exhaustion</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl text-white mb-6 text-center">IPv6 (New)</h3>
            <div className="space-y-4">
              <div className="px-6 py-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Address Format</p>
                <p className="text-white font-mono text-sm">2001:0db8:85a3::8a2e:0370:7334</p>
                <p className="text-gray-400 text-xs mt-1">Hexadecimal (128-bit)</p>
              </div>
              <div className="px-6 py-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Address Space</p>
                <p className="text-white text-xl">340 Undecillion</p>
                <p className="text-gray-400 text-xs mt-1">2¹²⁸ addresses</p>
              </div>
              <div className="px-6 py-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Header Size</p>
                <p className="text-white">40 bytes (fixed)</p>
              </div>
              <div className="px-6 py-4 bg-green-500/20 border border-green-400/30 rounded-lg text-center">
                <p className="text-green-300">✅ Unlimited Addresses</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IPv6 Features */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">IPv6 Key Features</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Simplified Header', icon: '📋', desc: 'Fixed 40-byte header for faster processing' },
              { title: 'No NAT Required', icon: '🔓', desc: 'Every device can have unique global address' },
              { title: 'Better Security', icon: '🔒', desc: 'IPsec mandatory, built-in encryption' },
              { title: 'Auto-configuration', icon: '⚙️', desc: 'SLAAC - devices configure themselves' },
              { title: 'No Fragmentation', icon: '🧩', desc: 'Path MTU discovery prevents fragmentation' },
              { title: 'Mobility Support', icon: '📱', desc: 'Better support for mobile devices' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/30 rounded-xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IPv6 Address Types */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">IPv6 Address Types</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-400/30 rounded-xl">
              <h4 className="text-xl text-white mb-4 text-center">Unicast</h4>
              <div className="space-y-2 text-sm">
                <div className="px-3 py-2 bg-green-500/20 rounded">
                  <p className="text-green-300 font-mono">2001::/3</p>
                  <p className="text-gray-400 text-xs">Global unicast</p>
                </div>
                <div className="px-3 py-2 bg-green-500/20 rounded">
                  <p className="text-green-300 font-mono">fe80::/10</p>
                  <p className="text-gray-400 text-xs">Link-local</p>
                </div>
                <div className="px-3 py-2 bg-green-500/20 rounded">
                  <p className="text-green-300 font-mono">::1</p>
                  <p className="text-gray-400 text-xs">Loopback</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 text-center">One-to-one communication</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-400/30 rounded-xl">
              <h4 className="text-xl text-white mb-4 text-center">Multicast</h4>
              <div className="space-y-2 text-sm">
                <div className="px-3 py-2 bg-blue-500/20 rounded">
                  <p className="text-blue-300 font-mono">ff00::/8</p>
                  <p className="text-gray-400 text-xs">All multicast</p>
                </div>
                <div className="px-3 py-2 bg-blue-500/20 rounded">
                  <p className="text-blue-300 font-mono">ff02::1</p>
                  <p className="text-gray-400 text-xs">All nodes</p>
                </div>
                <div className="px-3 py-2 bg-blue-500/20 rounded">
                  <p className="text-blue-300 font-mono">ff02::2</p>
                  <p className="text-gray-400 text-xs">All routers</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 text-center">One-to-many communication</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/30 rounded-xl">
              <h4 className="text-xl text-white mb-4 text-center">Anycast</h4>
              <div className="space-y-2 text-sm">
                <div className="px-3 py-2 bg-purple-500/20 rounded">
                  <p className="text-purple-300">Same as unicast</p>
                </div>
                <div className="px-3 py-2 bg-purple-500/20 rounded">
                  <p className="text-purple-300 text-xs">Multiple devices share same address</p>
                </div>
                <div className="px-3 py-2 bg-purple-500/20 rounded">
                  <p className="text-purple-300 text-xs">Packet goes to nearest one</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 text-center">One-to-nearest communication</p>
            </div>
          </div>
        </motion.div>

        {/* ICMPv6 */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-6 text-center flex items-center justify-center gap-3">
              <Globe2 className="w-8 h-8 text-cyan-400" />
              ICMPv6
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-300 mb-2">Neighbor Discovery (ND)</p>
                <p className="text-gray-400 text-sm">Replaces ARP, finds neighbors on link</p>
              </div>
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-300 mb-2">Router Advertisement</p>
                <p className="text-gray-400 text-sm">Routers announce their presence</p>
              </div>
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-300 mb-2">Multicast Listener Discovery</p>
                <p className="text-gray-400 text-sm">Manages multicast group membership</p>
              </div>
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-300 mb-2">Path MTU Discovery</p>
                <p className="text-gray-400 text-sm">Determines maximum packet size</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
