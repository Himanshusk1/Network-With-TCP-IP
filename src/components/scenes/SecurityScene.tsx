import { motion } from 'motion/react';
import { Shield, Lock, AlertTriangle, Eye, Zap } from 'lucide-react';

export function SecurityScene() {
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
          <h2 className="text-5xl text-white mb-4">Network Security & Tools</h2>
          <p className="text-xl text-blue-300">Protecting the Network</p>
        </motion.div>

        {/* Firewalls */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-red-400" />
            Firewall - Network Guardian
          </h3>
          <div className="p-8 bg-gradient-to-br from-red-500/20 to-red-700/20 border-2 border-red-400/30 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="px-6 py-4 bg-red-500/20 border border-red-400/30 rounded-xl">
                <p className="text-red-300 text-sm mb-1">External Network</p>
                <p className="text-white">Internet (Untrusted)</p>
              </div>

              <div className="flex-1 mx-8">
                <motion.div
                  className="relative h-32 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center border-4 border-red-400"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239,68,68,0.5)',
                      '0 0 40px rgba(239,68,68,0.8)',
                      '0 0 20px rgba(239,68,68,0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-white mx-auto mb-2" />
                    <p className="text-white text-2xl">FIREWALL</p>
                  </div>
                  
                  {/* Packets being filtered */}
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                    animate={{ x: [-100, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded" />
                  </motion.div>
                  <motion.div
                    className="absolute left-0 top-1/3"
                    animate={{ x: [-100, -20], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white">✕</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="px-6 py-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                <p className="text-green-300 text-sm mb-1">Internal Network</p>
                <p className="text-white">LAN (Trusted)</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="px-4 py-3 bg-red-500/10 border border-red-400/20 rounded-lg text-center">
                <p className="text-red-300 mb-1">Packet Filtering</p>
                <p className="text-gray-400 text-xs">Based on IP, Port, Protocol</p>
              </div>
              <div className="px-4 py-3 bg-red-500/10 border border-red-400/20 rounded-lg text-center">
                <p className="text-red-300 mb-1">Stateful Inspection</p>
                <p className="text-gray-400 text-xs">Tracks connection state</p>
              </div>
              <div className="px-4 py-3 bg-red-500/10 border border-red-400/20 rounded-lg text-center">
                <p className="text-red-300 mb-1">Application Layer</p>
                <p className="text-gray-400 text-xs">Deep packet inspection</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* VPN */}
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-blue-300" />
              VPN & IPsec
            </h3>
            <div className="space-y-4">
              <div className="px-6 py-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 mb-2">VPN Tunnel</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">User</span>
                  <span className="text-blue-300">🔒 Encrypted 🔒</span>
                  <span className="text-gray-400">Server</span>
                </div>
              </div>
              <div className="px-4 py-3 bg-blue-500/10 rounded-lg">
                <p className="text-blue-300 text-sm mb-2">IPsec Modes:</p>
                <div className="space-y-1 text-xs">
                  <p className="text-gray-400">• Transport: End-to-end encryption</p>
                  <p className="text-gray-400">• Tunnel: Gateway-to-gateway</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-blue-500/10 rounded-lg">
                <p className="text-blue-300 text-sm mb-2">Protocols:</p>
                <div className="space-y-1 text-xs">
                  <p className="text-gray-400">• AH: Authentication Header</p>
                  <p className="text-gray-400">• ESP: Encryption + Auth</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VoIP & RTP */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-purple-300" />
              VoIP & RTP
            </h3>
            <div className="space-y-4">
              <div className="px-6 py-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 mb-2">Voice over IP</p>
                <p className="text-gray-400 text-sm">Transmit voice as data packets</p>
              </div>
              <div className="px-4 py-3 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm mb-2">RTP (Real-time Transport)</p>
                <div className="space-y-1 text-xs">
                  <p className="text-gray-400">• Delivers audio/video streams</p>
                  <p className="text-gray-400">• Timestamp & sequence numbers</p>
                  <p className="text-gray-400">• Usually runs over UDP</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm mb-2">Related Protocols:</p>
                <div className="space-y-1 text-xs">
                  <p className="text-gray-400">• SIP: Session Initiation</p>
                  <p className="text-gray-400">• RTCP: Quality monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SNMP */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-6 text-center flex items-center justify-center gap-3">
              <Eye className="w-6 h-6 text-green-300" />
              SNMP - Network Monitoring
            </h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <p className="text-white text-2xl">🖥️</p>
                </div>
                <p className="text-green-300 mb-1">SNMP Manager</p>
                <p className="text-gray-400 text-xs">Monitoring station</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-green-400 text-3xl">⇄</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <p className="text-white text-2xl">📡</p>
                </div>
                <p className="text-green-300 mb-1">SNMP Agents</p>
                <p className="text-gray-400 text-xs">Network devices</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="px-4 py-3 bg-green-500/10 rounded-lg text-center">
                <p className="text-green-300">GET</p>
                <p className="text-gray-400 text-xs">Retrieve data</p>
              </div>
              <div className="px-4 py-3 bg-green-500/10 rounded-lg text-center">
                <p className="text-green-300">SET</p>
                <p className="text-gray-400 text-xs">Configure device</p>
              </div>
              <div className="px-4 py-3 bg-green-500/10 rounded-lg text-center">
                <p className="text-green-300">TRAP</p>
                <p className="text-gray-400 text-xs">Alert notification</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Network Tools */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">Network Analysis Tools</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: 'Wireshark', icon: '🦈', desc: 'Packet analyzer & capture', color: 'from-blue-500/20 to-blue-600/20 border-blue-400/30' },
              { name: 'Packet Tracer', icon: '📡', desc: 'Network simulation', color: 'from-green-500/20 to-green-600/20 border-green-400/30' },
              { name: 'Nmap', icon: '🗺️', desc: 'Network scanner', color: 'from-purple-500/20 to-purple-600/20 border-purple-400/30' },
              { name: 'Nessus', icon: '🔍', desc: 'Vulnerability scanner', color: 'from-orange-500/20 to-orange-600/20 border-orange-400/30' },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                className={`p-6 bg-gradient-to-br ${tool.color} border rounded-xl text-center`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.5 + i * 0.1 }}
              >
                <div className="text-5xl mb-3">{tool.icon}</div>
                <h4 className="text-white mb-2">{tool.name}</h4>
                <p className="text-gray-400 text-sm">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
