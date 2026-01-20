import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { TypingEffect } from './TypingEffect';

export const ContactSection: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  const handleConnect = () => {
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('connected');
      setShowTerminal(true);
    }, 2000);
  };

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    setTerminalHistory(prev => [...prev, `guest@m1k3:~$ ${command}`]);
    
    switch (cmd) {
      case 'github':
        setTerminalHistory(prev => [...prev, 'Opening GitHub profile...']);
        setTimeout(() => window.open('https://github.com/Michaelmk708', '_blank'), 500);
        break;
      case 'linkedin':
        setTerminalHistory(prev => [...prev, 'Opening LinkedIn profile...']);
        setTimeout(() => window.open('https://www.linkedin.com/in/michaelkinuthia708', '_blank'), 500);
        break;
      case 'email':
        setTerminalHistory(prev => [...prev, 'Opening email client...']);
        setTimeout(() => window.open('mailto:michaelkinuthia708@gmail.com', '_blank'), 500);
        break;
      case 'discord':
        setTerminalHistory(prev => [...prev, 'Opening Discord...']);
        setTimeout(() => window.open('https://discord.com/users/1387770275432628234', '_blank'), 500);
        break;
      case 'help':
      case 'connect --help':
        setTerminalHistory(prev => [...prev, 
          'Available commands:',
          '  • github    - View open source projects',
          '  • linkedin  - Professional profile', 
          '  • email     - Direct message',
          '  • discord   - Community chat',
          '  • clear     - Clear terminal',
          '  • konami    - Easter egg'
        ]);
        break;
      case 'clear':
        setTerminalHistory([]);
        break;
      case 'konami':
        setTerminalHistory(prev => [...prev, '🎮 Konami code activated! Welcome to the matrix...']);
        break;
      default:
        setTerminalHistory(prev => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }
    setTerminalInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput);
    }
  };

  const contacts = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Michaelmk708',
      description: 'Open source contributions',
      color: 'cyber-green'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/michaelkinuthia708',
      description: 'Professional network',
      color: 'cyber-cyan'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:michaelkinuthia708@gmail.com',
      description: 'Direct communication',
      color: 'cyber-purple'
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      url: 'https://discord.com/users/1387770275432628234',
      description: 'Community chat',
      color: 'cyber-pink'
    }
  ];

  return (
    <section className="relative py-20 px-6" id="contact">
      {/* Background effects (3D grid is global) */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="terminal-border bg-terminal-bg p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
              </div>
              <span className="font-mono text-terminal-prompt">root@m1k3:~$</span>
              <span className="font-mono text-terminal-text">ssh secure-connect</span>
            </div>
            
            <div className="font-mono text-terminal-text space-y-2">
              {connectionStatus === 'idle' && (
                <>
                  <div className="text-cyber-cyan">Initializing secure shell connection...</div>
                  <div className="text-cyber-green">Encryption protocols: RSA-4096, AES-256</div>
                  <div className="text-cyber-purple">Status: Awaiting authorization</div>
                </>
              )}
              
              {connectionStatus === 'connecting' && (
                <>
                  <div className="text-cyber-cyan">Establishing secure connection...</div>
                  <div className="text-cyber-green">Handshake in progress...</div>
                  <div className="text-cyber-purple">Authentication successful</div>
                </>
              )}
              
              {connectionStatus === 'connected' && (
                <>
                  <div className="text-cyber-cyan">Connection established</div>
                  <div className="text-cyber-green">Security level: MAXIMUM</div>
                  <div className="text-cyber-purple">Ready for secure communication</div>
                </>
              )}
            </div>
            
            {connectionStatus === 'idle' && (
              <div className="mt-6">
                <Button 
                  variant="cyber" 
                  onClick={handleConnect}
                  className="w-full"
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  Establish Connection
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Connection status indicator */}
        {connectionStatus === 'connecting' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-card border border-cyber-cyan rounded-lg px-6 py-3">
              <div className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse-glow"></div>
              <span className="font-mono text-cyber-cyan">
                <TypingEffect text="Connecting to secure network..." speed={50} />
              </span>
            </div>
          </motion.div>
        )}

        {/* Contact options */}
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group block"
              >
                <div className={`bg-card border border-${contact.color} rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_theme(colors.${contact.color.replace('-', '.')})] hover:border-${contact.color}/80`}>
                  <div className="flex items-center gap-4">
                    <div className={`text-${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`text-${contact.color} font-bold text-lg font-mono`}>
                        {contact.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Interactive Terminal */}
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="terminal-border bg-terminal-bg p-6 rounded-lg"
          >
            {/* Terminal History */}
            <div className="font-mono text-terminal-text space-y-1 text-sm mb-4 min-h-[200px] max-h-[300px] overflow-y-auto">
              <div className="text-cyber-cyan">Interactive Terminal - Type commands to navigate</div>
              <div className="text-cyber-green">Type 'help' for available commands</div>
              <div className="border-b border-cyber-cyan/30 my-2"></div>
              
              {terminalHistory.map((line, index) => (
                <div key={index} className={
                  line.startsWith('guest@cyberport') ? 'text-terminal-prompt' :
                  line.includes('Opening') ? 'text-cyber-green' :
                  line.includes('not found') ? 'text-destructive' :
                  line.includes('🎮') ? 'text-cyber-pink' :
                  'text-terminal-text'
                }>
                  {line}
                </div>
              ))}
            </div>
            
            {/* Terminal Input */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-terminal-prompt">guest@m1k3:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent font-mono text-terminal-text border-none outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-cyber-cyan animate-pulse">|</span>
            </div>
            
            <div className="mt-4 text-xs text-muted-foreground font-mono">
              Available: github, linkedin, email, discord, help, clear, konami
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-cyber-cyan/30"
        >
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 mkportfolio. All rights reserved. | Built with React + Three.js
          </p>
          <p className="text-cyber-cyan font-mono text-xs mt-2">
            "Crafting the future of Web & Web3"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
