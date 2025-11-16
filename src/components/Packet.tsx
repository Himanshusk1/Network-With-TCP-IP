import { motion } from 'motion/react';

interface PacketProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function Packet({ size = 40, className = '', animate = true }: PacketProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={animate ? {
        scale: [1, 1.1, 1],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-cyan-400/30 blur-xl"
        animate={animate ? {
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main packet body */}
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="packetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Packet shape */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="12"
            fill="url(#packetGradient)"
            filter="url(#glow)"
            stroke="#fff"
            strokeWidth="2"
            opacity="0.9"
          />
          
          {/* Digital pattern inside */}
          <g opacity="0.6">
            <line x1="25" y1="30" x2="45" y2="30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="55" y1="30" x2="75" y2="30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="45" x2="75" y2="45" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="60" x2="55" y2="60" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="60" x2="75" y2="60" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="75" x2="65" y2="75" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          </g>
          
          {/* Center glow point */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="#fff"
            opacity="0.8"
            animate={animate ? {
              r: [8, 12, 8],
              opacity: [0.8, 1, 0.8]
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function DataPacket({ label, color = "blue" }: { label?: string; color?: string }) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
    >
      <div className={`px-6 py-3 rounded-lg bg-gradient-to-r ${colorMap[color]} shadow-lg`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          {label && <span className="text-white text-sm">{label}</span>}
        </div>
      </div>
    </motion.div>
  );
}
