import { motion } from 'motion/react';
import { Search, Server } from 'lucide-react';

export function DNSScene() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
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
          <h2 className="text-5xl text-white mb-4">DNS - Domain Name System</h2>
          <p className="text-xl text-blue-300">The Internet's Phone Book</p>
        </motion.div>

        {/* DNS Resolution Process */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-8 text-center">DNS Resolution: www.example.com → 93.184.216.34</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  1
                </div>
                <div className="flex-1 p-6 bg-blue-500/20 border border-blue-400/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white mb-1">User types: <span className="text-blue-300 font-mono">www.example.com</span></p>
                      <p className="text-gray-400 text-sm">Browser asks DNS Resolver</p>
                    </div>
                    <Search className="w-8 h-8 text-blue-300" />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="flex items-center gap-4 ml-12"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                  2
                </div>
                <div className="flex-1 p-6 bg-purple-500/20 border border-purple-400/30 rounded-xl">
                  <p className="text-white mb-1">DNS Resolver → Root Server</p>
                  <p className="text-gray-400 text-sm">Root: "Try .com TLD server"</p>
                  <p className="text-purple-300 font-mono text-sm mt-2">→ 192.5.6.30</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="flex items-center gap-4 ml-24"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                  3
                </div>
                <div className="flex-1 p-6 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <p className="text-white mb-1">Resolver → .com TLD Server</p>
                  <p className="text-gray-400 text-sm">TLD: "Try example.com's nameserver"</p>
                  <p className="text-green-300 font-mono text-sm mt-2">→ ns1.example.com</p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="flex items-center gap-4 ml-36"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                  4
                </div>
                <div className="flex-1 p-6 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                  <p className="text-white mb-1">Resolver → Authoritative Nameserver</p>
                  <p className="text-gray-400 text-sm">Returns the IP address!</p>
                  <p className="text-cyan-300 font-mono text-lg mt-2">✅ 93.184.216.34</p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl">
                  5
                </div>
                <div className="flex-1 p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-400/50 rounded-xl">
                  <p className="text-white mb-1">Browser connects to <span className="text-amber-300 font-mono">93.184.216.34</span></p>
                  <p className="text-gray-400 text-sm">Website loads! 🎉</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* DNS Record Types */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">DNS Record Types</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { type: 'A', desc: 'IPv4 Address', example: '192.0.2.1', color: 'from-blue-500/20 to-blue-700/20 border-blue-400/30' },
              { type: 'AAAA', desc: 'IPv6 Address', example: '2001:db8::1', color: 'from-purple-500/20 to-purple-700/20 border-purple-400/30' },
              { type: 'CNAME', desc: 'Canonical Name', example: 'www → example.com', color: 'from-green-500/20 to-green-700/20 border-green-400/30' },
              { type: 'MX', desc: 'Mail Exchange', example: 'mail.example.com', color: 'from-orange-500/20 to-orange-700/20 border-orange-400/30' },
              { type: 'TXT', desc: 'Text Record', example: 'SPF, DKIM verification', color: 'from-cyan-500/20 to-cyan-700/20 border-cyan-400/30' },
              { type: 'NS', desc: 'Name Server', example: 'ns1.example.com', color: 'from-pink-500/20 to-pink-700/20 border-pink-400/30' },
            ].map((record, i) => (
              <motion.div
                key={record.type}
                className={`p-6 bg-gradient-to-br ${record.color} border rounded-xl`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5 + i * 0.1 }}
              >
                <div className="text-center mb-3">
                  <div className="inline-block px-4 py-2 bg-black/30 rounded-lg mb-2">
                    <p className="text-white text-xl">{record.type}</p>
                  </div>
                  <p className="text-white text-sm">{record.desc}</p>
                </div>
                <div className="px-3 py-2 bg-black/20 rounded text-center">
                  <p className="text-gray-300 text-xs font-mono">{record.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
