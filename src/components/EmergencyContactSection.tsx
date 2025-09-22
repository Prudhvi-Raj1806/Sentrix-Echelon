import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, Shield, Clock, AlertTriangle, MapPin, User } from 'lucide-react';

export default function EmergencyContactSection() {
  const emergencyContacts = [
    {
      id: 'crisis',
      title: 'Crisis Intervention',
      number: '988',
      description: 'National Suicide Prevention Lifeline',
      available: '24/7',
      type: 'crisis',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'mental-health',
      title: 'Mental Health Emergency',
      number: '1-800-273-8255',
      description: 'SAMHSA National Helpline',
      available: '24/7',
      type: 'mental-health',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'local-emergency',
      title: 'Local Emergency Services',
      number: '911',
      description: 'Immediate emergency response',
      available: '24/7',
      type: 'emergency',
      icon: <Phone className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'campus-security',
      title: 'Campus Security',
      number: '1-555-CAMPUS',
      description: 'On-campus emergency assistance',
      available: '24/7',
      type: 'campus',
      icon: <MapPin className="w-5 h-5" />,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const handleEmergencyCall = (contact: typeof emergencyContacts[0]) => {
    // Track emergency contact usage
    console.log(`Emergency contact initiated: ${contact.id} at ${new Date().toISOString()}`);
    
    // In a real app, this would log to analytics/tracking system
    // trackEvent('emergency_contact_used', {
    //   contact_type: contact.type,
    //   contact_id: contact.id,
    //   timestamp: new Date().toISOString(),
    //   user_session: 'current_session_id'
    // });

    // Initiate call
    window.location.href = `tel:${contact.number}`;
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/80 via-[#0A0F1F]/90 to-[#0A0F1F]/95" />
        
        {/* Protective energy field effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
                'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
                'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Shield className="w-8 h-8 text-[#22C55E]" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#22C55E] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent">
              Emergency Support Network
            </h2>
            <Shield className="w-8 h-8 text-[#06B6D4]" />
          </motion.div>
          
          <p className="text-xl text-[#A5F3FC]/80 max-w-3xl mx-auto leading-relaxed">
            Your safety is our priority. Access immediate help and support through our verified emergency contact network with real-time tracking and monitoring.
          </p>
        </motion.div>

        {/* Emergency Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyContacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-[#A5F3FC]/20 bg-[#0A0F1F]/80 backdrop-blur-sm hover:border-[#A5F3FC]/40 transition-all duration-300 group">
                {/* Card background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={{
                    opacity: [0.05, 0.15, 0.05]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />
                
                <div className="relative p-6">
                  {/* Type Badge */}
                  <Badge className={`mb-4 bg-gradient-to-r ${contact.color} text-white border-0`}>
                    {contact.icon}
                    <span className="ml-2 uppercase tracking-wide">{contact.type}</span>
                  </Badge>

                  {/* Contact Info */}
                  <h3 className="text-xl font-bold text-[#A5F3FC] mb-2">
                    {contact.title}
                  </h3>
                  
                  <p className="text-[#A5F3FC]/70 mb-4 text-sm leading-relaxed">
                    {contact.description}
                  </p>

                  {/* Availability */}
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-[#22C55E]" />
                    <span className="text-[#22C55E] font-medium">{contact.available}</span>
                  </div>

                  {/* Call Button */}
                  <Button
                    onClick={() => handleEmergencyCall(contact)}
                    className={`w-full bg-gradient-to-r ${contact.color} hover:scale-105 transition-all duration-300 border-0 font-bold`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call {contact.number}
                  </Button>
                </div>

                {/* Pulse effect for high priority */}
                {contact.type === 'crisis' && (
                  <motion.div
                    className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-50"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block p-6 border-[#A5F3FC]/20 bg-[#0A0F1F]/60 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <User className="w-6 h-6 text-[#9D4EDD]" />
              </motion.div>
              
              <div className="text-left">
                <h4 className="font-bold text-[#A5F3FC] mb-1">
                  24/7 LUMORA VR Support
                </h4>
                <p className="text-[#A5F3FC]/70 text-sm">
                  For VR-specific concerns or technical support: 
                  <span className="text-[#06B6D4] font-medium ml-2">support@lumora.vr</span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tracking Notice */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A5F3FC]/50 text-sm italic">
            🔒 All emergency contacts are logged securely for safety monitoring and follow-up support
          </p>
        </motion.div>
      </div>
    </section>
  );
}