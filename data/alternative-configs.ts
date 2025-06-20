import type { WebsiteConfig } from "./website-config"

// Example configuration for a different AI tool - Image Generator
export const imageGeneratorConfig: WebsiteConfig = {
  brand: {
    name: "VisualCraft AI",
    tagline: "AI-Powered Image Generation",
    description: "Create stunning visuals and artwork in seconds with advanced AI image generation technology",
  },

  hero: {
    badge: {
      icon: "Palette",
      text: "Powered by Diffusion Models",
    },
    headline: "VisualCraft AI",
    subheadline: "Create stunning visuals and artwork in seconds with advanced AI image generation",
    description:
      "Transform your creative ideas into beautiful images, illustrations, and artwork. Generate professional-quality visuals for marketing, social media, presentations, and more.",
    primaryCTA: {
      text: "Start Creating Images",
      action: "/generate",
    },
    secondaryCTA: {
      text: "View Gallery",
      action: "#gallery",
    },
    heroImage: {
      src: "/placeholder.svg?height=800&width=1000&text=AI+Image+Generation",
      alt: "AI Image Generation Illustration",
    },
    floatingElements: [
      {
        src: "/placeholder.svg?height=60&width=120&text=Image+Gen",
        alt: "Image Generation Icon",
        position: "top-left",
      },
      {
        src: "/placeholder.svg?height=60&width=120&text=Art+AI",
        alt: "AI Art Assistant",
        position: "bottom-right",
      },
    ],
  },

  problemSolution: {
    title: "From Concept to Creation",
    subtitle: "We solve the visual content challenges that creators face",
    problem: {
      badge: "The Challenge",
      title: "Visual Content Creation Is Expensive & Time-Consuming",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=Design+Struggle",
        alt: "Designer struggling with creative block",
      },
      points: [
        {
          icon: "DollarSign",
          title: "Expensive Design Resources",
          description: "Hiring designers or purchasing stock images costs thousands of dollars monthly.",
        },
        {
          icon: "Clock",
          title: "Slow Creative Process",
          description: "Traditional design workflows take days or weeks to produce quality visuals.",
        },
        {
          icon: "Users",
          title: "Limited Creative Skills",
          description: "Not everyone has the artistic skills to create professional-looking visuals.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      title: "AI-Generated Visuals On Demand",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=AI+Visual+Studio",
        alt: "AI visual generation interface",
      },
      points: [
        {
          icon: "Zap",
          title: "Generate Images Instantly",
          description: "Create professional-quality images in seconds with simple text descriptions.",
        },
        {
          icon: "Palette",
          title: "Unlimited Creative Styles",
          description: "Access hundreds of artistic styles from photorealistic to abstract art.",
        },
        {
          icon: "Infinity",
          title: "Endless Possibilities",
          description: "Generate unlimited variations and iterations until you find the perfect image.",
        },
      ],
    },
  },

  features: {
    title: "Why Choose VisualCraft AI?",
    subtitle: "Advanced features for professional image generation",
    items: [
      {
        icon: "Image",
        title: "High-Resolution Output",
        description: "Generate images up to 4K resolution suitable for print and professional use.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=High+Res",
          alt: "High resolution image generation",
        },
      },
      {
        icon: "Palette",
        title: "Multiple Art Styles",
        description: "Choose from photorealistic, artistic, cartoon, abstract, and hundreds of other styles.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Art+Styles",
          alt: "Multiple art styles showcase",
        },
      },
      {
        icon: "Edit",
        title: "Advanced Editing",
        description: "Fine-tune your images with inpainting, outpainting, and style transfer capabilities.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Image+Editing",
          alt: "Advanced image editing interface",
        },
      },
      {
        icon: "Layers",
        title: "Batch Generation",
        description: "Generate multiple variations simultaneously to explore different creative directions.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Batch+Gen",
          alt: "Batch image generation",
        },
      },
      {
        icon: "Download",
        title: "Commercial License",
        description: "Use generated images for commercial purposes with full licensing rights included.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Commercial+Use",
          alt: "Commercial licensing dashboard",
        },
      },
      {
        icon: "Smartphone",
        title: "API Integration",
        description: "Integrate image generation directly into your apps and workflows via our API.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=API+Integration",
          alt: "API integration interface",
        },
      },
    ],
  },

  videoDemo: {
    title: "Watch VisualCraft AI Create Magic",
    subtitle: "See how easy it is to generate professional images from simple text descriptions",
    video: {
      src: "/placeholder-video.mp4",
      poster: "/placeholder.svg?height=600&width=1000&text=Image+Gen+Demo",
    },
    uiScreenshots: [
      {
        src: "/placeholder.svg?height=300&width=500&text=Generation+Studio",
        alt: "VisualCraft AI Generation Studio",
        caption: "Generation Studio",
      },
      {
        src: "/placeholder.svg?height=300&width=500&text=Style+Gallery",
        alt: "VisualCraft AI Style Gallery",
        caption: "Style Gallery",
      },
    ],
    cta: {
      text: "Start Generating Images",
      description: "Ready to bring your creative visions to life?",
    },
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "Four simple steps to create stunning AI-generated images",
    steps: [
      {
        icon: "Type",
        title: "Describe Your Vision",
        description: "Write a detailed description of the image you want to create using natural language.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Text+Input",
          alt: "Text description input",
        },
      },
      {
        icon: "Settings",
        title: "Choose Style & Settings",
        description: "Select your preferred art style, aspect ratio, and quality settings for optimal results.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Style+Selection",
          alt: "Style and settings selection",
        },
      },
      {
        icon: "Cpu",
        title: "AI Generation",
        description: "Our advanced diffusion models process your request and generate multiple image variations.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=AI+Processing",
          alt: "AI image processing",
        },
      },
      {
        icon: "Download",
        title: "Download & Use",
        description: "Select your favorite results and download high-resolution images ready for any use case.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Download+Images",
          alt: "Image download and export",
        },
      },
    ],
    architecture: {
      title: "Cutting-Edge AI Technology",
      description:
        "VisualCraft AI uses state-of-the-art diffusion models and neural networks trained on millions of images. Our proprietary optimization ensures fast generation times while maintaining exceptional quality and artistic coherence.",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=Diffusion+Architecture",
        alt: "AI Image Generation Architecture",
      },
      technologies: ["Stable Diffusion XL", "Custom Fine-tuning", "GPU Acceleration", "Style Transfer Models"],
    },
  },

  theme: {
    primaryColor: "purple",
    secondaryColor: "pink",
    accentColor: "violet",
  },
}

