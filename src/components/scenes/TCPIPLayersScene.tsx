import { motion } from 'motion/react';
import { Packet } from '../Packet';
import { Layers, Wifi, Globe, Cpu, MonitorPlay } from 'lucide-react';

export function TCPIPLayersScene() {
  const layers = [
    { name: 'Application Layer', icon: MonitorPlay, color: 'from-red-500 to-orange-500', description: 'HTTP, FTP, DNS, SMTP' },
    { name: 'Transport Layer', icon: Cpu, color: 'from-orange-500 to-yellow-500', description: 'TCP, UDP' },
    { name: 'Network Layer', icon: Globe, color: 'from-yellow-500 to-green-500', description: 'IP, ICMP, ARP' },
    { name: 'Data Link Layer', icon: Wifi, color: 'from-green-500 to-blue-500', description: 'Ethernet, MAC' },
    { name: 'Physical Layer', icon: Layers, color: 'from-blue-500 to-purple-500', description: 'Cables, Signals' },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-white mb-4">TCP/IP Model</h2>
          <p className="text-xl text-blue-300">5 Layers - Like Floors in a Digital Building</p>
        </motion.div>

        <div className="flex items-start justify-center gap-8">
          {/* Building visualization */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-80">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  className="relative mb-2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-r ${layer.color} shadow-xl border-2 border-white/20`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <layer.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-lg">{layer.name}</h3>
                        <p className="text-white/80 text-sm">{layer.description}</p>
                      </div>
                      <div className="text-white/60 text-3xl">
                        {5 - index}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Packet traveling through layers */}
          <motion.div
            className="relative h-[600px] w-40 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              animate={{
                y: [0, 500]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Packet size={60} />
              
              {/* Trail effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-transparent"
                style={{ height: 200 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Direction arrow */}
            <motion.div
              className="absolute left-full ml-8 top-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
            >
              <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg whitespace-nowrap">
                <p className="text-cyan-300 text-sm flex items-center gap-2">
                  <span>↓</span>
                  Packet descends through layers
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Info box */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <div className="p-6 bg-blue-500/10 border border-blue-400/30 rounded-xl backdrop-blur-sm">
            <p className="text-gray-300 text-center">
              Each layer adds its own header information (encapsulation) as the packet travels down the stack
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
