import { type WebsiteConfig, websiteConfig } from "./website-config"
import { imageGeneratorConfig, codeAssistantConfig } from "./alternative-configs"

// Configuration switcher - change this to switch between different AI tools
export const getCurrentConfig = (): WebsiteConfig => {
  // Change this line to switch between different configurations
  // Options: websiteConfig, imageGeneratorConfig, codeAssistantConfig
  return websiteConfig
}

// You can also make this dynamic based on environment variables or URL parameters
export const getConfigByType = (type: string): WebsiteConfig => {
  switch (type) {
    case "content":
      return websiteConfig
    case "image":
      return imageGeneratorConfig
    case "code":
      return codeAssistantConfig
    default:
      return websiteConfig
  }
}
