export interface WebsiteConfig {
  // Brand Information
  brand: {
    name: string
    tagline: string
    description: string
    logo?: string
  }

  // Hero Section
  hero: {
    badge: {
      icon: string
      text: string
    }
    headline: string
    subheadline: string
    description: string
    primaryCTA: {
      text: string
      action: string
    }
    secondaryCTA: {
      text: string
      action: string
    }
    heroImage: {
      src: string
      alt: string
    }
    floatingElements: Array<{
      src: string
      alt: string
      position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    }>
  }

  // Problem-Solution Section
  problemSolution: {
    title: string
    subtitle: string
    problem: {
      badge: string
      title: string
      image: {
        src: string
        alt: string
      }
      points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      badge: string
      title: string
      image: {
        src: string
        alt: string
      }
      points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
  }

  // Features Section
  features: {
    title: string
    subtitle: string
    items: Array<{
      icon: string
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
    }>
  }

  // Video Demo Section
  videoDemo: {
    title: string
    subtitle: string
    video: {
      src: string
      poster?: string
    }
    uiScreenshots: Array<{
      src: string
      alt: string
      caption: string
    }>
    cta: {
      text: string
      description: string
    }
  }

  // How It Works Section
  howItWorks: {
    title: string
    subtitle: string
    steps: Array<{
      icon: string
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
    }>
    architecture: {
      title: string
      description: string
      image: {
        src: string
        alt: string
      }
      technologies: string[]
    }
  }

  // Theme Configuration
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
}

// Default configuration for Aaladin AI
export const websiteConfig: WebsiteConfig = {
  brand: {
    name: "Monitor AI",
    tagline: "Bringing Trust & Clarity to Online Learning",
    description:
      "Monitor AI helps parents, teachers, and students stay connected, informed, and engaged during online classes. Our AI ensures transparency, attention tracking, and real-time performance insights in virtual classrooms.",
    logo: "/logo-monitorai.svg",
  },

  hero: {
    badge: {
      icon: "Eye",
      text: "Powered by Aaladin AI",
    },
    headline: "AI-Powered Monitoring for Online Education",
    subheadline: "Empower parents. Support teachers. Focus students.",
    description:
      "Monitor AI bridges the gap between traditional and online classrooms by providing real-time insights, engagement tracking, and parental oversight — ensuring a better, smarter virtual learning experience.",
    primaryCTA: {
      text: "Contact Us to Get Started",
      action: "https://www.aaladinai.com/contact",
    },
    secondaryCTA: {
      text: "See How It Works",
      action: "#demo",
    },
    heroImage: {
      src: "/1.jpg",
      alt: "AI education monitoring interface",
    },
    floatingElements: [
      {
        src: "/icons/attention-alert.svg",
        alt: "Focus Detection",
        position: "top-right",
      },
      {
        src: "/icons/parent-dashboard.svg",
        alt: "Parent Monitor",
        position: "bottom-left",
      },
    ],
  },

  problemSolution: {
    title: "Solving Online Classroom Challenges",
    subtitle: "We’re making online education smarter and safer",
    problem: {
      badge: "The Problem",
      title: "Online Classes Aren’t Enough",
      image: {
        src: "/solution1.jpg",
        alt: "Parents confused about online learning",
      },
      points: [
        {
          icon: "HelpCircle",
          title: "Parents Feel Left Out",
          description:
            "Most parents don’t know what their children are learning or how engaged they are in online classes.",
        },
        {
          icon: "AlertTriangle",
          title: "Teachers Struggle to Track Engagement",
          description:
            "Without eye contact or body language, teachers are unsure whether students are truly focused.",
        },
        {
          icon: "UserX",
          title: "Students Lose Motivation",
          description:
            "Distractions and a lack of structure can reduce student attention, retention, and motivation.",
        },
      ],
    },
    solution: {
      badge: "Our Solution",
      title: "Monitor AI: Smarter, Safer Virtual Classrooms",
      image: {
        src: "/solution2.jpg",
        alt: "Monitor AI dashboard in action",
      },
      points: [
        {
          icon: "Eye",
          title: "Attention Detection",
          description:
            "AI uses facial cues and activity to detect student focus levels in real-time and alert if disengaged.",
        },
        {
          icon: "BarChart2",
          title: "Learning Analytics",
          description:
            "Teachers and parents get clear reports on participation, attention span, and comprehension trends.",
        },
        {
          icon: "Smartphone",
          title: "Parental Insights",
          description:
            "Parents get simplified updates and live session summaries through a mobile-friendly dashboard.",
        },
      ],
    },
  },

  features: {
    title: "Features That Make Learning Transparent",
    subtitle: "Built for the online classroom ecosystem",
    items: [
      {
        icon: "Eye",
        title: "AI Attention Tracker",
        description: "Monitors student eye movement and engagement during online sessions.",
        image: {
          src: "/feature1.jpg",
          alt: "Attention tracking feature",
        },
      },
      {
        icon: "Smartphone",
        title: "Parent-Friendly Dashboard",
        description: "Shows live status, session summaries, and behavior alerts directly to guardians.",
        image: {
          src: "/feature2.jpg",
          alt: "Parent dashboard",
        },
      },
      {
        icon: "Bell",
        title: "Real-Time Alerts",
        description: "Notifies teachers if students lose focus or are inactive for a long time.",
        image: {
          src: "/feature3.jpg",
          alt: "Real-time attention alert",
        },
      },
    ],
  },

  videoDemo: {
    title: "Watch Monitor AI in Action",
    subtitle: "How we solve online class issues in real time",
    video: {
      src: "/monitorAI.mp4",
      poster: "/images/monitorai-poster.jpg",
    },
    uiScreenshots: [
      {
        src: "/screens/parent-dashboard.png",
        alt: "Parent summary dashboard",
        caption: "Parent’s View of Student Performance",
      },
      {
        src: "/screens/teacher-insights.png",
        alt: "Teacher engagement interface",
        caption: "Live Focus Monitor for Teachers",
      },
    ],
    cta: {
      text: "Contact Us for Demo",
      description: "Schools and parents can now sign up for private beta access.",
    },
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "Smart, simple, and seamless integration with your classroom",
    steps: [
      {
        icon: "Video",
        title: "Connect to Online Classes",
        description: "Integrate Monitor AI with Zoom, Meet, or your LMS platform in one click.",
        image: {
          src: "/steps/connect-class.svg",
          alt: "Online class connection step",
        },
      },
      {
        icon: "Eye",
        title: "AI Starts Monitoring",
        description: "Detects engagement, distractions, and learning anomalies during live classes.",
        image: {
          src: "/steps/monitor-step.svg",
          alt: "AI monitoring illustration",
        },
      },
      {
        icon: "FileText",
        title: "Reports & Alerts Generated",
        description: "Summarized reports go to teachers and guardians after each session.",
        image: {
          src: "/steps/reports.svg",
          alt: "Reports delivery interface",
        },
      },
      {
        icon: "Check",
        title: "Better Learning Outcomes",
        description: "Use data to improve participation, parental involvement, and teaching quality.",
        image: {
          src: "/steps/results.svg",
          alt: "Learning outcome improvement",
        },
      },
    ],
    architecture: {
      title: "Built on Safe AI Principles",
      description:
        "Monitor AI uses privacy-first, edge-based attention detection and real-time analytics. All data is securely processed with student consent and in compliance with global data protection standards.",
      image: {
        src: "/architecture-monitorai.svg",
        alt: "Monitor AI system architecture",
      },
      technologies: ["TensorFlow.js", "Real-Time Vision API", "Firebase Auth", "LMS Integration APIs"],
    },
  },

  theme: {
    primaryColor: "#4F46E5", // indigo
    secondaryColor: "#10B981", // green
    accentColor: "#F59E0B", // amber (for alerts/engagement)
  },
}


