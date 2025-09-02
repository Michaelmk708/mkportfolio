import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import { CyberGrid } from './CyberGrid';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/cyber-hero-bg.jpg';

export const HeroSection: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* 3D Background is now global */}
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 w-full h-0.5 bg-cyber-cyan shadow-[0_0_20px_theme(colors.cyber.cyan)] animate-scan"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Initial access message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="terminal-text text-lg md:text-xl mb-4">
            <TypingEffect 
              text="access granted... initializing portfolio..."
              speed={80}
              onComplete={() => setShowTitle(true)}
            />
          </div>
        </motion.div>

        {/* Main title */}
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="glow-cyan block mb-2">CYBER</span>
              <span className="glow-purple">ENGINEER</span>
            </h1>
            <div className="glow-green text-xl md:text-2xl lg:text-3xl font-mono">
              <TypingEffect 
                text="Software & Cybersecurity Engineer"
                speed={100}
                onComplete={() => setShowSubtitle(true)}
              />
            </div>
          </motion.div>
        )}

        {/* Subtitle */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-cyber-cyan text-lg md:text-xl font-mono">
              <TypingEffect 
                text="Web3 | Full-stack | Security | UI/UX"
                speed={80}
                onComplete={() => setShowButtons(true)}
              />
            </div>
          </motion.div>
        )}

        {/* Action buttons */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button variant="cyber" size="lg" className="min-w-[200px]">
              Initialize System
            </Button>
            <Button variant="terminal" size="lg" className="min-w-[200px]">
              Access Portfolio
            </Button>
          </motion.div>
        )}

        {/* Scroll indicator */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-cyber-cyan"
            >
              <span className="text-sm font-mono mb-2">SCROLL TO CONTINUE</span>
              <ChevronDown className="w-6 h-6 glow-cyan" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Terminal window overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-4 right-4 bg-terminal-bg border border-terminal-border rounded p-4 font-mono text-xs text-terminal-text max-w-xs hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
          <span className="ml-2">root@cyberport:~$</span>
        </div>
        <div className="space-y-1 text-cyber-green">
          <div>System Status: ONLINE</div>
          <div>Security Level: MAXIMUM</div>
          <div>Access Mode: AUTHORIZED</div>
          <div>Location: CYBERSPACE</div>
        </div>
      </motion.div>
    </section>
  );
};