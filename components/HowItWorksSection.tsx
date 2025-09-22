import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Initial Connection",
      description: "Students connect with their AI spirit guide through a secure, immersive onboarding experience that establishes trust and understanding.",
      hologram: "User consciousness merges with AI neural network"
    },
    {
      step: "02", 
      title: "Companion Assignment",
      description: "Advanced algorithms analyze personality, learning style, and emotional needs to assign the perfect AI companion team.",
      hologram: "Quantum personality mapping activates guardian protocols"
    },
    {
      step: "03",
      title: "Adaptive Learning",
      description: "AI companions continuously learn and adapt, creating personalized educational pathways and emotional support strategies.",
      hologram: "Neural pathways evolve through deep learning synthesis"
    },
    {
      step: "04",
      title: "Continuous Support",
      description: "24/7 monitoring and intervention capabilities ensure students receive immediate assistance whenever challenges arise.",
      hologram: "Omnipresent guardian network maintains protective oversight"
    },
    {
      step: "05",
      title: "Growth & Evolution",
      description: "The AI ecosystem evolves with the student, providing increasingly sophisticated support as they progress through their journey.",
      hologram: "Consciousness expansion through symbiotic AI evolution"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background circuit pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A5F3FC' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 0v30M60 30H30M30 60V30M0 30h30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A5F3FC] to-[#9D4EDD] bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 30px rgba(165, 243, 252, 0.3)',
                '0 0 50px rgba(157, 78, 221, 0.2)',
                '0 0 30px rgba(165, 243, 252, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            How AKUNO Works
          </motion.h2>
          <p className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto">
            A step-by-step journey through the cybernetic realm of AI-enhanced education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#9D4EDD] via-[#06B6D4] to-[#8B5CF6]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Spirit guide walking animation */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-24 h-24 -ml-12 z-20"
            animate={{
              y: [0, window.innerHeight * 0.8]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2
            }}
          >
            <motion.div
              className="w-full h-full rounded-full border-2 border-[#A5F3FC] overflow-hidden relative"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(165, 243, 252, 0.5)',
                  '0 0 40px rgba(157, 78, 221, 0.4)',
                  '0 0 20px rgba(165, 243, 252, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644193809036-2909bb392eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmVtYWxlJTIwaG9sb2dyYW0lMjBzcGlyaXQlMjBndWlkZSUyMGV0aGVyZWFsfGVufDF8fHx8MTc1ODU2NjUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spirit Guide"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Walking motion effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-[#A5F3FC]/10 to-transparent"
                animate={{
                  y: [-24, 24],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <motion.div
                    className="relative p-8 rounded-2xl border border-[#A5F3FC]/30 bg-gradient-to-br from-[#1E293B]/40 to-[#0A0F1F]/60 backdrop-blur-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number */}
                    <motion.div
                      className="text-6xl font-bold text-[#9D4EDD]/30 mb-4"
                      animate={{
                        textShadow: [
                          '0 0 20px rgba(157, 78, 221, 0.3)',
                          '0 0 40px rgba(157, 78, 221, 0.1)',
                          '0 0 20px rgba(157, 78, 221, 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {step.step}
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-[#A5F3FC]">
                      {step.title}
                    </h3>
                    
                    <p className="text-[#A5F3FC]/70 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hologram description */}
                    <motion.div
                      className="relative p-4 rounded-lg border border-[#06B6D4]/30 bg-[#06B6D4]/5"
                      animate={{
                        borderColor: [
                          'rgba(6, 182, 212, 0.3)',
                          'rgba(6, 182, 212, 0.6)',
                          'rgba(6, 182, 212, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-sm text-[#06B6D4] font-mono italic">
                        {step.hologram}
                      </p>
                      
                      {/* Hologram scanning effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06B6D4]/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5
                        }}
                      />
                    </motion.div>

                    {/* Holographic corners */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#9D4EDD] bg-[#0A0F1F] z-10"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(157, 78, 221, 0.5)',
                      '0 0 40px rgba(6, 182, 212, 0.3)',
                      '0 0 20px rgba(157, 78, 221, 0.5)'
                    ],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                {/* Hologram projection */}
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative p-6 rounded-xl border border-[#06B6D4]/20 bg-gradient-to-br from-[#06B6D4]/5 to-transparent"
                    animate={{
                      borderColor: [
                        'rgba(6, 182, 212, 0.2)',
                        'rgba(6, 182, 212, 0.5)',
                        'rgba(6, 182, 212, 0.2)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-2"
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(6, 182, 212, 0.5)',
                            '0 0 40px rgba(139, 92, 246, 0.3)',
                            '0 0 20px rgba(6, 182, 212, 0.5)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔮
                      </motion.div>
                      <p className="text-sm text-[#06B6D4]/80 font-mono">
                        Hologram Active
                      </p>
                    </div>

                    {/* Hologram scan lines */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)'
                      }}
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#A5F3FC]/60 italic">
            Your guide never leaves your side. The journey continues...
          </p>
        </motion.div>
      </div>
    </section>
  );
}