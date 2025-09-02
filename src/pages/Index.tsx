import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Add dark class to html element for proper theming
    document.documentElement.classList.add('dark');
    
    // Optional: Add loading screen
    const handleLoad = () => {
      console.log('🔥 CyberPort initialized successfully');
      console.log('🛡️ Security protocols: ACTIVE');
      console.log('🚀 System status: ONLINE');
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation could be added here */}
      
      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Floating elements */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-terminal-bg border border-cyber-cyan rounded-lg p-3 animate-pulse-glow">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></div>
            <span className="font-mono text-xs text-cyber-green">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;