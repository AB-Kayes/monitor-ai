import HeroSection from "@/components/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import FeaturesSection from "@/components/features-section"
import VideoDemoSection from "@/components/video-demo-section"
import HowItWorksSection from "@/components/how-it-works-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <ProblemSolutionSection />
      <VideoDemoSection />
      <FeaturesSection />
      {/* <HowItWorksSection /> */}
    </main>
  )
}
