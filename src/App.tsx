import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import StudentProgressDashboard from './components/StudentProgressDashboard';
import EmergencyContactSection from './components/EmergencyContactSection';
import FinalCTASection from './components/FinalCTASection';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1F] text-[#A5F3FC] overflow-hidden">
      {/* Subtle Galaxy/Aurora Background */}
      <div className="fixed inset-0 z-0">
        {/* Base galaxy background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#0D1425] to-[#0A0F1F]" />
        
        {/* Aurora effects */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(ellipse 800px 400px at 20% 30%, rgba(157, 78, 221, 0.15) 0%, transparent 50%), radial-gradient(ellipse 600px 300px at 80% 70%, rgba(165, 243, 252, 0.1) 0%, transparent 50%)',
              'radial-gradient(ellipse 600px 300px at 30% 60%, rgba(157, 78, 221, 0.12) 0%, transparent 50%), radial-gradient(ellipse 800px 400px at 70% 20%, rgba(165, 243, 252, 0.08) 0%, transparent 50%)',
              'radial-gradient(ellipse 800px 400px at 20% 30%, rgba(157, 78, 221, 0.15) 0%, transparent 50%), radial-gradient(ellipse 600px 300px at 80% 70%, rgba(165, 243, 252, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Subtle stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-[#A5F3FC] rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Parallax aurora layer */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ 
            y: scrollY * 0.3,
            background: 'linear-gradient(45deg, rgba(157, 78, 221, 0.08) 0%, transparent 30%, rgba(6, 182, 212, 0.06) 60%, transparent 100%)'
          }}
        />
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ImpactSection />
        <CaseStudiesSection />
        <StudentProgressDashboard />
        <EmergencyContactSection />
        <FinalCTASection />
      </div>
    </div>
  );
}