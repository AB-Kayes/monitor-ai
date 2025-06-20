"use client"

import { motion } from "framer-motion"
import { FileText, Brain, Sparkles, Download, Type, Settings, Cpu, MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"
import { websiteConfig } from "@/data/website-config"

// Icon mapping for dynamic icon rendering
const iconMap = {
  FileText,
  Brain,
  Sparkles,
  Download,
  Type,
  Settings,
  Cpu,
  MessageSquare,
  CheckCircle,
}

export default function HowItWorksSection() {
  const { howItWorks } = websiteConfig

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-pink-900/30" />

      {/* Flowing Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0px, rgba(59, 130, 246, 0.1) 1px, transparent 1px, transparent 20px),
                           repeating-linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 20px)`,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{howItWorks.title}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{howItWorks.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-blue-400/30 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {howItWorks.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || FileText
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-6 border border-blue-400/30">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <IconComponent className="w-8 h-8 text-blue-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">{step.description}</p>

                  {/* Step Illustration */}
                  <div className="relative h-40 rounded-lg overflow-hidden mx-auto max-w-xs border border-white/20">
                    <Image
                      src={step.image.src || "/placeholder.svg"}
                      alt={step.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{howItWorks.architecture.title}</h3>
                <p className="text-blue-100 mb-6">{howItWorks.architecture.description}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {howItWorks.architecture.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Architecture Diagram */}
              <div className="relative h-80 rounded-xl overflow-hidden border border-white/20">
                <Image
                  src={howItWorks.architecture.image.src || "/placeholder.svg"}
                  alt={howItWorks.architecture.image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
