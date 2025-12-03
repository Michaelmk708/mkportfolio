import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend Frameworks',
      color: 'cyber-cyan',
      skills: [
        { name: 'React', level: 90, status: 'proficient' },
        { name: 'Next.js', level: 85, status: 'proficient' }
      ]
    },
    {
      category: 'Backend Frameworks',
      color: 'cyber-green',
      skills: [
        { name: 'Django', level: 90, status: 'proficient' },
        { name: 'REST APIs', level: 88, status: 'proficient' },
        { name: 'Node.js/Express', level: 60, status: 'learning' }
      ]
    },
    {
      category: 'Web3 & Blockchain',
      color: 'cyber-purple',
      skills: [
        { name: 'Solana', level: 85, status: 'proficient' },
        { name: 'ICP', level: 85, status: 'proficient' },
        { name: 'Ethereum', level: 55, status: 'learning' }
      ]
    },
    {
      category: 'Cybersecurity',
      color: 'cyber-pink',
      skills: [
        { name: 'Secure Coding', level: 88, status: 'proficient' },
        { name: 'Web Application Testing', level: 85, status: 'proficient' },
        { name: 'Web3 Security', level: 60, status: 'learning' },
        { name: 'Cryptography', level: 58, status: 'learning' }
      ]
    },
    {
      category: 'Databases',
      color: 'cyber-orange',
      skills: [
        { name: 'SQL', level: 90, status: 'proficient' },
        { name: 'PostgreSQL', level: 88, status: 'proficient' },
        { name: 'MongoDB', level: 55, status: 'learning' }
      ]
    },
    {
      category: 'Programming Languages',
      color: 'cyber-cyan',
      skills: [
        { name: 'Python', level: 92, status: 'proficient' },
        { name: 'JavaScript', level: 90, status: 'proficient' },
        { name: 'Rust', level: 85, status: 'proficient' }
      ]
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Modern UI/UX',
      color: 'cyber-cyan'
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      description: 'Django, REST APIs, PostgreSQL, Node.js',
      color: 'cyber-green'
    },
    {
      icon: Zap,
      title: 'Web3 & Blockchain',
      description: 'Solana, ICP, Smart Contracts, Ethereum',
      color: 'cyber-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Secure Coding, Web Testing, Security Audits',
      color: 'cyber-pink'
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
              <div className="text-cyber-cyan">USER: Software & Cybersecurity Engineer</div>
              <div className="text-cyber-green">ROLE: software Developer | Security Specialist</div>
              <div className="text-cyber-purple">SPECIALIZATION: Web2 | Web3 | Blockchain | UI/UX</div>
              <div className="text-cyber-pink">LOCATION: Nyeri</div>
              <div className="text-cyber-orange">STATUS: Available for projects</div>
              <div className="mt-4 text-foreground">
                Passionate about building secure, scalable applications that bridge the gap between 
                traditional web development and the decentralized future. Expert in penetration testing, 
                smart contract auditing, and creating beautiful user experiences.
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