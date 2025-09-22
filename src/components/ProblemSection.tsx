import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ProblemSection() {
  const problems = [
    {
      title: "Mental Health Crisis in Education",
      description: "Students struggle with anxiety, depression, and isolation in traditional academic environments.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODU0NDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      creature: "https://images.unsplash.com/photo-1751709064007-b0ce4cdfcce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvd2wlMjBtYWplc3RpYyUyMHdpc2RvbXxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Lack of Personalized Support",
      description: "One-size-fits-all approaches fail to address individual student needs and learning styles.",
      image: "https://images.unsplash.com/photo-1716630408610-5b7023bb24a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHNjaG9vbCUyMGJ1aWxkaW5ncyUyMHN0cmVldHxlbnwxfHx8fDE3NTg1NjY1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      creature: "https://images.unsplash.com/photo-1669205617241-bf837080affd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9lbml4JTIwZmlyZSUyMGJpcmQlMjBteXRoaWNhbHxlbnwxfHx8fDE3NTg1NjY1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Disconnection from Purpose",
      description: "Students lose motivation and struggle to find meaning in their educational journey.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODU0NDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      creature: "https://images.unsplash.com/photo-1706530593874-3adf001c2aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBjbGV2ZXIlMjBpbnRlbGxpZ2VudCUyMGFuaW1hbHxlbnwxfHx8fDE3NTg1NjY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="relative py-32 px-6">
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
                '0 0 20px rgba(157, 78, 221, 0.3)',
                '0 0 30px rgba(6, 182, 212, 0.2)',
                '0 0 20px rgba(157, 78, 221, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            The Reality We Face
          </motion.h2>
          <p className="text-xl text-[#A5F3FC]/70 max-w-3xl mx-auto">
            In our world, students navigate challenges that traditional systems cannot address alone.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Problem card */}
              <div className="relative rounded-xl overflow-hidden border border-[#A5F3FC]/20 bg-gradient-to-b from-[#1E293B]/50 to-[#0A0F1F]/50 backdrop-blur-sm">
                {/* Real-world image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Holographic creature overlay */}
                  <motion.div
                    className="absolute top-4 right-4 w-24 h-24 rounded-full overflow-hidden border-2 border-[#9D4EDD] opacity-70"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(157, 78, 221, 0.5)',
                        '0 0 40px rgba(6, 182, 212, 0.3)',
                        '0 0 20px rgba(157, 78, 221, 0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <ImageWithFallback
                      src={problem.creature}
                      alt="Guardian Spirit"
                      className="w-full h-full object-cover opacity-80 mix-blend-screen"
                    />
                    
                    {/* Hologram scanning lines */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A5F3FC]/20 to-transparent"
                      animate={{
                        y: [-50, 50],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Problem overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F]/90 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#A5F3FC]">
                    {problem.title}
                  </h3>
                  <p className="text-[#A5F3FC]/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Protective aura effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      'inset 0 0 0 1px rgba(157, 78, 221, 0.2)',
                      'inset 0 0 0 1px rgba(6, 182, 212, 0.3)',
                      'inset 0 0 0 1px rgba(139, 92, 246, 0.2)',
                      'inset 0 0 0 1px rgba(157, 78, 221, 0.2)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>

              {/* Floating particles around card */}
              <motion.div
                className="absolute -inset-4 rounded-xl opacity-30 pointer-events-none"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-[#A5F3FC]/60 italic">
            But there is hope. Our AI guardians are here to guide and protect...
          </p>
        </motion.div>
      </div>
    </section>
  );
}