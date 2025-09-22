import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import spiritGuideImage from 'figma:asset/5a9aba56913475e177156137fae05cba2d0f661e.png';

export default function FinalCTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Epic cosmic background with multiple layers */}
      <div className="absolute inset-0">
        {/* Deep space galaxy */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677029907981-e9a44fb7409a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBnYWxheHklMjBzdGFycyUyMGNvc21pY3xlbnwxfHx8fDE3NTg1Njc4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Deep cosmic space"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mystical gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/20 via-[#0A0F1F]/60 to-[#0A0F1F]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD]/15 via-transparent to-[#06B6D4]/15" />

        {/* Enhanced cosmic energy particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(157, 78, 221, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 60%), radial-gradient(circle at 30% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 60%, rgba(165, 243, 252, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, rgba(157, 78, 221, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)'
            ]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        
        {/* Additional ethereal layer for depth */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            background: 'radial-gradient(ellipse at center, rgba(165, 243, 252, 0.05) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Spirit Guide */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Spirit guide with pointing gesture */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0"
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Holographic frame */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#A5F3FC] opacity-60"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#9D4EDD]"
                  animate={{
                    boxShadow: [
                      '0 0 60px rgba(157, 78, 221, 0.6)',
                      '0 0 100px rgba(6, 182, 212, 0.4)',
                      '0 0 60px rgba(157, 78, 221, 0.6)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img
                    src={spiritGuideImage}
                    alt="Spirit Guide"
                    className="w-full h-full object-cover opacity-90"
                  />

                  {/* Hologram glitch effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A5F3FC]/15 to-transparent"
                    animate={{
                      y: [-100, 100],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Pointing gesture effect */}
                <motion.div
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-4xl">👉</div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(165, 243, 252, 0.5)',
                        '0 0 40px rgba(157, 78, 221, 0.3)',
                        '0 0 20px rgba(165, 243, 252, 0.5)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Energy streams flowing toward button */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-[#A5F3FC]"
                    style={{
                      top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 30}%`,
                      left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 30}%`
                    }}
                    animate={{
                      x: [0, 150],
                      y: [0, Math.random() * 50 - 25],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Spirit guide message */}
              <motion.div
                className="mt-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-xl lg:text-2xl text-[#A5F3FC] italic leading-relaxed"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(165, 243, 252, 0.3)',
                      '0 0 30px rgba(157, 78, 221, 0.2)',
                      '0 0 20px rgba(165, 243, 252, 0.3)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  "Your VR transformation awaits beyond the portal. 
                  Step into the immersive realm where consciousness and AI unite in virtual reality..."
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Portal */}
          <motion.div
            className="lg:w-1/2 text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Portal background */}
            <motion.div
              className="relative inline-block"
              animate={{
                rotate: [0, 360]
              }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {/* Portal rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 opacity-30"
                  style={{
                    borderColor: i % 2 === 0 ? '#9D4EDD' : '#06B6D4',
                    transform: `scale(${1 + i * 0.2})`,
                    borderStyle: 'dashed'
                  }}
                  animate={{
                    rotate: [0, i % 2 === 0 ? 360 : -360],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                  }}
                />
              ))}

              {/* Main portal effect */}
              <motion.div
                className="relative w-96 h-96 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(6, 182, 212, 0.2) 30%, rgba(139, 92, 246, 0.1) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(139, 92, 246, 0.2) 30%, rgba(157, 78, 221, 0.1) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(157, 78, 221, 0.2) 30%, rgba(6, 182, 212, 0.1) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(6, 182, 212, 0.2) 30%, rgba(139, 92, 246, 0.1) 60%, transparent 100%)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* CTA Button */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="relative px-12 py-6 text-2xl font-bold bg-gradient-to-r from-[#9D4EDD] via-[#8B5CF6] to-[#06B6D4] hover:from-[#8B5CF6] hover:via-[#9D4EDD] hover:to-[#0891B2] border-0 rounded-full overflow-hidden group"
                  style={{
                    boxShadow: '0 0 60px rgba(157, 78, 221, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Button text with glow */}
                  <motion.span
                    className="relative z-10"
                    animate={{
                      textShadow: [
                        '0 0 15px rgba(255, 255, 255, 1)',
                        '0 0 25px rgba(165, 243, 252, 0.8)',
                        '0 0 15px rgba(255, 255, 255, 1)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Enter LUMORA VR
                  </motion.span>

                  {/* Rune-like pattern overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpolygon points='20,2 38,15 32,32 8,32 2,15'/%3E%3Cpolygon points='20,10 30,18 26,26 14,26 10,18'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Energy wave effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: ['100%', '200%']
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>

                {/* Floating runes around button */}
                {['⟐', '⟡', '⟢', '⟣'].map((rune, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl text-[#A5F3FC]"
                    style={{
                      top: `${50 + Math.sin(i * 90 * Math.PI / 180) * 80}%`,
                      left: `${50 + Math.cos(i * 90 * Math.PI / 180) * 80}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.5 },
                      opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 }
                    }}
                  >
                    {rune}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Call to action text */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#A5F3FC] to-[#9D4EDD] bg-clip-text text-transparent">
                Begin Your Journey
              </h3>
              <p className="text-lg text-[#A5F3FC]/70 mb-6">
                Join thousands of students already experiencing the future of VR education
              </p>
              
              {/* Features list */}
              <div className="space-y-2 text-left max-w-md mx-auto">
                {[
                  "🔮 Instant AI companion connection",
                  "🛡️ 24/7 protective monitoring", 
                  "🧠 Personalized learning evolution",
                  "🌟 Unlimited growth potential"
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center text-[#A5F3FC]/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="mr-3">{feature.split(' ')[0]}</span>
                    <span>{feature.split(' ').slice(1).join(' ')}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Final message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl text-[#A5F3FC]/60 italic"
            animate={{
              textShadow: [
                '0 0 15px rgba(165, 243, 252, 0.2)',
                '0 0 25px rgba(157, 78, 221, 0.1)',
                '0 0 15px rgba(165, 243, 252, 0.2)'
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            "The VR portal is open. Your destiny in the virtual realm awaits..."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}