import { motion } from 'motion/react';
import { Navigation, Map, Globe } from 'lucide-react';

export function RoutingScene() {
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
          <h2 className="text-5xl text-white mb-4">Routing Protocols</h2>
          <p className="text-xl text-blue-300">Finding the Best Path</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* RIP */}
          <motion.div
            className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/30 rounded-xl flex items-center justify-center">
                <Navigation className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">RIP</h3>
                <p className="text-sm text-gray-400">Routing Information Protocol</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Type</p>
                <p className="text-white">Distance Vector</p>
              </div>
              <div className="px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Metric</p>
                <p className="text-white">Hop Count</p>
              </div>
              <div className="px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Max Hops</p>
                <p className="text-white">15 hops</p>
              </div>
              <div className="px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                <p className="text-blue-300 text-sm mb-1">Update</p>
                <p className="text-white">Every 30 seconds</p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2">
                {['A', 'B', 'C', 'D'].map((node, i) => (
                  <motion.div
                    key={node}
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.2 }}
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      {node}
                    </div>
                    {i < 3 && <div className="w-8 h-0.5 bg-blue-400 mx-1" />}
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 text-xs mt-3">Simple hop counting</p>
            </div>

            <div className="px-4 py-3 bg-black/30 rounded-lg">
              <p className="text-gray-400 text-sm text-center">
                ✅ Simple<br />
                ❌ Limited scalability<br />
                ❌ Slow convergence
              </p>
            </div>
          </motion.div>

          {/* OSPF */}
          <motion.div
            className="p-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-2 border-purple-400/30 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center">
                <Map className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">OSPF</h3>
                <p className="text-sm text-gray-400">Open Shortest Path First</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 text-sm mb-1">Type</p>
                <p className="text-white">Link State</p>
              </div>
              <div className="px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 text-sm mb-1">Metric</p>
                <p className="text-white">Cost (bandwidth)</p>
              </div>
              <div className="px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 text-sm mb-1">Algorithm</p>
                <p className="text-white">Dijkstra's SPF</p>
              </div>
              <div className="px-4 py-3 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                <p className="text-purple-300 text-sm mb-1">Areas</p>
                <p className="text-white">Hierarchical</p>
              </div>
            </div>

            {/* Network topology map */}
            <div className="mb-4">
              <div className="relative h-24">
                {/* Nodes */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                />
                <motion.div
                  className="absolute bottom-0 left-4 w-8 h-8 bg-purple-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 }}
                />
                <motion.div
                  className="absolute bottom-0 right-4 w-8 h-8 bg-purple-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.7 }}
                />
                {/* Connections */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="50%" y1="10" x2="20" y2="90" stroke="#a855f7" strokeWidth="2" />
                  <line x1="50%" y1="10" x2="80%" y2="90" stroke="#a855f7" strokeWidth="2" />
                  <line x1="20" y1="90" x2="80%" y2="90" stroke="#a855f7" strokeWidth="2" strokeDasharray="4" />
                </svg>
              </div>
              <p className="text-center text-gray-400 text-xs mt-3">Complete network topology map</p>
            </div>

            <div className="px-4 py-3 bg-black/30 rounded-lg">
              <p className="text-gray-400 text-sm text-center">
                ✅ Fast convergence<br />
                ✅ Scalable<br />
                ✅ Efficient path calculation
              </p>
            </div>
          </motion.div>

          {/* BGP */}
          <motion.div
            className="p-8 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500/30 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-300" />
              </div>
              <div>
                <h3 className="text-2xl text-white">BGP</h3>
                <p className="text-sm text-gray-400">Border Gateway Protocol</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="px-4 py-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 text-sm mb-1">Type</p>
                <p className="text-white">Path Vector</p>
              </div>
              <div className="px-4 py-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 text-sm mb-1">Scope</p>
                <p className="text-white">Internet / AS</p>
              </div>
              <div className="px-4 py-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 text-sm mb-1">Metric</p>
                <p className="text-white">AS Path, Policy</p>
              </div>
              <div className="px-4 py-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300 text-sm mb-1">Port</p>
                <p className="text-white">TCP 179</p>
              </div>
            </div>

            {/* Autonomous Systems */}
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2">
                {['AS 100', 'AS 200', 'AS 300', 'AS 400'].map((as, i) => (
                  <motion.div
                    key={as}
                    className="px-3 py-2 bg-green-500/20 border border-green-400/30 rounded text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + i * 0.1 }}
                  >
                    <p className="text-green-300 text-sm">{as}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 text-xs mt-3">Routes between Autonomous Systems</p>
            </div>

            <div className="px-4 py-3 bg-black/30 rounded-lg">
              <p className="text-gray-400 text-sm text-center">
                ✅ Internet backbone<br />
                ✅ Policy-based routing<br />
                ✅ Highly scalable
              </p>
            </div>
          </motion.div>
        </div>

        {/* Routing visualization */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-8 text-center">Packet Forwarding Through Routers</h3>
            
            <div className="flex items-center justify-between">
              <div className="px-6 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                <p className="text-cyan-300">Source</p>
                <p className="text-white text-sm font-mono mt-1">192.168.1.10</p>
              </div>

              {[1, 2, 3].map((router, i) => (
                <motion.div
                  key={router}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 + i * 0.3 }}
                >
                  <motion.div
                    className="w-12 h-0.5 bg-blue-400"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: 3.7 + i * 0.3, duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-2">
                    <p className="text-white">R{router}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="w-12 h-0.5 bg-blue-400"
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 4.6, duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="px-6 py-4 bg-purple-500/20 border border-purple-400/30 rounded-xl">
                <p className="text-purple-300">Destination</p>
                <p className="text-white text-sm font-mono mt-1">203.0.113.50</p>
              </div>
            </div>

            <p className="text-gray-300 text-center mt-8">
              Routers use routing tables to forward packets hop-by-hop to their destination
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