// Example configuration for a Code Assistant AI
export const codeAssistantConfig: WebsiteConfig = {
  brand: {
    name: "CodeCraft AI",
    tagline: "AI-Powered Code Generation",
    description: "Write better code faster with intelligent AI assistance for developers",
  },

  hero: {
    badge: {
      icon: "Code",
      text: "Powered by Code LLMs",
    },
    headline: "CodeCraft AI",
    subheadline: "Write better code faster with intelligent AI assistance for developers",
    description:
      "Boost your development productivity with AI that understands your codebase, generates functions, fixes bugs, and explains complex code in plain English.",
    primaryCTA: {
      text: "Start Coding",
      action: "/ide",
    },
    secondaryCTA: {
      text: "View Examples",
      action: "#examples",
    },
    heroImage: {
      src: "/placeholder.svg?height=800&width=1000&text=AI+Code+Assistant",
      alt: "AI Code Assistant Illustration",
    },
    floatingElements: [
      {
        src: "/placeholder.svg?height=60&width=120&text=Code+Gen",
        alt: "Code Generation Icon",
        position: "top-left",
      },
      {
        src: "/placeholder.svg?height=60&width=120&text=Debug+AI",
        alt: "AI Debugging Assistant",
        position: "bottom-right",
      },
    ],
  },

  problemSolution: {
    title: "From Bugs to Brilliance",
    subtitle: "Solving the coding challenges that slow down development teams",
    problem: {
      badge: "The Problem",
      title: "Development Bottlenecks Slow You Down",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=Coding+Struggle",
        alt: "Developer struggling with complex code",
      },
      points: [
        {
          icon: "Bug",
          title: "Time-Consuming Debugging",
          description: "Spending hours tracking down bugs and understanding legacy code instead of building features.",
        },
        {
          icon: "BookOpen",
          title: "Constant Documentation Lookup",
          description: "Interrupting flow to search through documentation and Stack Overflow for syntax and examples.",
        },
        {
          icon: "RefreshCw",
          title: "Repetitive Boilerplate",
          description: "Writing the same patterns and boilerplate code over and over across different projects.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      title: "AI-Powered Development Assistant",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=AI+IDE",
        alt: "AI-powered development environment",
      },
      points: [
        {
          icon: "Zap",
          title: "Instant Code Generation",
          description: "Generate functions, classes, and entire modules from natural language descriptions.",
        },
        {
          icon: "Search",
          title: "Smart Code Explanation",
          description: "Get instant explanations of complex code and algorithms in plain English.",
        },
        {
          icon: "Shield",
          title: "Automated Bug Detection",
          description: "Identify and fix potential bugs before they make it to production.",
        },
      ],
    },
  },

  features: {
    title: "Why Choose CodeCraft AI?",
    subtitle: "Advanced AI features designed for modern developers",
    items: [
      {
        icon: "Code2",
        title: "Multi-Language Support",
        description: "Generate and debug code in Python, JavaScript, TypeScript, Go, Rust, and 20+ other languages.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Multi+Language",
          alt: "Multiple programming languages support",
        },
      },
      {
        icon: "GitBranch",
        title: "Context-Aware Suggestions",
        description: "AI understands your entire codebase to provide relevant suggestions and maintain consistency.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Context+Aware",
          alt: "Context-aware code suggestions",
        },
      },
      {
        icon: "TestTube",
        title: "Automated Testing",
        description: "Generate comprehensive unit tests and integration tests for your functions and classes.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Auto+Testing",
          alt: "Automated test generation",
        },
      },
      {
        icon: "FileText",
        title: "Documentation Generation",
        description: "Automatically generate clear, comprehensive documentation for your code and APIs.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Auto+Docs",
          alt: "Automatic documentation generation",
        },
      },
      {
        icon: "Gauge",
        title: "Performance Optimization",
        description: "Get suggestions to optimize your code for better performance and efficiency.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Performance",
          alt: "Code performance optimization",
        },
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Share AI-generated code snippets and explanations with your development team.",
        image: {
          src: "/placeholder.svg?height=300&width=400&text=Team+Collab",
          alt: "Team collaboration features",
        },
      },
    ],
  },

  videoDemo: {
    title: "See CodeCraft AI in Your IDE",
    subtitle: "Watch how AI assistance integrates seamlessly into your development workflow",
    video: {
      src: "/placeholder-video.mp4",
      poster: "/placeholder.svg?height=600&width=1000&text=Code+AI+Demo",
    },
    uiScreenshots: [
      {
        src: "/placeholder.svg?height=300&width=500&text=IDE+Integration",
        alt: "CodeCraft AI IDE Integration",
        caption: "IDE Integration",
      },
      {
        src: "/placeholder.svg?height=300&width=500&text=Code+Assistant",
        alt: "CodeCraft AI Assistant Panel",
        caption: "AI Assistant Panel",
      },
    ],
    cta: {
      text: "Install Extension",
      description: "Ready to supercharge your development workflow?",
    },
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "Seamless AI assistance integrated into your development workflow",
    steps: [
      {
        icon: "Download",
        title: "Install Extension",
        description: "Add CodeCraft AI to your favorite IDE with our VS Code, IntelliJ, or Vim extensions.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Install+Extension",
          alt: "IDE extension installation",
        },
      },
      {
        icon: "MessageSquare",
        title: "Describe Your Need",
        description: "Tell the AI what you want to build using natural language or code comments.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Describe+Code",
          alt: "Natural language code description",
        },
      },
      {
        icon: "Cpu",
        title: "AI Code Generation",
        description: "Watch as AI generates, explains, and optimizes code based on your project context.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=AI+Generation",
          alt: "AI code generation process",
        },
      },
      {
        icon: "CheckCircle",
        title: "Review & Integrate",
        description: "Review AI suggestions, run tests, and integrate the code into your project seamlessly.",
        image: {
          src: "/placeholder.svg?height=200&width=300&text=Code+Review",
          alt: "Code review and integration",
        },
      },
    ],
    architecture: {
      title: "Advanced Code Intelligence",
      description:
        "CodeCraft AI leverages specialized code language models trained on billions of lines of code from open source repositories. Our system understands programming patterns, best practices, and can maintain context across your entire codebase.",
      image: {
        src: "/placeholder.svg?height=400&width=600&text=Code+AI+Architecture",
        alt: "Code AI Architecture Diagram",
      },
      technologies: ["CodeT5+ Models", "AST Analysis", "Static Code Analysis", "Real-time Inference"],
    },
  },

  theme: {
    primaryColor: "green",
    secondaryColor: "emerald",
    accentColor: "teal",
  },
}
