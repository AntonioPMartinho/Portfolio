"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Cloud } from "lucide-react"
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
              <p className="text-lg text-muted-foreground mb-4">Backend Developer • 1+ years experience</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  <Server className="w-3 h-3 mr-1" />
                  Java Spring
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Code className="w-3 h-3 mr-1" />
                  Node.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Database className="w-3 h-3 mr-1" />
                  Docker
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Cloud className="w-3 h-3 mr-1" />
                  Terraform
                </Badge>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={copyEmailToClipboard}>
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-2 text-primary" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Todo List App */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  Todo List App
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">Full-stack task management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Node.js & Express API</li>
                  <li>• MongoDB integration</li>
                  <li>• JWT authentication</li>
                  <li>• React frontend</li>
                  <li>• Docker containerization</li>
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

            {/* URL Shortener */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  URL Shortener
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">Link shortening service</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Java Spring Boot</li>
                  <li>• Redis caching</li>
                  <li>• PostgreSQL database</li>
                  <li>• Analytics tracking</li>
                  <li>• GitHub Actions CI/CD</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  asChild
                >
                  <a href="https://github.com/AntonioPMartinho/url-shortner" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
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
                  <li>• Microservices project</li>
                  <li>• Real-time chat app</li>
                  <li>• API gateway</li>
                  <li>• Kubernetes automation</li>
                  <li>• ML integration</li>
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
            Experience
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Senior Backend Developer</CardTitle>
                    <CardDescription className="text-base">CloudTech Solutions</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    July 2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Leading backend development for cloud-native applications using Java Spring Boot and Node.js.
                  Architected and deployed microservices on AWS using Docker and Kubernetes. Implemented infrastructure
                  as code with Terraform, reducing deployment time by 60%. Mentored junior developers and established
                  best practices for API design and database optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Backend Developer</CardTitle>
                    <CardDescription className="text-base">Tech Solutions Inc.</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    May 2022 - June 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Developed and maintained scalable backend services using Java Spring Boot and Node.js. Implemented
                  microservices architecture, optimized database queries, and established CI/CD pipelines using Jenkins
                  and GitHub Actions. Collaborated with cross-functional teams to deliver high-quality software
                  solutions, reducing system response times by 40% and improving overall application performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-muted">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Junior Backend Developer</CardTitle>
                    <CardDescription className="text-base">StartupHub Technologies</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    January 2022 - April 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Built RESTful APIs using Node.js and Express.js for e-commerce platform. Integrated third-party
                  payment systems and implemented user authentication with JWT. Worked with PostgreSQL databases and
                  Redis for caching. Participated in agile development processes and code reviews, gaining valuable
                  experience in production-level software development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Backend Development Intern</CardTitle>
                    <CardDescription className="text-base">InnovateLab</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    September 2021 - December 2021
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Contributed to internal tools development using Java Spring Framework. Assisted in database design and
                  optimization, wrote unit tests, and participated in daily standups. Learned industry best practices
                  for version control with Git, automated testing, and deployment strategies. Successfully delivered 3
                  feature implementations that improved team productivity by 25%.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Database className="w-6 h-6 mr-2 text-primary" />
            Education
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Bachelor's in Computer Science</CardTitle>
                    <CardDescription className="text-base">University of Porto</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    2018 - 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Graduated with honors, focusing on software engineering and distributed systems. Completed capstone
                  project on microservices architecture using Java Spring Boot and Docker containerization.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Data Structures & Algorithms
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Database Systems
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Software Engineering
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Distributed Systems
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Web Development
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Computer Networks
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">AWS Certified Developer - Associate</CardTitle>
                    <CardDescription className="text-base">Amazon Web Services</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Certified in developing and maintaining applications on AWS platform. Demonstrated expertise in
                  serverless computing, containerization, and cloud-native application development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-muted">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Docker Certified Associate</CardTitle>
                    <CardDescription className="text-base">Docker Inc.</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start px-3 py-1 text-sm">
                    2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Validated skills in containerization, orchestration, and Docker ecosystem. Expertise in building,
                  deploying, and managing containerized applications in production environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 border-t border-border/50 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 António Martinho • Built with Next.js{" "}
            {/* 🚀 If you're reading this in dev tools, you're my kind of person! */}
          </p>
        </div>
      </footer>
    </div>
  )
}
