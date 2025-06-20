"use client"

import { motion } from "framer-motion"
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  DollarSign,
  Users,
  Bug,
  BookOpen,
  RefreshCw,
  Search,
  Shield,
  Palette,
  Infinity,
} from "lucide-react"
import Image from "next/image"
import { websiteConfig } from "@/data/website-config"

// Icon mapping for dynamic icon rendering
const iconMap = {
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  DollarSign,
  Users,
  Bug,
  BookOpen,
  RefreshCw,
  Search,
  Shield,
  Palette,
  Infinity,
}

export default function ProblemSolutionSection() {
  const { problemSolution } = websiteConfig

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 to-pink-50/50" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.05) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(147, 51, 234, 0.05) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.05) 75%),
                           linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.05) 75%)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{problemSolution.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{problemSolution.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-red-100/80 backdrop-blur-sm text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-200/50">
                <AlertCircle className="w-4 h-4" />
                {problemSolution.problem.badge}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">{problemSolution.problem.title}</h3>
            </div>

            <div className="space-y-6">
              {problemSolution.problem.points.map((point, index) => {
                const IconComponent = iconMap[point.icon as keyof typeof iconMap] || AlertCircle
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60"
                  >
                    <IconComponent className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">{point.title}</h4>
                      <p className="text-slate-600">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Problem Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden mt-8 border border-white/60"
            >
              <Image
                src={problemSolution.problem.image.src || "/placeholder.svg"}
                alt={problemSolution.problem.image.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200/50">
                <CheckCircle className="w-4 h-4" />
                {problemSolution.solution.badge}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">{problemSolution.solution.title}</h3>
            </div>

            {/* Solution Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/60"
            >
              <Image
                src={problemSolution.solution.image.src || "/placeholder.svg"}
                alt={problemSolution.solution.image.alt}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              {problemSolution.solution.points.map((point, index) => {
                const IconComponent = iconMap[point.icon as keyof typeof iconMap] || CheckCircle
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60"
                  >
                    <IconComponent className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">{point.title}</h4>
                      <p className="text-slate-600">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
