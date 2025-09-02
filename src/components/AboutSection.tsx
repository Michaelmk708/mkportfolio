import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, color: 'cyber-cyan' },
    { name: 'Django/Python', level: 92, color: 'cyber-green' },
    { name: 'Solidity/Web3', level: 88, color: 'cyber-purple' },
    { name: 'Rust/ICP', level: 85, color: 'cyber-pink' },
    { name: 'Cybersecurity', level: 90, color: 'cyber-orange' },
    { name: 'UI/UX Design', level: 87, color: 'cyber-cyan' }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'React, Django, Node.js, TypeScript',
      color: 'cyber-cyan'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Penetration Testing, Security Audits, OWASP',
      color: 'cyber-green'
    },
    {
      icon: Zap,
      title: 'Blockchain & Web3',
      description: 'Ethereum, Solana, ICP, Smart Contracts',
      color: 'cyber-purple'
    },
    {
      icon: Terminal,
      title: 'DevOps & Infrastructure',
      description: 'Docker, Kubernetes, CI/CD, AWS',
      color: 'cyber-pink'
    }
  ];

  return (
    <section className="relative py-20 px-6" id="about">
      {/* Background effects */}
      <div className="absolute inset-0 matrix-bg opacity-20" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
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
              <span className="font-mono text-terminal-prompt">root@cyberport:~$</span>
              <span className="font-mono text-terminal-text">whoami</span>
            </div>
            
            <div className="font-mono text-terminal-text space-y-2">
              <div className="text-cyber-cyan">USER: Software & Cybersecurity Engineer</div>
              <div className="text-cyber-green">ROLE: Full-Stack Developer | Security Specialist</div>
              <div className="text-cyber-purple">SPECIALIZATION: Web3 | Blockchain | UI/UX</div>
              <div className="text-cyber-pink">LOCATION: Cyberspace</div>
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

        {/* Skills radar */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className={`text-${skill.color} font-mono font-medium`}>
                    {skill.name}
                  </span>
                  <span className="text-terminal-text font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-${skill.color} rounded-full shadow-[0_0_15px_currentColor] relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};