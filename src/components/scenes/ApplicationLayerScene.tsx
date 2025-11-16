import { motion } from 'motion/react';
import { Globe, Mail, FileText, Terminal, Download, Upload } from 'lucide-react';

export function ApplicationLayerScene() {
  const protocols = [
    { name: 'HTTP/HTTPS', icon: Globe, port: '80/443', desc: 'Web browsing', color: 'from-blue-500 to-blue-600' },
    { name: 'FTP', icon: Upload, port: '20/21', desc: 'File transfer', color: 'from-green-500 to-green-600' },
    { name: 'SMTP', icon: Mail, port: '25', desc: 'Send email', color: 'from-red-500 to-red-600' },
    { name: 'POP3', icon: Download, port: '110', desc: 'Retrieve email', color: 'from-purple-500 to-purple-600' },
    { name: 'IMAP', icon: Mail, port: '143', desc: 'Manage email', color: 'from-pink-500 to-pink-600' },
    { name: 'TELNET', icon: Terminal, port: '23', desc: 'Remote access', color: 'from-orange-500 to-orange-600' },
    { name: 'TFTP', icon: FileText, port: '69', desc: 'Simple file transfer', color: 'from-cyan-500 to-cyan-600' },
  ];

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
          <h2 className="text-5xl text-white mb-4">Application Layer Protocols</h2>
          <p className="text-xl text-blue-300">Services Users Interact With</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 mb-12">
          {protocols.map((protocol, i) => (
            <motion.div
              key={protocol.name}
              className={`p-6 bg-gradient-to-br ${protocol.color} rounded-2xl shadow-xl border border-white/20`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <protocol.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{protocol.name}</h3>
                <div className="px-3 py-1 bg-black/30 rounded-full mb-2">
                  <p className="text-white text-sm font-mono">:{protocol.port}</p>
                </div>
                <p className="text-white/80 text-sm">{protocol.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HTTP Request/Response */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">HTTP Request & Response Example</h3>
          <div className="grid grid-cols-2 gap-8">
            {/* HTTP Request */}
            <div className="p-6 bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/30 rounded-xl">
              <h4 className="text-xl text-white mb-4 flex items-center gap-2">
                <span>→</span> HTTP Request
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-green-300">GET /index.html HTTP/1.1</p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">Host: <span className="text-white">www.example.com</span></p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">User-Agent: <span className="text-white">Mozilla/5.0</span></p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">Accept: <span className="text-white">text/html</span></p>
                </div>
              </div>
            </div>

            {/* HTTP Response */}
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-400/30 rounded-xl">
              <h4 className="text-xl text-white mb-4 flex items-center gap-2">
                <span>←</span> HTTP Response
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-blue-300">HTTP/1.1 200 OK</p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">Content-Type: <span className="text-white">text/html</span></p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">Content-Length: <span className="text-white">1024</span></p>
                </div>
                <div className="px-4 py-2 bg-black/30 rounded">
                  <p className="text-gray-400">Server: <span className="text-white">Apache/2.4</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Protocols */}
        <motion.div
          className="max-w-5xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="p-8 bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-400/30 rounded-2xl">
            <h3 className="text-2xl text-white mb-6 text-center">Email Protocol Flow</h3>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <p className="text-white mb-1">Sender</p>
                <p className="text-gray-400 text-sm">user@sender.com</p>
              </div>

              <div className="flex-1 mx-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-lg">
                    <p className="text-red-300 text-sm">SMTP :25</p>
                  </div>
                  <div className="text-2xl text-red-400">→</div>
                  <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                    <p className="text-blue-300 text-sm">Mail Server</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                    <p className="text-purple-300 text-sm">POP3/IMAP</p>
                  </div>
                  <div className="text-2xl text-purple-400">→</div>
                  <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-300 text-sm">Retrieve</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <p className="text-white mb-1">Receiver</p>
                <p className="text-gray-400 text-sm">user@receiver.com</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="px-4 py-3 bg-red-500/10 rounded-lg text-center">
                <p className="text-red-300 mb-1">SMTP (Send)</p>
                <p className="text-gray-400">Sends email to mail server</p>
              </div>
              <div className="px-4 py-3 bg-purple-500/10 rounded-lg text-center">
                <p className="text-purple-300 mb-1">POP3/IMAP (Receive)</p>
                <p className="text-gray-400">Downloads email from server</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
