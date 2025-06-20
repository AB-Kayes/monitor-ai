"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Brain,
  Globe,
  Shield,
  Clock,
  Sparkles,
  ImageIcon,
  Palette,
  Edit,
  Layers,
  Download,
  Smartphone,
  Code2,
  GitBranch,
  TestTube,
  FileText,
  Gauge,
  Users,
} from "lucide-react"
import Image from "next/image"
import { websiteConfig } from "@/data/website-config"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Zap,
  Brain,
  Globe,
  Shield,
  Clock,
  Sparkles,
  Image: ImageIcon,
  Palette,
  Edit,
  Layers,
  Download,
  Smartphone,
  Code2,
  GitBranch,
  TestTube,
  FileText,
  Gauge,
  Users,
}

export default function FeaturesSection() {
  const { features } = websiteConfig

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
            backgroundSize: "600px 600px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{features.title}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{features.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Zap
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-300/50 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-blue-100 leading-relaxed mb-6">{feature.description}</p>

                {/* Feature Screenshot/Mockup */}
                <div className="relative h-48 rounded-lg overflow-hidden border border-white/20">
                  <Image
                    src={feature.image.src || "/placeholder.svg"}
                    alt={feature.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
