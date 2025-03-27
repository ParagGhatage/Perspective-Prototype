"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Globe, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      router.push("/analyze")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b backdrop-blur-sm bg-background/80 fixed w-full z-10">
        <Link className="flex items-center justify-center" href="/">
          <Globe className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Perspective</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            About
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-accent/20">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4 max-w-3xl mx-auto fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Break Free from <span className="text-primary">Echo Chambers</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                Perspective helps you see beyond your filter bubble by presenting well-researched alternative viewpoints
                alongside your regular content.
              </p>
            </div>

            <Card className="w-full max-w-2xl mt-12 border-2 shadow-lg slide-up">
              <CardContent className="p-6">
                <form onSubmit={handleAnalyze} className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Enter a URL to analyze</h2>
                    <p className="text-sm text-muted-foreground">
                      Paste the link to any news article, blog post, or social media thread
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        type="url"
                        placeholder="https://example.com/article"
                        className="pl-10"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="transition-all duration-300 hover:shadow-md" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Analyzing
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Analyze
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Or try one of our examples:
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Button variant="outline" size="sm" className="text-xs" onClick={() => router.push("/analyze")}>
                        Economic Policy
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs" onClick={() => router.push("/analyze")}>
                        Climate Change
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs" onClick={() => router.push("/analyze")}>
                        Healthcare Reform
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12h10"></path>
                    <path d="M9 4v16"></path>
                    <path d="M12 9h10"></path>
                    <path d="M19 4v16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Perspectives</h3>
                <p className="text-muted-foreground">
                  See different viewpoints on the same topic from credible sources.
                </p>
              </div>

              <div className="flex flex-col items-center text-center slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fact Checking</h3>
                <p className="text-muted-foreground">
                  Verify claims with evidence-based analysis and source credibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Discussion</h3>
                <p className="text-muted-foreground">Engage with our AI to explore topics deeper and ask questions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">© 2025 Perspective</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Terms
            </Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:text-primary transition-colors" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

