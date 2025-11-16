import { useState, useEffect } from 'react';
import { NetworkJourney } from './components/NetworkJourney';
import { Button } from './components/ui/button';
import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';

export default function App() {
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0);

  const handleRestart = () => {
    setKey(prev => prev + 1);
    setStarted(true);
    setIsPaused(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center overflow-hidden">
      {!started ? (
        <div className="text-center space-y-8 p-8 max-w-3xl animate-in fade-in duration-1000">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm tracking-wider">
              EDUCATIONAL SERIES
            </div>
            <h1 className="text-7xl text-white tracking-tight">
              Computer Networks
            </h1>
            <p className="text-2xl text-blue-300">
              TCP/IP Model Explained Visually
            </p>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Follow a tiny glowing packet on its journey from Computer A to Computer B,
            as it travels through all layers of networking
          </p>

          <div className="flex items-center justify-center gap-6 pt-6">
            <Button
              onClick={() => setStarted(true)}
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-7 text-xl shadow-lg shadow-blue-500/50"
            >
              <Play className="mr-3 h-6 w-6" />
              Start Learning
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-sm text-gray-500">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl text-blue-400 mb-2">5</div>
              <div>TCP/IP Layers</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl text-blue-400 mb-2">20+</div>
              <div>Core Concepts</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl text-blue-400 mb-2">10+</div>
              <div>Protocols</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl text-blue-400 mb-2">15</div>
              <div>Visual Scenes</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <NetworkJourney key={key} isPaused={isPaused} />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
            <Button
              onClick={() => setIsPaused(!isPaused)}
              variant="outline"
              size="lg"
              className="bg-black/70 border-white/20 text-white hover:bg-black/90 backdrop-blur-sm"
            >
              {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
            </Button>
            
            <Button
              onClick={handleRestart}
              variant="outline"
              size="lg"
              className="bg-black/70 border-white/20 text-white hover:bg-black/90 backdrop-blur-sm"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Restart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
