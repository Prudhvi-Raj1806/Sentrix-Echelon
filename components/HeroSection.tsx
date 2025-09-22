import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import spiritGuideImage from 'figma:asset/5a9aba56913475e177156137fae05cba2d0f661e.png';
import lumoraLogo from 'figma:asset/ba0c48a1e3aae8d161fd57b7fe05214bae0da803.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0">
        {/* Deep space galaxy layer */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMG5lYnVsYSUyMHN0YXJzfGVufDF8fHx8MTc1ODUyMDEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Deep space galaxy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Cosmic nebula overlay */}
        <motion.div 
          className="absolute inset-0 opacity-25"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 4, delay: 1 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1615392030676-6c532fe0c302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBhdXJvcmElMjBuZWJ1bGElMjBwdXJwbGV8ZW58MXx8fHwxNzU4NTY3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cosmic nebula"
            className="w-full h-full object-cover mix-blend-screen"
          />
        </motion.div>

        {/* Enhanced cosmic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/20 via-[#0A0F1F]/60 to-[#0A0F1F]/90" />
        
        {/* Additional ethereal layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 60%)',
              'radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
              'radial-gradient(ellipse at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
              'radial-gradient(ellipse at 30% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 60%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles around spirit guide */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 45% 55%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 55% 45%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.2) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Lumora Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto"
            animate={{
              filter: [
                'drop-shadow(0 0 30px rgba(165, 243, 252, 0.6))',
                'drop-shadow(0 0 50px rgba(157, 78, 221, 0.4))',
                'drop-shadow(0 0 30px rgba(165, 243, 252, 0.6))'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src={lumoraLogo}
              alt="Lumora VR"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
        {/* Spirit Guide Hologram */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {/* Hologram frame effect */}
          <motion.div
            className="absolute inset-0 border-2 border-[#A5F3FC] rounded-full opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.div
            className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border border-[#9D4EDD] shadow-2xl"
            animate={{
              boxShadow: [
                '0 0 50px rgba(157, 78, 221, 0.5)',
                '0 0 80px rgba(6, 182, 212, 0.4)',
                '0 0 50px rgba(157, 78, 221, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src={spiritGuideImage}
              alt="Spirit Guide"
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Hologram glitch effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A5F3FC]/10 to-transparent"
              animate={{
                y: [-100, 100],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Welcome message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#A5F3FC] via-[#9D4EDD] to-[#06B6D4] bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 20px rgba(157, 78, 221, 0.5)',
                '0 0 40px rgba(6, 182, 212, 0.3)',
                '0 0 20px rgba(157, 78, 221, 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Welcome to LUMORA VR
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl mb-8 text-[#A5F3FC]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            I am your spirit guide in this immersive VR realm. Together, we will transcend 
            the boundaries between physical reality and virtual consciousness, unlocking the power 
            of AI-assisted healing and therapeutic growth in three-dimensional space.
          </motion.p>
        </motion.div>

        {/* CTA Button with portal effect */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          {/* Portal background effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                'radial-gradient(circle, rgba(157, 78, 221, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(157, 78, 221, 0.3) 0%, transparent 70%)'
              ],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <Button 
            className="relative z-10 px-12 py-6 text-xl font-semibold bg-gradient-to-r from-[#9D4EDD] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] border-0 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '0 0 40px rgba(157, 78, 221, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.8)',
                  '0 0 20px rgba(165, 243, 252, 0.6)',
                  '0 0 10px rgba(255, 255, 255, 0.8)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Experience LUMORA VR
            </motion.span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#A5F3FC] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#A5F3FC] rounded-full mt-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}