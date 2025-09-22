import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  TrendingUp, 
  Brain, 
  Heart, 
  Shield, 
  Clock, 
  Target, 
  Award, 
  Activity,
  BarChart3,
  Calendar,
  Users,
  Zap
} from 'lucide-react';

export default function StudentProgressDashboard() {
  // Mock student data - in real app this would come from API
  const studentData = {
    name: "Alex Chen",
    level: "Advanced Explorer",
    xp: 2840,
    nextLevelXp: 3000,
    streakDays: 12,
    sessionsCompleted: 47,
    totalTimeSpent: "89h 23m",
    companionsBonded: 3
  };

  const progressMetrics = [
    {
      category: "Emotional Wellness",
      progress: 78,
      color: "from-pink-500 to-rose-500",
      icon: <Heart className="w-5 h-5" />,
      sessions: 15,
      improvement: "+12%"
    },
    {
      category: "Cognitive Growth",
      progress: 65,
      color: "from-blue-500 to-indigo-500",
      icon: <Brain className="w-5 h-5" />,
      sessions: 22,
      improvement: "+8%"
    },
    {
      category: "Social Confidence",
      progress: 82,
      color: "from-green-500 to-emerald-500",
      icon: <Users className="w-5 h-5" />,
      sessions: 18,
      improvement: "+15%"
    },
    {
      category: "Stress Management",
      progress: 71,
      color: "from-purple-500 to-violet-500",
      icon: <Shield className="w-5 h-5" />,
      sessions: 12,
      improvement: "+9%"
    }
  ];

  const recentSessions = [
    {
      date: "Today",
      duration: "45 min",
      companion: "Azure Guardian",
      activity: "Anxiety Breathing Exercise",
      mood: "Calm",
      status: "completed"
    },
    {
      date: "Yesterday",
      duration: "32 min",
      companion: "Violet Mentor",
      activity: "Confidence Building",
      mood: "Confident",
      status: "completed"
    },
    {
      date: "2 days ago",
      duration: "28 min",
      companion: "Crystal Protector",
      activity: "Mindfulness Training",
      mood: "Peaceful",
      status: "completed"
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Completed first VR session", earned: true },
    { name: "Companion Bond", description: "Bonded with 3 AI companions", earned: true },
    { name: "Consistency Master", description: "10-day streak", earned: true },
    { name: "Breakthrough", description: "Major progress milestone", earned: false },
    { name: "VR Explorer", description: "Explored all environments", earned: false }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/85 via-[#0A0F1F]/95 to-[#0A0F1F]" />
        
        {/* Data visualization particles */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))',
                'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
                'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BarChart3 className="w-8 h-8 text-[#8B5CF6]" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#9D4EDD] bg-clip-text text-transparent">
              Student Progress Dashboard
            </h2>
            <Activity className="w-8 h-8 text-[#06B6D4]" />
          </motion.div>
          
          <p className="text-xl text-[#A5F3FC]/80 max-w-3xl mx-auto leading-relaxed">
            Track your journey through immersive VR therapy with real-time analytics, companion interactions, and personalized growth insights.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#0A0F1F]/60 border border-[#A5F3FC]/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#9D4EDD] data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-[#9D4EDD] data-[state=active]:text-white">
              Progress
            </TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-[#9D4EDD] data-[state=active]:text-white">
              Sessions
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-[#9D4EDD] data-[state=active]:text-white">
              Achievements
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Student Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Current Level", value: studentData.level, icon: <Award className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
                { label: "Total XP", value: `${studentData.xp}/${studentData.nextLevelXp}`, icon: <Zap className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
                { label: "Streak Days", value: studentData.streakDays, icon: <Calendar className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
                { label: "Sessions", value: studentData.sessionsCompleted, icon: <Target className="w-5 h-5" />, color: "from-purple-500 to-violet-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 border-[#A5F3FC]/20 bg-[#0A0F1F]/80 backdrop-blur-sm hover:border-[#A5F3FC]/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}
                        animate={{
                          boxShadow: [
                            `0 0 20px rgba(157, 78, 221, 0.3)`,
                            `0 0 30px rgba(6, 182, 212, 0.2)`,
                            `0 0 20px rgba(157, 78, 221, 0.3)`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div>
                        <p className="text-[#A5F3FC]/70 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-[#A5F3FC]">{stat.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* XP Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-[#A5F3FC]/20 bg-[#0A0F1F]/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#A5F3FC]">Level Progress</h3>
                  <Badge className="bg-gradient-to-r from-[#9D4EDD] to-[#06B6D4] text-white border-0">
                    {Math.round((studentData.xp / studentData.nextLevelXp) * 100)}% Complete
                  </Badge>
                </div>
                <Progress 
                  value={(studentData.xp / studentData.nextLevelXp) * 100} 
                  className="h-3 mb-2"
                />
                <p className="text-[#A5F3FC]/70 text-sm">
                  {studentData.nextLevelXp - studentData.xp} XP until next level
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {progressMetrics.map((metric, index) => (
                <motion.div
                  key={metric.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 border-[#A5F3FC]/20 bg-[#0A0F1F]/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${metric.color}`}
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {metric.icon}
                        </motion.div>
                        <h3 className="font-bold text-[#A5F3FC]">{metric.category}</h3>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                        {metric.improvement}
                      </Badge>
                    </div>
                    
                    <Progress value={metric.progress} className="h-3 mb-2" />
                    
                    <div className="flex justify-between text-sm text-[#A5F3FC]/70">
                      <span>{metric.progress}% Complete</span>
                      <span>{metric.sessions} sessions</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <div className="space-y-4">
              {recentSessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 border-[#A5F3FC]/20 bg-[#0A0F1F]/80 backdrop-blur-sm hover:border-[#A5F3FC]/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-green-500"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div>
                          <h4 className="font-bold text-[#A5F3FC]">{session.activity}</h4>
                          <p className="text-[#A5F3FC]/70 text-sm">
                            with {session.companion} • {session.date}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className="bg-[#9D4EDD]/20 text-[#9D4EDD] border-[#9D4EDD]/50 mb-2">
                          {session.mood}
                        </Badge>
                        <p className="text-[#A5F3FC]/70 text-sm">{session.duration}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 border transition-all duration-300 ${
                    achievement.earned 
                      ? 'border-[#22C55E]/50 bg-[#22C55E]/10' 
                      : 'border-[#A5F3FC]/20 bg-[#0A0F1F]/80'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className={`p-2 rounded-full ${
                          achievement.earned 
                            ? 'bg-[#22C55E] text-white' 
                            : 'bg-[#A5F3FC]/20 text-[#A5F3FC]'
                        }`}
                        animate={achievement.earned ? {
                          boxShadow: [
                            '0 0 20px rgba(34, 197, 94, 0.5)',
                            '0 0 30px rgba(34, 197, 94, 0.3)',
                            '0 0 20px rgba(34, 197, 94, 0.5)'
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Award className="w-5 h-5" />
                      </motion.div>
                      <h4 className="font-bold text-[#A5F3FC]">{achievement.name}</h4>
                    </div>
                    <p className="text-[#A5F3FC]/70 text-sm mb-4">
                      {achievement.description}
                    </p>
                    <Badge className={achievement.earned 
                      ? "bg-[#22C55E] text-white border-0" 
                      : "bg-[#A5F3FC]/20 text-[#A5F3FC] border-[#A5F3FC]/50"
                    }>
                      {achievement.earned ? "Earned" : "Locked"}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Export/Share Options */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-[#9D4EDD] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] border-0">
              <TrendingUp className="w-4 h-4 mr-2" />
              Export Progress Report
            </Button>
            <Button variant="outline" className="border-[#A5F3FC]/50 text-[#A5F3FC] hover:bg-[#A5F3FC]/10">
              <Users className="w-4 h-4 mr-2" />
              Share with Counselor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}