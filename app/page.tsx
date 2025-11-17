"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Cloud } from 'lucide-react'
import { useEffect, useState } from "react"

export default function Portfolio() {
  const { toast } = useToast()
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // Console easter eggs for developers
    console.log("%c🚀 Hey there, fellow developer!", "color: #8b5cf6; font-size: 20px; font-weight: bold;")
    console.log("%c👋 I see you're checking out my code. I like your style!", "color: #06b6d4; font-size: 14px;")
    console.log("%c💡 Try typing 'hire()' in the console", "color: #10b981; font-size: 12px;")
    console.log("%c🎮 Or try the Konami Code: ↑↑↓↓←→←→BA", "color: #f59e0b; font-size: 12px;")

    // Add hire function to window
    ;(window as any).hire = () => {
      console.log(
        "%c🎉 EXCELLENT CHOICE! Let's build something amazing together!",
        "color: #ef4444; font-size: 16px; font-weight: bold;",
      )
      console.log("%c📧 contact@antoniopmartinho.pt", "color: #8b5cf6; font-size: 14px;")
      toast({
        title: "🎉 Smart move!",
        description: "You found the secret hire() function! Let's talk.",
      })
    }

    // Konami code listener
    const handleKeyDown = (e: KeyboardEvent) => {
      const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "KeyB",
        "KeyA",
      ]

      setKonamiSequence((prev) => {
        const newSequence = [...prev, e.code].slice(-10)

        if (newSequence.join(",") === konamiCode.join(",")) {
          toast({
            title: "🎮 Konami Code Activated!",
            description: "You're definitely developer material! 30 extra lives granted.",
          })
          console.log(
            "%c🎮 KONAMI CODE ACTIVATED! You're hired! 🎉",
            "color: #ef4444; font-size: 18px; font-weight: bold; background: #000; padding: 10px;",
          )
          return []
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      delete (window as any).hire
    }
  }, [toast])

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("contact@antoniopmartinho.pt")
      toast({
        title: "Email copied!",
        description: "contact@antoniopmartinho.pt has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually.",
        variant: "destructive",
      })
    }
  }

  const handleNameClick = () => {
    setClickCount((prev) => prev + 1)

    if (clickCount === 4) {
      toast({
        title: "🐛 Bug found!",
        description: "Just kidding! This is a feature, not a bug 😄",
      })
      console.log("%c🐛 // TODO: Fix this 'bug' (it's actually a feature)", "color: #f59e0b; font-style: italic;")
      setClickCount(0)
    } else if (clickCount === 2) {
      toast({
        title: "🤔 Persistent, I like that!",
        description: "Keep clicking... something might happen",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "António Martinho",
            alternateName: "Antonio Martinho",
            jobTitle: "Backend Developer",
            description:
              "Experienced Backend Developer specializing in Java Spring Boot, REST APIs, microservices, Docker, and CI/CD",
            url: "https://antoniopmartinho.pt",
            sameAs: ["https://github.com/AntonioPMartinho", "https://linkedin.com/in/antonio-martinho"],
            email: "contact@antoniopmartinho.pt",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Porto",
              addressCountry: "Portugal",
            },
            knowsAbout: [
              "Java",
              "Spring Boot",
              "REST APIs",
              "Microservices",
              "Docker",
              "PostgreSQL",
              "CI/CD",
              "Jenkins",
              "Node.js",
              "TypeScript",
              "Backend Development",
            ],
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "42 Porto",
                description: "Software Engineering Program",
              },
            ],
            worksFor: [
              {
                "@type": "Organization",
                name: "Education and Mobility",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bilbao",
                  addressCountry: "Spain",
                },
              },
            ],
          }),
        }}
      />

      <header className="py-12 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform select-none"
                onClick={handleNameClick}
                title="🤔 What happens if you click me?"
              >
                António Martinho
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Backend Developer • Strong experience in Java, Spring Boot, REST APIs, microservices, CI/CD, and Docker
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  <Server className="w-3 h-3 mr-1" />
                  Java Spring Boot
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Code className="w-3 h-3 mr-1" />
                  REST APIs
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Database className="w-3 h-3 mr-1" />
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Cloud className="w-3 h-3 mr-1" />
                  Docker
                </Badge>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={copyEmailToClipboard}>
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/AntonioPMartinho" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/antonio-martinho" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-2 text-primary" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* URL Shortener Platform */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  URL Shortener Platform
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">Production-ready microservices with security & analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Spring Boot 3.2 with Spring Security</li>
                  <li>• Angular 19 frontend with Material Design</li>
                  <li>• JWT authentication & authorization</li>
                  <li>• Real-time analytics dashboard</li>
                  <li>• PostgreSQL with Docker Compose</li>
                  <li>• Scalable architecture with compression & caching</li>
                </ul>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href="https://urlshortener.antoniopmartinho.pt" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/AntonioPMartinho/urlShortnerBackend" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* To-Do List Application */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  To-Do List Application
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">REST API with JWT authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Java Spring Boot API</li>
                  <li>• JWT authentication</li>
                  <li>• Role-based access control</li>
                  <li>• PostgreSQL database</li>
                  <li>• JUnit/Mockito testing</li>
                  <li>• Docker Compose deployment</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  asChild
                >
                  <a href="https://github.com/AntonioPMartinho/todo-list" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Backend */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  E-commerce Backend
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">Distributed microservices architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Java Spring Boot microservices</li>
                  <li>• Independent User, Product, Order services</li>
                  <li>• REST API-based inter-service communication</li>
                  <li>• MySQL with optimized schema design</li>
                  <li>• Comprehensive integration testing</li>
                  <li>• Service isolation & scalability</li>
                </ul>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  <Code className="w-4 h-4 mr-2" />
                  Study Project
                </Button>
              </CardContent>
            </Card>

            {/* BrianAI Assistant */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  BrianAI Assistant
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">AI-powered personal assistant with integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Python backend with PyTorch ML framework</li>
                  <li>• Weather forecasting API integration</li>
                  <li>• Smart calendar & event management</li>
                  <li>• Natural language processing capabilities</li>
                  <li>• Third-party API integrations</li>
                  <li>• Machine learning model optimization</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent" asChild>
                  <a href="https://github.com/AntonioPMartinho/brianai" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Website */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  Portfolio Website
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">Personal portfolio with contact form</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Next.js & TypeScript</li>
                  <li>• Fully responsive design</li>
                  <li>• Optimized performance</li>
                  <li>• Integrated backend</li>
                  <li>• Contact form handling</li>
                  <li>• Modern CSS styling</li>
                </ul>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  <Code className="w-4 h-4 mr-2" />
                  This Site!
                </Button>
              </CardContent>
            </Card>

            {/* More to Come */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 border-dashed">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between text-muted-foreground">
                  More Projects
                  <Code className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="text-sm">In development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Advanced microservices</li>
                  <li>• Real-time applications</li>
                  <li>• Cloud-native solutions</li>
                  <li>• Kubernetes automation</li>
                  <li>• AI/ML integrations</li>
                </ul>
                <Button variant="ghost" size="sm" className="w-full" disabled>
                  <Code className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Server className="w-6 h-6 mr-2 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {/* Software Developer (International Internship) */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Software Developer (International Internship)</CardTitle>
                    <CardDescription className="text-base">Education and Mobility • Bilbao, Spain</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    May 2022 - Aug 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sole developer managing the complete software development lifecycle across multiple technologies. 
                  Developed robust REST APIs with Java Spring Boot, built responsive user interfaces with MERN stack, 
                  and maintained WordPress-based solutions. Configured production servers, implemented CI/CD pipelines, 
                  and managed database optimization. Collaborated directly with stakeholders to deliver scalable, 
                  business-focused solutions on tight deadlines.
                </p>
              </CardContent>
            </Card>

            {/* Freelance Software Developer */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Freelance Software Developer</CardTitle>
                    <CardDescription className="text-base">GoReady Data • Remote</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    May 2023 - Dec 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Delivered custom web solutions using PHP, WordPress, and backend technologies. Focused on API
                  integrations, databases, and deployment workflows. Worked independently in remote collaboration with
                  clients, managing project requirements and delivering solutions on time.
                </p>
              </CardContent>
            </Card>

            {/* Software Development Intern */}
            <Card className="border-l-4 border-l-muted">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Software Development Intern</CardTitle>
                    <CardDescription className="text-base">CPCECHO • Porto, Portugal</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    Feb 2021 - Jul 2021
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Contributed to the development and maintenance of internal systems. Supported backend tasks including
                  new features, code optimization, and integrations. Worked with relational databases and assisted in
                  testing/debugging. First opportunity to apply academic knowledge in a professional environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Database className="w-6 h-6 mr-2 text-primary" />
            Education & Certifications
          </h2>
          <div className="space-y-6">
            {/* 42 Porto – Software Engineering Program */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">42 Porto – Software Engineering Program</CardTitle>
                    <CardDescription className="text-base">42 School</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    Oct 2024 - Jul 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Intensive peer-to-peer training in algorithms, C programming, debugging, and clean code practices.
                  Collaborative programming projects with focus on problem-solving, adaptability, and software
                  engineering foundations.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Algorithms
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      C Programming
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Debugging
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Clean Code
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Problem Solving
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Peer Learning
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Course in Management and Programming of Information Systems */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">
                      Professional Course in Management and Programming of Information Systems
                    </CardTitle>
                    <CardDescription className="text-base">Professional School • GPA: 16/20</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    Sep 2019 - Jul 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Comprehensive program covering software development, database management, and information systems.
                  Graduated with excellent academic performance (16/20 GPA), demonstrating strong technical foundation
                  and practical programming skills.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Programming Fundamentals
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Database Design
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Information Systems
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Software Engineering
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Web Development
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Project Management
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 border-t border-border/50 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 António Martinho • Built with Next.js{" "}
            {/* 🚀 If you're reading this in dev tools, you're my kind of person! */}
          </p>
        </div>
      </footer>
    </div>
  )
}
