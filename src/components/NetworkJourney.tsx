import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IntroScene } from './scenes/IntroScene';
import { TCPIPLayersScene } from './scenes/TCPIPLayersScene';
import { AddressingScene } from './scenes/AddressingScene';
import { IPv4Scene } from './scenes/IPv4Scene';
import { DHCPScene } from './scenes/DHCPScene';
import { NATARPScene } from './scenes/NATARPScene';
import { ICMPScene } from './scenes/ICMPScene';
import { IPDatagramScene } from './scenes/IPDatagramScene';
import { TCPScene } from './scenes/TCPScene';
import { UDPScene } from './scenes/UDPScene';
import { RoutingScene } from './scenes/RoutingScene';
import { DNSScene } from './scenes/DNSScene';
import { ApplicationLayerScene } from './scenes/ApplicationLayerScene';
import { IPv6Scene } from './scenes/IPv6Scene';
import { SecurityScene } from './scenes/SecurityScene';
import { SummaryScene } from './scenes/SummaryScene';

interface NetworkJourneyProps {
  isPaused: boolean;
}

type SceneType = 
  | 'intro'
  | 'tcpip-layers'
  | 'addressing'
  | 'ipv4'
  | 'dhcp'
  | 'nat-arp'
  | 'icmp'
  | 'ip-datagram'
  | 'tcp'
  | 'udp'
  | 'routing'
  | 'dns'
  | 'application'
  | 'ipv6'
  | 'security'
  | 'summary';

const SCENE_DURATIONS: Record<SceneType, number> = {
  'intro': 5000,
  'tcpip-layers': 8000,
  'addressing': 7000,
  'ipv4': 9000,
  'dhcp': 7000,
  'nat-arp': 8000,
  'icmp': 6000,
  'ip-datagram': 7000,
  'tcp': 9000,
  'udp': 6000,
  'routing': 8000,
  'dns': 6000,
  'application': 7000,
  'ipv6': 7000,
  'security': 8000,
  'summary': 8000,
};

export function NetworkJourney({ isPaused }: NetworkJourneyProps) {
  const [currentScene, setCurrentScene] = useState<SceneType>('intro');
  const [sceneIndex, setSceneIndex] = useState(0);

  const scenes: SceneType[] = [
    'intro',
    'tcpip-layers',
    'addressing',
    'ipv4',
    'dhcp',
    'nat-arp',
    'icmp',
    'ip-datagram',
    'tcp',
    'udp',
    'routing',
    'dns',
    'application',
    'ipv6',
    'security',
    'summary',
  ];

  useEffect(() => {
    if (isPaused) return;

    const duration = SCENE_DURATIONS[currentScene];
    const timer = setTimeout(() => {
      const nextIndex = sceneIndex + 1;
      if (nextIndex < scenes.length) {
        setSceneIndex(nextIndex);
        setCurrentScene(scenes[nextIndex]);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentScene, sceneIndex, isPaused]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-blue-500 z-50"
        initial={{ width: '0%' }}
        animate={{ width: `${((sceneIndex + 1) / scenes.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Scene indicator */}
      <div className="absolute top-6 left-6 z-50 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        <p className="text-white text-sm">
          Scene {sceneIndex + 1} / {scenes.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {currentScene === 'intro' && <IntroScene key="intro" />}
        {currentScene === 'tcpip-layers' && <TCPIPLayersScene key="tcpip-layers" />}
        {currentScene === 'addressing' && <AddressingScene key="addressing" />}
        {currentScene === 'ipv4' && <IPv4Scene key="ipv4" />}
        {currentScene === 'dhcp' && <DHCPScene key="dhcp" />}
        {currentScene === 'nat-arp' && <NATARPScene key="nat-arp" />}
        {currentScene === 'icmp' && <ICMPScene key="icmp" />}
        {currentScene === 'ip-datagram' && <IPDatagramScene key="ip-datagram" />}
        {currentScene === 'tcp' && <TCPScene key="tcp" />}
        {currentScene === 'udp' && <UDPScene key="udp" />}
        {currentScene === 'routing' && <RoutingScene key="routing" />}
        {currentScene === 'dns' && <DNSScene key="dns" />}
        {currentScene === 'application' && <ApplicationLayerScene key="application" />}
        {currentScene === 'ipv6' && <IPv6Scene key="ipv6" />}
        {currentScene === 'security' && <SecurityScene key="security" />}
        {currentScene === 'summary' && <SummaryScene key="summary" />}
      </AnimatePresence>
    </div>
  );
}
