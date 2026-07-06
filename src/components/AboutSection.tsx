import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Systems & Web3',
      color: 'cyber-purple',
      skills: [
        { name: 'Rust', level: 92, status: 'proficient' },
        { name: 'Solana (SVM) / Anchor', level: 88, status: 'proficient' },
        { name: 'ICP', level: 85, status: 'proficient' },
        { name: 'WebAssembly', level: 80, status: 'proficient' }
      ]
    },
    {
      category: 'Cybersecurity',
      color: 'cyber-pink',
      skills: [
        { name: 'Penetration Testing', level: 90, status: 'proficient' },
        { name: 'Web3 Security Auditing', level: 88, status: 'proficient' },
        { name: 'Ethical Hacking', level: 85, status: 'proficient' },
        { name: 'Cryptography', level: 80, status: 'proficient' }
      ]
    },
    {
      category: 'Backend & Data',
      color: 'cyber-green',
      skills: [
        { name: 'Python', level: 92, status: 'proficient' },
        { name: 'Django', level: 85, status: 'proficient' },
        { name: 'Machine Learning', level: 75, status: 'learning' }
      ]
    },
    {
      category: 'Frontend Frameworks',
      color: 'cyber-cyan',
      skills: [
        { name: 'React', level: 90, status: 'proficient' },
        { name: 'TypeScript', level: 85, status: 'proficient' }
      ]
    }
  ];

  const expertise = [
    {
      icon: Terminal,
      title: 'Systems Engineering',
      description: 'Rust, WebAssembly, CLI Tooling, Low-Level Architecture',
      color: 'cyber-cyan'
    },
    {
      icon: Zap,
      title: 'Web3 & Blockchain',
      description: 'Solana, ICP, Smart Contracts, Digital Identity',
      color: 'cyber-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Penetration Testing, Web3 Auditing, Protocol Security',
      color: 'cyber-pink'
    },
    {
      icon: Code,
      title: 'Full-Stack Integration',
      description: 'Python, React, Machine Learning, API Development',
      color: 'cyber-green'
    }
  ];

  return (
    <section className="relative py-20 px-6" id="about">
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
          <div className="terminal-border bg-terminal-bg p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-orange"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
              </div>
              <span className="font-mono text-terminal-prompt">root@m1k3:~$</span>
              <span className="font-mono text-terminal-text">whoami</span>
            </div>
            
            <div className="font-mono text-terminal-text space-y-2">
              <div className="text-cyber-cyan">USER: Systems Engineer & Web3 Architect</div>
              <div className="text-cyber-green">ROLE: Software Developer | Security Auditor</div>
              <div className="text-cyber-purple">SPECIALIZATION: Rust | Solana SVM | ICP | Penetration Testing</div>
              <div className="text-cyber-pink">LOCATION: Nyeri, Kenya</div>
              <div className="text-cyber-orange">STATUS: Building and Engineering</div>
              <div className="mt-4 text-foreground">
                Passionate about engineering secure, high-performance systems that bridge the gap between 
                traditional web infrastructure and the decentralized future. Expert in Rust, smart contract 
                architecture, and penetration testing, with a strong focus on building robust, scalable solutions.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group cursor-pointer"
            >
              <div className={`bg-card border border-${item.color} rounded-lg p-6 h-full transition-all duration-300 hover:shadow-[0_0_30px_theme(colors.${item.color.replace('-', '.')})] hover:border-${item.color}/80`}>
                <div className={`text-${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-${item.color} font-bold text-lg mb-2`}>{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="terminal-border bg-terminal-bg p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-cyber-cyan mb-8 text-center font-mono">
            SKILL_MATRIX.exe
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className={`text-${category.color} font-mono font-bold text-lg border-b border-${category.color}/30 pb-2`}>
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-mono text-sm flex items-center gap-2">
                          {skill.name}
                          {skill.status === 'learning' && (
                            <span className="text-cyber-orange text-xs px-2 py-0.5 rounded-full border border-cyber-orange/30 bg-cyber-orange/10">
                              Learning
                            </span>
                          )}
                        </span>
                        <span className="text-terminal-text font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.3 }}
                          viewport={{ once: true }}
                          className={`h-full bg-${category.color} rounded-full shadow-[0_0_10px_currentColor] relative`}
                          style={{
                            opacity: skill.status === 'learning' ? 0.7 : 1
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-6 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyber-cyan"></div>
              <span className="text-muted-foreground">Proficient (80%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyber-orange/70"></div>
              <span className="text-muted-foreground">Learning (50-70%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};