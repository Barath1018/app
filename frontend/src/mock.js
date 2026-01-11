// Mock data for portfolio

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Barath S",
    title: "Creative Web Developer & Video Editor",
    tagline: "Building scalable web applications with modern technologies",
    bio: "I'm a passionate full-stack developer with 5+ years of experience creating robust web applications. I specialize in React, Node.js, and cloud technologies, with a focus on clean code and user experience.",
    email: "barath.senthil1602@gmail.com",
    location: "Manampathy, Tamil Nadu, India",
    resumeUrl: "/Barath's_Resume.pdf"
  },

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/Barath1018", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/barath-senthil-933b03294/", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" }
  ],

  // Skills
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"]
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Docker", "AWS", "MongoDB", "CI/CD"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Business Intelligence Dashboard",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and order tracking.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      liveUrl: "https://insightedge-bid.vercel.app/",
      githubUrl: "https://github.com/Barath1018/InsightEdge"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team chat, and project analytics dashboard.",
      tags: ["React", "FastAPI", "WebSocket", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered content generation platform using GPT models for creating blog posts, social media content, and marketing copy.",
      tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking user behavior, conversion metrics, and business KPIs with interactive charts.",
      tags: ["React", "D3.js", "Python", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]
};
