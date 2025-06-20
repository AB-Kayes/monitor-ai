"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"
import { websiteConfig } from "@/data/website-config"

export default function VideoDemoSection() {
  const { videoDemo } = websiteConfig

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-indigo-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/80 to-purple-50/80" />

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.1) 0deg, transparent 60deg, rgba(147, 51, 234, 0.1) 120deg, transparent 180deg, rgba(59, 130, 246, 0.1) 240deg, transparent 300deg, rgba(147, 51, 234, 0.1) 360deg)`,
            backgroundSize: "200px 200px",
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{videoDemo.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{videoDemo.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative md:col-span-3"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/60">
              {/* Video Element */}
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={videoDemo.video.src} type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Demo Video</p>
                    <p className="text-sm opacity-80">AI Tool in Action</p>
                  </div>
                </div>
              </video>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/30 rounded-full blur-xl" />
          </motion.div>

          {/* UI Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Intuitive Interface</h3>

            {videoDemo.uiScreenshots.map((screenshot, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg border border-white/60">
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                  <p className="text-white p-4 text-sm font-medium">{screenshot.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-8">{videoDemo.cta.description}</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-400/30">
            {videoDemo.cta.text}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
