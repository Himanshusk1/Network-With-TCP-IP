import { motion } from 'motion/react';

export function IPDatagramScene() {
  const headerFields = [
    { name: 'Version', bits: '4', desc: 'IPv4 or IPv6', color: 'bg-red-500/30' },
    { name: 'Header Length', bits: '4', desc: 'Header size', color: 'bg-orange-500/30' },
    { name: 'ToS', bits: '8', desc: 'Type of Service', color: 'bg-yellow-500/30' },
    { name: 'Total Length', bits: '16', desc: 'Packet size', color: 'bg-green-500/30' },
    { name: 'Identification', bits: '16', desc: 'Fragment ID', color: 'bg-cyan-500/30' },
    { name: 'Flags', bits: '3', desc: 'Fragment flags', color: 'bg-blue-500/30' },
    { name: 'Fragment Offset', bits: '13', desc: 'Position in fragment', color: 'bg-purple-500/30' },
    { name: 'TTL', bits: '8', desc: 'Time to Live', color: 'bg-pink-500/30' },
    { name: 'Protocol', bits: '8', desc: 'TCP/UDP/ICMP', color: 'bg-rose-500/30' },
    { name: 'Header Checksum', bits: '16', desc: 'Error detection', color: 'bg-amber-500/30' },
    { name: 'Source IP', bits: '32', desc: 'Sender address', color: 'bg-emerald-500/30' },
    { name: 'Destination IP', bits: '32', desc: 'Receiver address', color: 'bg-teal-500/30' },
  ];

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
          <h2 className="text-5xl text-white mb-4">IP Datagram Structure</h2>
          <p className="text-xl text-blue-300">Anatomy of an IP Packet</p>
        </motion.div>

        {/* IP Header visualization */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-6 text-center">IP Header (20-60 bytes)</h3>
            
            <div className="grid grid-cols-4 gap-2 mb-6">
              {headerFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  className={`p-4 ${field.color} border border-white/20 rounded-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <p className="text-white text-sm mb-1">{field.name}</p>
                  <p className="text-white/60 text-xs mb-2">{field.bits} bits</p>
                  <p className="text-white/80 text-xs">{field.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="px-6 py-4 bg-green-500/20 border border-green-400/30 rounded-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <p className="text-green-300 text-lg mb-2">+ Data Payload</p>
              <p className="text-gray-400 text-sm">Actual data being transmitted (0-65,515 bytes)</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Fragmentation */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🧩</span>
              Fragmentation
            </h3>
            
            <div className="space-y-4">
              <div className="px-6 py-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 text-lg mb-2">Original Packet</p>
                <div className="h-12 bg-purple-500/40 rounded flex items-center justify-center">
                  <p className="text-white font-mono">MTU: 1500 bytes</p>
                </div>
              </div>

              <div className="text-center text-purple-300 text-xl">↓ Fragmented</div>

              <div className="space-y-2">
                <div className="px-4 py-3 bg-purple-500/10 border-l-4 border-purple-400 rounded">
                  <p className="text-purple-200 font-mono text-sm">Fragment 1: Offset=0, MF=1</p>
                </div>
                <div className="px-4 py-3 bg-purple-500/10 border-l-4 border-purple-400 rounded">
                  <p className="text-purple-200 font-mono text-sm">Fragment 2: Offset=185, MF=1</p>
                </div>
                <div className="px-4 py-3 bg-purple-500/10 border-l-4 border-purple-400 rounded">
                  <p className="text-purple-200 font-mono text-sm">Fragment 3: Offset=370, MF=0</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Large packets split when MTU is exceeded
            </p>
          </motion.div>

          {/* Checksum */}
          <motion.div
            className="p-8 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border-2 border-cyan-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              Header Checksum
            </h3>

            <div className="space-y-4">
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-lg">
                <p className="text-cyan-300 text-sm mb-3">Purpose: Error Detection</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                    <p className="text-gray-300 text-sm">Sum all header fields</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                    <p className="text-gray-300 text-sm">Take one's complement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                    <p className="text-gray-300 text-sm">Receiver verifies integrity</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-black/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 text-sm">If checksum matches:</p>
                  <p className="text-green-300 text-lg">✅</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">If checksum fails:</p>
                  <p className="text-red-300 text-lg">❌ Drop packet</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Ensures header wasn't corrupted in transit
            </p>
          </motion.div>
        </div>

        {/* IPsec */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <div className="p-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-400/30 rounded-2xl">
            <h3 className="text-3xl text-white mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🔒</span>
              IPsec - IP Security
            </h3>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-amber-500/10 border border-amber-400/20 rounded-xl">
                <div className="text-5xl mb-4">🔐</div>
                <h4 className="text-xl text-white mb-2">Encryption</h4>
                <p className="text-gray-400 text-sm">Confidentiality of data</p>
              </div>

              <div className="text-center p-6 bg-amber-500/10 border border-amber-400/20 rounded-xl">
                <div className="text-5xl mb-4">✍️</div>
                <h4 className="text-xl text-white mb-2">Authentication</h4>
                <p className="text-gray-400 text-sm">Verify packet source</p>
              </div>

              <div className="text-center p-6 bg-amber-500/10 border border-amber-400/20 rounded-xl">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-xl text-white mb-2">Integrity</h4>
                <p className="text-gray-400 text-sm">Data not tampered</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="px-6 py-4 bg-black/30 rounded-lg border border-amber-400/20">
                <p className="text-amber-300 mb-2">AH (Authentication Header)</p>
                <p className="text-gray-400 text-sm">Authentication + Integrity</p>
              </div>
              <div className="px-6 py-4 bg-black/30 rounded-lg border border-amber-400/20">
                <p className="text-amber-300 mb-2">ESP (Encapsulating Security Payload)</p>
                <p className="text-gray-400 text-sm">Encryption + Authentication + Integrity</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
