import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import spiritGuideImage from 'figma:asset/5a9aba56913475e177156137fae05cba2d0f661e.png';
import blueCompanionImage from 'figma:asset/0a8ed2f4cfd3866b1a1a07f8af71b0fa1e4ff289.png';
import purpleCompanionImage from 'figma:asset/f2b3f4ca4b40eb43dcf37fd38251a127b32a0780.png';

export default function SolutionSection() {
  const solutions = [
    {
      title: "AI-Powered Emotional Intelligence",
      description: "Advanced algorithms that understand and respond to individual emotional states, providing personalized support and guidance.",
      icon: "🧠",
      hologramColor: "#9D4EDD"
    },
    {
      title: "Adaptive Learning Pathways",
      description: "Dynamic educational experiences that evolve based on student progress, interests, and optimal learning patterns.",
      icon: "🌟",
      hologramColor: "#06B6D4"
    },
    {
      title: "Immersive Healing Environments",
      description: "Virtual reality spaces designed to promote mental wellness, stress relief, and emotional regulation.",
      icon: "🌿",
      hologramColor: "#8B5CF6"
    },
    {
      title: "Continuous Companion Support",
      description: "24/7 AI companions that provide encouragement, motivation, and crisis intervention when needed most.",
      icon: "💫",
      hologramColor: "#A5F3FC"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 30%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header with spirit guide */}
        <div className="text-center mb-20">
          <motion.div
            className="relative inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            {/* Spirit guide avatar */}
            <motion.div
              className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#A5F3FC] relative"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(165, 243, 252, 0.5)',
                  '0 0 50px rgba(157, 78, 221, 0.4)',
                  '0 0 30px rgba(165, 243, 252, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img
                src={spiritGuideImage}
                alt="Spirit Guide"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Hologram effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-[#A5F3FC]/10 to-transparent"
                animate={{
                  y: [-60, 60],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Animal companions floating around spirit guide */}
            {[
              { 
                image: blueCompanionImage,
                position: "top-0 -right-4"
              },
              { 
                image: purpleCompanionImage,
                position: "bottom-0 -left-4"
              },
              { 
                image: blueCompanionImage,
                position: "-top-2 -left-8"
              }
            ].map((companion, index) => (
              <motion.div
                key={index}
                className={`absolute ${companion.position} w-16 h-16 rounded-full overflow-hidden border border-[#9D4EDD] opacity-60`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                  boxShadow: [
                    '0 0 15px rgba(157, 78, 221, 0.3)',
                    '0 0 25px rgba(6, 182, 212, 0.2)',
                    '0 0 15px rgba(157, 78, 221, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 4 + index,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <img
                  src={companion.image}
                  alt="AI Companion"
                  className="w-full h-full object-cover mix-blend-screen"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A5F3FC] via-[#9D4EDD] to-[#06B6D4] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            The LUMORA VR Solution
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Where advanced AI meets immersive VR technology, creating a new paradigm for therapeutic student support and growth.
          </motion.p>
        </div>

        {/* Solution panels grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Holographic panel */}
              <motion.div
                className="relative p-8 rounded-xl border border-[#A5F3FC]/30 bg-gradient-to-br from-[#1E293B]/40 to-[#0A0F1F]/60 backdrop-blur-md"
                whileHover={{ scale: 1.02 }}
                animate={{
                  borderColor: [
                    solution.hologramColor + '30',
                    solution.hologramColor + '60',
                    solution.hologramColor + '30'
                  ]
                }}
                transition={{ 
                  borderColor: { duration: 3, repeat: Infinity },
                  scale: { duration: 0.3 }
                }}
              >
                {/* Hologram scanning lines */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
                  animate={{
                    background: [
                      `linear-gradient(90deg, transparent 0%, ${solution.hologramColor}10 50%, transparent 100%)`,
                      `linear-gradient(90deg, transparent 40%, ${solution.hologramColor}20 60%, transparent 100%)`,
                      `linear-gradient(90deg, transparent 0%, ${solution.hologramColor}10 50%, transparent 100%)`
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glow */}
                  <motion.div
                    className="text-6xl mb-4 inline-block"
                    animate={{
                      textShadow: [
                        `0 0 20px ${solution.hologramColor}`,
                        `0 0 40px ${solution.hologramColor}80`,
                        `0 0 20px ${solution.hologramColor}`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {solution.icon}
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-4 text-[#A5F3FC]">
                    {solution.title}
                  </h3>
                  
                  <p className="text-[#A5F3FC]/70 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Holographic corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
              </motion.div>

              {/* Floating energy particles */}
              <motion.div
                className="absolute -inset-6 pointer-events-none"
                animate={{
                  background: [
                    `radial-gradient(circle at 20% 20%, ${solution.hologramColor}20 0%, transparent 50%)`,
                    `radial-gradient(circle at 80% 80%, ${solution.hologramColor}30 0%, transparent 50%)`,
                    `radial-gradient(circle at 50% 50%, ${solution.hologramColor}15 0%, transparent 50%)`,
                    `radial-gradient(circle at 20% 20%, ${solution.hologramColor}20 0%, transparent 50%)`
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: index * 0.7 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#A5F3FC]/60 italic">
            Together, we transcend the limitations of traditional education...
          </p>
        </motion.div>
      </div>
    </section>
  );
}