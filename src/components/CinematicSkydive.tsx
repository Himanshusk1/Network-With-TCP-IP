import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Scene = 'freefall' | 'descent' | 'parachute' | 'landing' | 'hero' | 'title';

export function CinematicSkydive() {
  const [scene, setScene] = useState<Scene>('freefall');

  useEffect(() => {
    const timers = [
      setTimeout(() => setScene('descent'), 4000),
      setTimeout(() => setScene('parachute'), 8000),
      setTimeout(() => setScene('landing'), 13000),
      setTimeout(() => setScene('hero'), 16000),
      setTimeout(() => setScene('title'), 19000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-black z-50" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black z-50" />

      <AnimatePresence mode="wait">
        {scene === 'freefall' && <FreefallScene key="freefall" />}
        {scene === 'descent' && <DescentScene key="descent" />}
        {scene === 'parachute' && <ParachuteScene key="parachute" />}
        {scene === 'landing' && <LandingScene key="landing" />}
        {scene === 'hero' && <HeroScene key="hero" />}
        {scene === 'title' && <TitleScene key="title" />}
      </AnimatePresence>

      {/* Subtle film grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-40 mix-blend-overlay bg-noise" />
    </div>
  );
}

function FreefallScene() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sky background with motion */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.15] }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200" />
      </motion.div>

      {/* Soft clouds */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/60 backdrop-blur-sm"
          style={{
            width: `${150 + Math.random() * 200}px`,
            height: `${80 + Math.random() * 100}px`,
            left: `${Math.random() * 120 - 10}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ y: -200, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 200,
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            ease: "linear",
            times: [0, 0.2, 0.8, 1]
          }}
        />
      ))}

      {/* Wind streaks - clean and subtle */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 bg-white/25 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${60 + Math.random() * 80}px`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 100,
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear"
          }}
        />
      ))}

      {/* Hero skydiving */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.4, y: -150 }}
        animate={{ 
          scale: 1.2,
          y: 50,
        }}
        transition={{ 
          duration: 4,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          animate={{ 
            rotate: [-2, 2, -2],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Professional hero figure */}
          <svg viewBox="0 0 200 300" className="w-64 h-96 drop-shadow-2xl">
            <defs>
              <linearGradient id="tuxedoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#000" />
              </linearGradient>
              <filter id="heroGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Head */}
            <ellipse cx="100" cy="40" rx="22" ry="28" fill="#2a2a2a" />
            
            {/* Tuxedo body */}
            <path 
              d="M 78 70 L 85 180 L 115 180 L 122 70 Z" 
              fill="url(#tuxedoGrad)" 
              stroke="#333" 
              strokeWidth="1"
            />
            
            {/* White shirt */}
            <rect x="88" y="70" width="24" height="60" fill="#fff" rx="2" />
            
            {/* Bow tie */}
            <path d="M 82 70 L 90 74 L 110 74 L 118 70 L 110 66 L 90 66 Z" fill="#fff" />
            
            {/* Jacket lapels */}
            <path d="M 78 70 L 88 70 L 85 110" fill="#000" opacity="0.8" />
            <path d="M 122 70 L 112 70 L 115 110" fill="#000" opacity="0.8" />
            
            {/* Arms spread - skydiving pose */}
            <path d="M 78 80 L 30 110 L 35 120 L 80 100" fill="url(#tuxedoGrad)" stroke="#333" strokeWidth="1" />
            <path d="M 122 80 L 170 110 L 165 120 L 120 100" fill="url(#tuxedoGrad)" stroke="#333" strokeWidth="1" />
            
            {/* Hands */}
            <ellipse cx="32" cy="115" rx="8" ry="10" fill="#2a2a2a" />
            <ellipse cx="168" cy="115" rx="8" ry="10" fill="#2a2a2a" />
            
            {/* Legs */}
            <path d="M 85 180 L 80 270 L 88 270 L 92 185" fill="url(#tuxedoGrad)" stroke="#333" strokeWidth="1" />
            <path d="M 115 180 L 120 270 L 112 270 L 108 185" fill="url(#tuxedoGrad)" stroke="#333" strokeWidth="1" />
            
            {/* Shoes */}
            <ellipse cx="84" cy="270" rx="10" ry="5" fill="#000" />
            <ellipse cx="116" cy="270" rx="10" ry="5" fill="#000" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Clean vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
    </motion.div>
  );
}

function DescentScene() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300" />

      {/* Soft flowing clouds */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/70 backdrop-blur-md"
          style={{
            width: `${200 + Math.random() * 250}px`,
            height: `${100 + Math.random() * 120}px`,
            left: `${Math.random() * 120 - 10}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{ 
            x: [-30, 30, -30],
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero falling through clouds */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2"
        animate={{ 
          y: [0, 120],
          scale: [1, 1.3]
        }}
        transition={{ 
          duration: 4,
          ease: "easeIn"
        }}
      >
        <motion.div
          animate={{ 
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 200 300" className="w-56 h-84 drop-shadow-2xl">
            <ellipse cx="100" cy="40" rx="22" ry="28" fill="#2a2a2a" />
            <path d="M 78 70 L 85 180 L 115 180 L 122 70 Z" fill="#000" stroke="#333" strokeWidth="1" />
            <rect x="88" y="70" width="24" height="60" fill="#fff" rx="2" />
            <path d="M 82 70 L 90 74 L 110 74 L 118 70 L 110 66 L 90 66 Z" fill="#fff" />
            <path d="M 78 80 L 40 130 L 45 140 L 82 105" fill="#000" stroke="#333" strokeWidth="1" />
            <path d="M 122 80 L 160 130 L 155 140 L 118 105" fill="#000" stroke="#333" strokeWidth="1" />
            <path d="M 85 180 L 82 270 L 90 270 L 92 185" fill="#000" stroke="#333" strokeWidth="1" />
            <path d="M 115 180 L 118 270 L 110 270 L 108 185" fill="#000" stroke="#333" strokeWidth="1" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Atmospheric lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
    </motion.div>
  );
}

function ParachuteScene() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sky to ground gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-green-100"
        animate={{ scale: [1, 1.1] }}
        transition={{ duration: 5 }}
      />

      {/* Scattered clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/60 backdrop-blur-sm"
          style={{
            width: `${180 + Math.random() * 150}px`,
            height: `${90 + Math.random() * 80}px`,
            left: `${10 + i * 12}%`,
            top: `${60 + Math.random() * 20}%`,
          }}
          animate={{ 
            x: [-20, 20, -20],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero with parachute */}
      <motion.div
        className="absolute left-1/2 top-1/4 -translate-x-1/2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Parachute canopy */}
        <motion.div
          initial={{ scaleY: 0, y: 80 }}
          animate={{ scaleY: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-bottom"
        >
          <svg viewBox="0 0 300 180" className="w-[500px] h-72">
            <defs>
              <radialGradient id="parachuteGrad" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="70%" stopColor="#f0f0f0" />
                <stop offset="100%" stopColor="#d0d0d0" />
              </radialGradient>
              <filter id="parachuteShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                <feOffset dx="0" dy="4" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main canopy */}
            <ellipse 
              cx="150" 
              cy="90" 
              rx="130" 
              ry="70" 
              fill="url(#parachuteGrad)" 
              filter="url(#parachuteShadow)"
            />
            
            {/* Canopy panels */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * Math.PI) / 5 - Math.PI / 2;
              return (
                <line
                  key={i}
                  x1="150"
                  y1="20"
                  x2={150 + Math.cos(angle) * 130}
                  y2={90 + Math.sin(angle) * 70}
                  stroke="#ccc"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              );
            })}
            
            {/* Suspension lines */}
            <line x1="50" y1="150" x2="150" y2="165" stroke="#444" strokeWidth="2" />
            <line x1="250" y1="150" x2="150" y2="165" stroke="#444" strokeWidth="2" />
            <line x1="80" y1="145" x2="150" y2="165" stroke="#444" strokeWidth="1.5" />
            <line x1="220" y1="145" x2="150" y2="165" stroke="#444" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Hero suspended */}
        <motion.div
          className="relative -mt-4"
          animate={{ 
            x: [-8, 8, -8],
            rotate: [-1.5, 1.5, -1.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 200 300" className="w-40 h-60 mx-auto drop-shadow-2xl">
            <ellipse cx="100" cy="40" rx="20" ry="25" fill="#2a2a2a" />
            <path d="M 80 70 L 88 170 L 112 170 L 120 70 Z" fill="#000" stroke="#333" strokeWidth="1" />
            <rect x="90" y="70" width="20" height="55" fill="#fff" rx="2" />
            <path d="M 84 70 L 92 73 L 108 73 L 116 70 L 108 67 L 92 67 Z" fill="#fff" />
            <path d="M 80 75 L 60 140 L 65 145 L 84 95" fill="#000" />
            <path d="M 120 75 L 140 140 L 135 145 L 116 95" fill="#000" />
            <path d="M 88 170 L 86 260 L 94 260 L 95 175" fill="#000" />
            <path d="M 112 170 L 114 260 L 106 260 L 105 175" fill="#000" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Depth atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </motion.div>
  );
}

function LandingScene() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ground view */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-600 to-sky-200" />

      {/* Ground texture */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-900 to-transparent" />

      {/* Landing impact dust */}
      <motion.div
        className="absolute left-1/2 bottom-1/3 -translate-x-1/2"
        initial={{ y: -100, scale: 0.7 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Dust clouds */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gray-300/50 backdrop-blur-sm"
            style={{
              left: `${-150 + i * 45}px`,
              bottom: -20
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.5, 3.5],
              opacity: [0, 0.6, 0],
              y: [0, -30, -60]
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.08,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Impact shockwave */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-40 h-40 border-4 border-white/60 rounded-full" />
        </motion.div>

        {/* Hero landing pose */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 300" className="w-48 h-72 drop-shadow-2xl">
            <ellipse cx="100" cy="40" rx="22" ry="26" fill="#2a2a2a" />
            <path d="M 78 70 L 85 165 L 115 165 L 122 70 Z" fill="#000" stroke="#333" strokeWidth="1" />
            <rect x="88" y="70" width="24" height="55" fill="#fff" rx="2" />
            <path d="M 82 70 L 90 73 L 110 73 L 118 70 L 110 67 L 90 67 Z" fill="#fff" />
            
            {/* Arms out for balance */}
            <path d="M 78 80 L 30 95 L 32 105 L 80 92" fill="#000" stroke="#333" strokeWidth="1" />
            <path d="M 122 80 L 170 95 L 168 105 L 120 92" fill="#000" stroke="#333" strokeWidth="1" />
            
            {/* Bent legs - landing position */}
            <path d="M 85 165 L 80 220 L 75 255 L 82 255 L 88 220 L 92 170" fill="#000" stroke="#333" strokeWidth="1" />
            <path d="M 115 165 L 120 220 L 125 255 L 118 255 L 112 220 L 108 170" fill="#000" stroke="#333" strokeWidth="1" />
            
            {/* Shoes */}
            <ellipse cx="78" cy="255" rx="12" ry="5" fill="#000" />
            <ellipse cx="122" cy="255" rx="12" ry="5" fill="#000" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
    </motion.div>
  );
}

function HeroScene() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-green-700" />

      {/* Dramatic backlighting */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-yellow-200/40 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Hero standing tall */}
      <motion.div
        className="absolute left-1/2 bottom-1/4 -translate-x-1/2"
        initial={{ scale: 0.9, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Heroic glow */}
        <motion.div
          className="absolute inset-0 blur-2xl bg-cyan-200/40 scale-150"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <svg viewBox="0 0 200 320" className="relative w-56 h-[420px] drop-shadow-2xl">
          <defs>
            <linearGradient id="heroTuxedo" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
          </defs>
          
          {/* Head */}
          <ellipse cx="100" cy="45" rx="24" ry="30" fill="#2a2a2a" />
          
          {/* Tuxedo - standing confident */}
          <path d="M 76 80 L 82 200 L 118 200 L 124 80 Z" fill="url(#heroTuxedo)" stroke="#333" strokeWidth="1" />
          
          {/* Perfect white shirt */}
          <rect x="86" y="80" width="28" height="70" fill="#fff" rx="2" />
          
          {/* Bow tie */}
          <path d="M 78 80 L 88 84 L 112 84 L 122 80 L 112 76 L 88 76 Z" fill="#fff" />
          
          {/* Jacket lapels - sharp */}
          <path d="M 76 80 L 86 80 L 82 130" fill="#000" opacity="0.9" />
          <path d="M 124 80 L 114 80 L 118 130" fill="#000" opacity="0.9" />
          
          {/* Arms at sides - confident stance */}
          <path d="M 76 90 L 62 180 L 68 185 L 80 110" fill="url(#heroTuxedo)" stroke="#333" strokeWidth="1" />
          <path d="M 124 90 L 138 180 L 132 185 L 120 110" fill="url(#heroTuxedo)" stroke="#333" strokeWidth="1" />
          
          {/* Hands */}
          <ellipse cx="65" cy="182" rx="9" ry="12" fill="#2a2a2a" />
          <ellipse cx="135" cy="182" rx="9" ry="12" fill="#2a2a2a" />
          
          {/* Legs - standing straight and tall */}
          <path d="M 82 200 L 85 310 L 93 310 L 95 205" fill="url(#heroTuxedo)" stroke="#333" strokeWidth="1" />
          <path d="M 118 200 L 115 310 L 107 310 L 105 205" fill="url(#heroTuxedo)" stroke="#333" strokeWidth="1" />
          
          {/* Polished shoes */}
          <ellipse cx="89" cy="310" rx="13" ry="5" fill="#000" />
          <ellipse cx="111" cy="310" rx="13" ry="5" fill="#000" />
          
          {/* Shoe highlights */}
          <ellipse cx="89" cy="309" rx="6" ry="2" fill="#333" opacity="0.5" />
          <ellipse cx="111" cy="309" rx="6" ry="2" fill="#333" opacity="0.5" />
        </svg>

        {/* Adjusting tuxedo motion */}
        <motion.div
          className="absolute top-1/3 right-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [-20, 10, 40]
          }}
          transition={{ 
            duration: 2,
            delay: 0.5
          }}
        >
          <div className="w-12 h-24 bg-gradient-to-r from-white/30 to-transparent blur-sm rounded-full" />
        </motion.div>
      </motion.div>

      {/* Confident look sparkle */}
      <motion.div
        className="absolute left-1/2 top-[28%] translate-x-6"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.5, 0],
          rotate: [0, 180, 360],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 1.2,
          delay: 1.2
        }}
      >
        <div className="text-3xl">✨</div>
      </motion.div>

      {/* Clean vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </motion.div>
  );
}

function TitleScene() {
  return (
    <motion.div
      className="absolute inset-0 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        {/* Epic glow background */}
        <motion.div
          className="absolute inset-0 blur-[100px] -z-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="relative text-[14rem] tracking-[0.15em] bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
          }}
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            y: 0
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          HIMANSHU
        </motion.h1>

        {/* Elegant underline */}
        <motion.div
          className="absolute -bottom-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        />

        {/* Light beams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-[500px] bg-gradient-to-t from-transparent via-blue-300/20 to-transparent origin-bottom -z-20"
            style={{
              transform: `translateX(-50%) rotate(${-60 + i * 30}deg)`
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: 1,
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.8 + i * 0.15,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Subtle particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -100]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: 1 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
