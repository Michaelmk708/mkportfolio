import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { TypingEffect } from './TypingEffect';

export const ContactSection: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [showTerminal, setShowTerminal] = useState(false);

  const handleConnect = () => {
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('connected');
      setShowTerminal(true);
    }, 2000);
  };

  const contacts = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      description: 'Open source contributions',
      color: 'cyber-green'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      description: 'Professional network',
      color: 'cyber-cyan'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@cyberport.dev',
      description: 'Direct communication',
      color: 'cyber-purple'
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      url: 'https://discord.com',
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
              <span className="font-mono text-terminal-prompt">root@cyberport:~$</span>
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

        {/* Easter egg terminal */}
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="terminal-border bg-terminal-bg p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-terminal-prompt">guest@cyberport:~$</span>
              <span className="font-mono text-terminal-text">connect --help</span>
            </div>
            
            <div className="font-mono text-terminal-text space-y-2 text-sm">
              <div className="text-cyber-cyan">Available commands:</div>
              <div className="text-cyber-green">  • github    - View open source projects</div>
              <div className="text-cyber-purple">  • linkedin  - Professional profile</div>
              <div className="text-cyber-pink">  • email     - Direct message</div>
              <div className="text-cyber-orange">  • discord   - Community chat</div>
              <div className="mt-4 text-foreground">
                Easter egg: Try typing "konami" for a surprise...
              </div>
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
            © 2024 CyberPort. All rights reserved. | Built with React + Three.js
          </p>
          <p className="text-cyber-cyan font-mono text-xs mt-2">
            "In cyberspace, we trust in code"
          </p>
        </motion.div>
      </div>
    </section>
  );
};