import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import blueCompanionImage from 'figma:asset/0a8ed2f4cfd3866b1a1a07f8af71b0fa1e4ff289.png';
import purpleCompanionImage from 'figma:asset/f2b3f4ca4b40eb43dcf37fd38251a127b32a0780.png';

export default function FeaturesSection() {
  const features = [
    {
      title: "AI Wisdom Therapist",
      subtitle: "Dragon Companion",
      description: "Deep learning algorithms provide personalized insights, emotional support, and therapeutic guidance tailored to each student's unique psychological patterns and needs.",
      image: blueCompanionImage,
      color: "#06B6D4",
      features: ["Personalized Therapy", "Emotional Intelligence", "Cognitive Enhancement", "Mindfulness Training"]
    },
    {
      title: "Adaptive Mentor",
      subtitle: "Mystical Friend",
      description: "Advanced adaptability systems that evolve with student needs, providing compassionate support, friendship, and guidance through life's challenges.",
      image: purpleCompanionImage,
      color: "#9D4EDD",
      features: ["Adaptive Friendship", "Personal Growth", "Life Navigation", "Emotional Resilience"]
    },
    {
      title: "Holistic Support",
      subtitle: "Combined AI Therapy",
      description: "Integrated AI companions working together to provide comprehensive mental health support, therapeutic interventions, and personalized growth strategies.",
      image: blueCompanionImage, // Could alternate or create a combined view
      color: "#8B5CF6",
      features: ["Integrated Support", "Multi-Modal Therapy", "Comprehensive Care", "Continuous Growth"]
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(165, 243, 252, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(165, 243, 252, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A5F3FC] via-[#9D4EDD] to-[#8B5CF6] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            AI Companion Features
          </motion.h2>
          <p className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto">
            Each AI companion embodies unique capabilities, working together to create a comprehensive support ecosystem.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Feature card */}
              <motion.div
                className="relative h-full p-8 rounded-2xl border border-[#A5F3FC]/20 bg-gradient-to-br from-[#1E293B]/40 to-[#0A0F1F]/70 backdrop-blur-md overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 20px 60px ${feature.color}40`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated companion */}
                <motion.div
                  className="relative mb-8"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 relative"
                    style={{ borderColor: feature.color }}
                    animate={{
                      boxShadow: [
                        `0 0 30px ${feature.color}50`,
                        `0 0 60px ${feature.color}80`,
                        `0 0 30px ${feature.color}50`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.subtitle}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Breathing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: feature.color }}
                      animate={{
                        opacity: [0, 0.2, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                    />

                    {/* Scanning lines */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                      animate={{
                        y: [-64, 64],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Floating particles around companion */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ backgroundColor: feature.color }}
                      animate={{
                        x: [
                          Math.cos(i * 60 * Math.PI / 180) * 80,
                          Math.cos((i * 60 + 360) * Math.PI / 180) * 80
                        ],
                        y: [
                          Math.sin(i * 60 * Math.PI / 180) * 80,
                          Math.sin((i * 60 + 360) * Math.PI / 180) * 80
                        ],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "linear"
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-[#A5F3FC]">
                    {feature.title}
                  </h3>
                  <p 
                    className="text-lg font-medium mb-4"
                    style={{ color: feature.color }}
                  >
                    {feature.subtitle}
                  </p>
                  <p className="text-[#A5F3FC]/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-center text-sm text-[#A5F3FC]/60"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: feature.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Neon hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}10, transparent, ${feature.color}10)`,
                    border: `1px solid ${feature.color}30`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive showcase */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-[#A5F3FC]/60 italic mb-8"
            animate={{
              textShadow: [
                '0 0 10px rgba(165, 243, 252, 0.3)',
                '0 0 20px rgba(157, 78, 221, 0.2)',
                '0 0 10px rgba(165, 243, 252, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "Three guardians, infinite possibilities. Your journey awaits..."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}