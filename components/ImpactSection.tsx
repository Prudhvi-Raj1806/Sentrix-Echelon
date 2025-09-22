import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ImpactSection() {
  const [counters, setCounters] = useState({
    students: 0,
    wellbeing: 0,
    academic: 0,
    satisfaction: 0
  });

  const targetValues = {
    students: 50000,
    wellbeing: 94,
    academic: 87,
    satisfaction: 98
  };

  const companions = [
    {
      name: "Owl Guardian",
      image: "https://images.unsplash.com/photo-1751709064007-b0ce4cdfcce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBtYWplc3RpYyUyMHdpc2RvbXxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#9D4EDD",
      metric: "students"
    },
    {
      name: "Phoenix Guardian", 
      image: "https://images.unsplash.com/photo-1669205617241-bf837080affd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9lbml4JTIwZmlyZSUyMGJpcmQlMjBteXRoaWNhbHxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#06B6D4",
      metric: "wellbeing"
    },
    {
      name: "Fox Navigator",
      image: "https://images.unsplash.com/photo-1706530593874-3adf001c2aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBjbGV2ZXIlMjBpbnRlbGxpZ2VudCUyMGFuaW1hbHxlbnwxfHx8fDE3NTg1NjY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#8B5CF6",
      metric: "academic"
    }
  ];

  const metrics = [
    {
      key: "students",
      label: "Students Guided",
      value: counters.students,
      target: targetValues.students,
      suffix: "+",
      description: "Across universities and institutions worldwide"
    },
    {
      key: "wellbeing",
      label: "Wellbeing Improvement",
      value: counters.wellbeing,
      target: targetValues.wellbeing,
      suffix: "%",
      description: "Reported mental health enhancement"
    },
    {
      key: "academic",
      label: "Academic Success",
      value: counters.academic,
      target: targetValues.academic,
      suffix: "%",
      description: "Improvement in learning outcomes"
    },
    {
      key: "satisfaction",
      label: "User Satisfaction",
      value: counters.satisfaction,
      target: targetValues.satisfaction,
      suffix: "%",
      description: "Would recommend to other students"
    }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        students: Math.min(prev.students + Math.ceil(targetValues.students / steps), targetValues.students),
        wellbeing: Math.min(prev.wellbeing + Math.ceil(targetValues.wellbeing / steps), targetValues.wellbeing),
        academic: Math.min(prev.academic + Math.ceil(targetValues.academic / steps), targetValues.academic),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targetValues.satisfaction / steps), targetValues.satisfaction)
      }));
    }, interval);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(targetValues);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Holographic grid background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(157, 78, 221, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(165, 243, 252, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A5F3FC] via-[#9D4EDD] to-[#06B6D4] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Global Impact
          </motion.h2>
          <p className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto">
            Real-time metrics from the cybernetic realm, projected by our AI guardians
          </p>
        </motion.div>

        {/* Companion projectors */}
        <motion.div
          className="flex justify-center items-center mb-16 space-x-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          {companions.map((companion, index) => (
            <motion.div
              key={index}
              className="relative"
              animate={{
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-24 h-24 rounded-full overflow-hidden border-2 relative"
                style={{ borderColor: companion.color }}
                animate={{
                  boxShadow: [
                    `0 0 30px ${companion.color}50`,
                    `0 0 60px ${companion.color}80`,
                    `0 0 30px ${companion.color}50`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.7 }}
              >
                <ImageWithFallback
                  src={companion.image}
                  alt={companion.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Projection beam */}
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-20 opacity-60"
                  style={{ backgroundColor: companion.color }}
                  animate={{
                    height: [80, 120, 80],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>

              {/* Companion label */}
              <p 
                className="text-center text-sm mt-4 font-medium"
                style={{ color: companion.color }}
              >
                {companion.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Holographic metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Hologram counter */}
              <motion.div
                className="relative p-8 rounded-2xl border border-[#A5F3FC]/30 bg-gradient-to-br from-[#1E293B]/40 to-[#0A0F1F]/60 backdrop-blur-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={{
                  borderColor: [
                    'rgba(165, 243, 252, 0.3)',
                    'rgba(157, 78, 221, 0.4)',
                    'rgba(6, 182, 212, 0.3)',
                    'rgba(165, 243, 252, 0.3)'
                  ]
                }}
                transition={{ 
                  borderColor: { duration: 4, repeat: Infinity },
                  scale: { duration: 0.3 }
                }}
              >
                {/* Scanning lines effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(165, 243, 252, 0.05) 4px, rgba(165, 243, 252, 0.05) 8px)'
                  }}
                  animate={{
                    y: ['-100%', '100%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />

                {/* Main counter */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-b from-[#A5F3FC] to-[#9D4EDD] bg-clip-text text-transparent"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(165, 243, 252, 0.5)',
                        '0 0 40px rgba(157, 78, 221, 0.3)',
                        '0 0 20px rgba(165, 243, 252, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {metric.value.toLocaleString()}{metric.suffix}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-[#A5F3FC]">
                    {metric.label}
                  </h3>

                  <p className="text-sm text-[#A5F3FC]/60 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Holographic corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#A5F3FC] opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#A5F3FC] opacity-60"></div>

                {/* Data stream effect */}
                <motion.div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-1"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-1 bg-[#06B6D4] rounded"
                      animate={{
                        scaleX: [0.5, 1, 0.5],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Floating energy field */}
              <motion.div
                className="absolute -inset-4 rounded-2xl pointer-events-none"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(165, 243, 252, 0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(165, 243, 252, 0.1) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: index * 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Real-time indicator */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/5"
            animate={{
              borderColor: [
                'rgba(6, 182, 212, 0.3)',
                'rgba(6, 182, 212, 0.6)',
                'rgba(6, 182, 212, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-[#06B6D4]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-[#06B6D4] font-mono text-sm">
              REAL-TIME DATA STREAM ACTIVE
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}