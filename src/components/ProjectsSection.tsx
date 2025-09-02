import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Zap, Shield, Code } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: 'Web3 dApps' | 'Smart Contracts' | 'Security Tools' | 'Full-Stack Apps';
  status: 'encrypted' | 'decrypted';
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ComponentType<any>;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'DeFi Portfolio Tracker',
    description: 'Real-time Web3 portfolio tracking with advanced analytics and multi-chain support.',
    tech: ['React', 'Web3.js', 'Solidity', 'Node.js'],
    category: 'Web3 dApps',
    status: 'encrypted',
    icon: Zap,
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Smart Contract Auditor',
    description: 'Automated security analysis tool for Ethereum smart contracts with vulnerability detection.',
    tech: ['Python', 'Solidity', 'Docker', 'FastAPI'],
    category: 'Security Tools',
    status: 'encrypted',
    icon: Shield
  },
  {
    id: 3,
    title: 'Decentralized Chat Protocol',
    description: 'End-to-end encrypted messaging system built on blockchain with zero-knowledge proofs.',
    tech: ['Rust', 'ICP', 'React', 'WebRTC'],
    category: 'Smart Contracts',
    status: 'encrypted',
    icon: Lock
  },
  {
    id: 4,
    title: 'CyberSec Dashboard',
    description: 'Real-time security monitoring platform with threat intelligence and incident response.',
    tech: ['Django', 'React', 'PostgreSQL', 'Redis'],
    category: 'Full-Stack Apps',
    status: 'encrypted',
    icon: Code
  }
];

export const ProjectsSection: React.FC = () => {
  const [decryptedProjects, setDecryptedProjects] = useState<Set<number>>(new Set());
  
  const handleDecrypt = (projectId: number) => {
    setDecryptedProjects(prev => new Set([...prev, projectId]));
  };

  const getCardColor = (category: string) => {
    switch (category) {
      case 'Web3 dApps': return 'cyber-cyan';
      case 'Smart Contracts': return 'cyber-purple';
      case 'Security Tools': return 'cyber-green';
      case 'Full-Stack Apps': return 'cyber-pink';
      default: return 'cyber-cyan';
    }
  };

  return (
    <section className="relative py-20 px-6" id="projects">
      {/* Background effects (3D grid is global) */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="terminal-border bg-terminal-bg p-6 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
              </div>
              <span className="font-mono text-terminal-prompt">root@cyberport:~$</span>
              <span className="font-mono text-terminal-text">ls -la /projects</span>
            </div>
            
            <div className="font-mono text-terminal-text space-y-1">
              <div className="text-cyber-cyan">Scanning project directory...</div>
              <div className="text-cyber-green">4 encrypted files found</div>
              <div className="text-cyber-purple">Access level: AUTHORIZED</div>
              <div className="text-foreground mt-2">Click to decrypt project files</div>
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isDecrypted = decryptedProjects.has(project.id);
            const cardColor = getCardColor(project.category);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => !isDecrypted && handleDecrypt(project.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className={`bg-card border border-${cardColor} rounded-lg p-6 h-full transition-all duration-500 hover:shadow-[0_0_30px_theme(colors.${cardColor.replace('-', '.')})] relative overflow-hidden`}
                >
                  {/* Encrypted overlay */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isDecrypted ? 0 : 1 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute inset-0 bg-terminal-bg/90 flex items-center justify-center z-10 ${isDecrypted ? 'pointer-events-none' : ''}`}
                  >
                    <div className="text-center">
                      <Lock className={`w-12 h-12 text-${cardColor} mx-auto mb-4 animate-pulse`} />
                      <div className={`text-${cardColor} font-mono text-lg mb-2`}>ENCRYPTED</div>
                      <div className="text-muted-foreground font-mono text-sm">
                        Click to decrypt
                      </div>
                    </div>
                  </motion.div>

                  {/* Project content */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: isDecrypted ? 1 : 0,
                      scale: isDecrypted ? 1 : 0.9
                    }}
                    transition={{ duration: 0.8, delay: isDecrypted ? 0.3 : 0 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-${cardColor} group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-8 h-8" />
                      </div>
                      <div className={`px-3 py-1 bg-${cardColor}/20 border border-${cardColor} rounded-full text-xs font-mono text-${cardColor}`}>
                        {project.category}
                      </div>
                    </div>
                    
                    <h3 className={`text-${cardColor} font-bold text-xl mb-3 font-mono`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button variant="ghost_glow" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost_glow" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </motion.div>

                  {/* Decryption effect */}
                  {isDecrypted && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute left-0 top-0 w-1 h-full bg-${cardColor} shadow-[0_0_20px_currentColor] origin-top`}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 terminal-border bg-terminal-bg p-6 rounded-lg max-w-2xl mx-auto"
        >
          <div className="font-mono text-terminal-text text-center space-y-2">
            <div className="text-cyber-cyan">Projects decrypted: {decryptedProjects.size}/4</div>
            <div className="text-cyber-green">Security clearance: MAXIMUM</div>
            <div className="text-cyber-purple">More classified projects available on request</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};