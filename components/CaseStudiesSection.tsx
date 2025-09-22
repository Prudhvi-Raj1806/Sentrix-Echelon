import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "MIT Cybernetic Learning Lab",
      subtitle: "Advanced AI Integration",
      description: "Students experienced a 95% improvement in problem-solving capabilities through holographic AI mentorship programs.",
      realImage: "https://images.unsplash.com/photo-1716630408610-5b7023bb24a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBtYWplc3RpYyUyMHdpc2RvbXxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fantasyOverlay: "https://images.unsplash.com/photo-1751709064007-b0ce4cdfcce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBtYWplc3RpYyUyMHdpc2RvbXxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["95% Problem-solving improvement", "87% Stress reduction", "24/7 AI companion access"],
      color: "#9D4EDD"
    },
    {
      title: "Stanford Neural Wellness Center",
      subtitle: "Emotional Intelligence Enhancement",
      description: "Revolutionary breakthrough in student mental health support through AI-powered emotional recognition and intervention.",
      realImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODU0NDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fantasyOverlay: "https://images.unsplash.com/photo-1669205617241-bf837080affd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9lbml4JTIwZmlyZSUyMGJpcmQlMjBteXRoaWNhbHxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["92% Wellbeing improvement", "Zero crisis incidents", "Proactive intervention system"],
      color: "#06B6D4"
    },
    {
      title: "Oxford Adaptive Academy",
      subtitle: "Personalized Learning Evolution",
      description: "Dynamic curriculum adaptation based on real-time cognitive and emotional state analysis for optimal learning outcomes.",
      realImage: "https://images.unsplash.com/photo-1716630408610-5b7023bb24a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHNjaG9vbCUyMGJ1aWxkaW5ncyUyMHN0cmVldHxlbnwxfHx8fDE3NTg1NjY1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      fantasyOverlay: "https://images.unsplash.com/photo-1706530593874-3adf001c2aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBjbGV2ZXIlMjBpbnRlbGxpZ2VudCUyMGFuaW1hbHxlbnwxfHx8fDE3NTg1NjY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: ["89% Learning acceleration", "100% Personalization accuracy", "Adaptive AI evolution"],
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cyberpunk grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(165, 243, 252, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(165, 243, 252, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
            Reality + Fantasy
          </motion.h2>
          <p className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto">
            Where traditional institutions merge with cybernetic consciousness
          </p>
        </motion.div>

        {/* Case studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Split-world container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#A5F3FC]/20 bg-gradient-to-br from-[#1E293B]/30 to-[#0A0F1F]/50 backdrop-blur-md">
                {/* Background split effect */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden">
                  {/* Real world side */}
                  <motion.div
                    className="absolute inset-0 w-1/2"
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <ImageWithFallback
                      src={study.realImage}
                      alt="Real Institution"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0F1F]/50" />
                    
                    {/* Real world label */}
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-[#1E293B]/80 border border-[#A5F3FC]/30">
                      <span className="text-sm text-[#A5F3FC] font-mono">REALITY.exe</span>
                    </div>
                  </motion.div>

                  {/* Fantasy/Cyberpunk side */}
                  <motion.div
                    className="absolute inset-0 left-1/2 w-1/2"
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-[#9D4EDD]/20 to-[#06B6D4]/20">
                      {/* Fantasy overlay */}
                      <ImageWithFallback
                        src={study.fantasyOverlay}
                        alt="AI Guardian"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen"
                      />
                      
                      {/* Cyberpunk effects */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: study.color }}
                        animate={{
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Holographic scan lines */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(165, 243, 252, 0.1) 3px, rgba(165, 243, 252, 0.1) 6px)'
                        }}
                        animate={{
                          y: ['-100%', '100%']
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      {/* Fantasy world label */}
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-[#9D4EDD]/20 border border-[#9D4EDD]/50">
                        <span className="text-sm font-mono" style={{ color: study.color }}>
                          AKUNO.sys
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Central divider with merge effect */}
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A5F3FC] via-[#9D4EDD] to-[#06B6D4]"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(165, 243, 252, 0.5)',
                        '0 0 40px rgba(157, 78, 221, 0.7)',
                        '0 0 20px rgba(165, 243, 252, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Merge symbol */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#A5F3FC] bg-[#0A0F1F] flex items-center justify-center z-10"
                    animate={{
                      rotate: [0, 360],
                      boxShadow: [
                        '0 0 20px rgba(165, 243, 252, 0.5)',
                        '0 0 40px rgba(157, 78, 221, 0.4)',
                        '0 0 20px rgba(165, 243, 252, 0.5)'
                      ]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <span className="text-[#A5F3FC] text-xl">⟡</span>
                  </motion.div>
                </div>

                {/* Content overlay */}
                <motion.div
                  className="absolute inset-0 flex items-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full p-8 bg-gradient-to-t from-[#0A0F1F]/95 to-transparent">
                    <div className="max-w-4xl">
                      <motion.h3 
                        className="text-3xl lg:text-4xl font-bold mb-2 text-[#A5F3FC]"
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(165, 243, 252, 0.3)',
                            '0 0 30px rgba(157, 78, 221, 0.2)',
                            '0 0 20px rgba(165, 243, 252, 0.3)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {study.title}
                      </motion.h3>
                      
                      <p 
                        className="text-lg font-medium mb-4"
                        style={{ color: study.color }}
                      >
                        {study.subtitle}
                      </p>
                      
                      <p className="text-[#A5F3FC]/70 mb-6 leading-relaxed max-w-2xl">
                        {study.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4">
                        {study.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            className="px-4 py-2 rounded-lg border border-[#A5F3FC]/20 bg-[#1E293B]/50 backdrop-blur-sm"
                            animate={{
                              borderColor: [
                                'rgba(165, 243, 252, 0.2)',
                                `${study.color}40`,
                                'rgba(165, 243, 252, 0.2)'
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                          >
                            <span className="text-sm text-[#A5F3FC]/80">{stat}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Holographic frame */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section footer */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-[#A5F3FC]/60 italic"
            animate={{
              textShadow: [
                '0 0 10px rgba(165, 243, 252, 0.2)',
                '0 0 20px rgba(157, 78, 221, 0.1)',
                '0 0 10px rgba(165, 243, 252, 0.2)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "Reality and fantasy converge. The future of education is here."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}