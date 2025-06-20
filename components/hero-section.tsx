"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Palette, Code } from "lucide-react"
import Image from "next/image"
import { websiteConfig } from "@/data/website-config"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Sparkles,
  Palette,
  Code,
}

export default function HeroSection() {
  const { hero, brand } = websiteConfig
  const IconComponent = iconMap[hero.badge.icon as keyof typeof iconMap] || Sparkles

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <a href="https://aaladinai.com/" target="blank"><div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-blue-100 mb-8 border border-white/20">
              <IconComponent className="w-4 h-4 text-blue-300" />
              {hero.badge.text}
            </div></a>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                {hero.headline}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">{hero.subheadline}</p>

            <p className="text-lg text-blue-200 mb-12">{hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                href={hero.primaryCTA.action}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-blue-400/30"
                >
                {hero.primaryCTA.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              {/* <button className="text-blue-200 hover:text-white font-medium text-lg underline underline-offset-4 hover:underline-offset-8 transition-all duration-300">
                {hero.secondaryCTA.text}
              </button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative w-full h-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center">
              <Image
                src={hero.heroImage.src || "/placeholder.svg"}
                alt={hero.heroImage.alt}
                fill
                className="object-cover w-full h-full opacity-90"
                priority
              />
              {/* Floating UI Elements */}
              {/* {hero.floatingElements.map((element, index) => {
                const positionClasses = {
                  "top-left": "top-[20%] left-[10%]",
                  "top-right": "top-[20%] right-[10%]",
                  "bottom-left": "bottom-[20%] left-[10%]",
                  "bottom-right": "bottom-[20%] right-[10%]",
                }

                return (
                  <motion.div
                    key={index}
                    className={`absolute ${positionClasses[element.position]} bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20`}
                    animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <Image src={element.src || "/placeholder.svg"} alt={element.alt} width={120} height={60} />
                  </motion.div>
                )
              })} */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
