import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { CheckCircle, Layers, Globe, Shield, Cpu } from 'lucide-react';

export function SummaryScene() {
  const units = [
    {
      unit: 'Unit 1 & 2',
      title: 'TCP/IP Fundamentals',
      topics: ['5 Layers', 'Addressing', 'IPv4/CIDR', 'DHCP', 'NAT', 'ARP', 'ICMP', 'IP Datagram'],
      icon: Layers,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      unit: 'Unit 3',
      title: 'Transport Layer',
      topics: ['TCP 3-Way Handshake', 'Sliding Window', 'Congestion Control', 'UDP', 'SCTP'],
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      unit: 'Unit 4',
      title: 'Routing & Application',
      topics: ['RIP, OSPF, BGP', 'DNS Resolution', 'HTTP', 'Email Protocols', 'FTP'],
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      unit: 'Unit 5',
      title: 'IPv6 & Security',
      topics: ['IPv6 Addressing', 'ICMPv6', 'Firewalls', 'VPN/IPsec', 'VoIP', 'SNMP', 'Tools'],
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-y-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative z-10 w-full max-w-7xl px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Packet size={120} />
          </motion.div>
          
          <h1 className="text-6xl text-white mb-6">Journey Complete!</h1>
          <p className="text-2xl text-blue-300 mb-4">Our packet has successfully traveled through the entire network</p>
          <div className="flex items-center justify-center gap-4">
            <div className="px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full">
              <p className="text-green-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                From Computer A → Computer B
              </p>
            </div>
          </div>
        </motion.div>

        {/* Complete Summary Grid */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {units.map((unit, index) => (
            <motion.div
              key={unit.unit}
              className={`p-8 bg-gradient-to-br ${unit.color} rounded-2xl shadow-2xl border-2 border-white/20`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <unit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{unit.unit}</p>
                  <h3 className="text-2xl text-white">{unit.title}</h3>
                </div>
              </div>
              
              <div className="space-y-2">
                {unit.topics.map((topic, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <p className="text-white text-sm">{topic}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Concepts Recap */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center">Key Takeaways</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: '5', label: 'TCP/IP Layers', sublabel: 'Application to Physical' },
              { number: '3', label: 'Address Types', sublabel: 'MAC, IP, Port' },
              { number: '10+', label: 'Protocols', sublabel: 'TCP, UDP, HTTP, DNS, etc.' },
              { number: '2', label: 'IP Versions', sublabel: 'IPv4 and IPv6' },
              { number: '3', label: 'Routing Protocols', sublabel: 'RIP, OSPF, BGP' },
              { number: '∞', label: 'Applications', sublabel: 'Endless possibilities' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl text-blue-400 mb-2">{stat.number}</div>
                <p className="text-white mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Network Stack Visualization */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-6 text-center">The Complete Data Flow</h3>
            <div className="space-y-3">
              {[
                { layer: 'Application', data: 'HTTP Request', color: 'bg-red-500/30' },
                { layer: 'Transport', data: '+ TCP Header', color: 'bg-orange-500/30' },
                { layer: 'Network', data: '+ IP Header', color: 'bg-yellow-500/30' },
                { layer: 'Data Link', data: '+ Ethernet Header', color: 'bg-green-500/30' },
                { layer: 'Physical', data: '→ Bits on Wire →', color: 'bg-blue-500/30' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`px-6 py-4 ${item.color} border border-white/20 rounded-lg flex items-center justify-between`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 4 + i * 0.2 }}
                >
                  <p className="text-white">{item.layer}</p>
                  <p className="text-gray-300 font-mono text-sm">{item.data}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-center text-gray-400 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
            >
              Encapsulation going down, Decapsulation going up!
            </motion.p>
          </div>
        </motion.div>

        {/* Final Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5.5, duration: 1 }}
        >
          <div className="inline-block">
            <motion.h2
              className="text-6xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Complete Computer Networks
            </motion.h2>
            <motion.p
              className="text-2xl text-blue-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6 }}
            >
              TCP/IP Model – Explained Visually
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6.5 }}
            >
              <div className="px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl">
                <p className="text-green-300 text-xl">🎓 Ready for your exam!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2,
              delay: 7 + Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
