"use client"

import { useState } from "react"
import { ArrowRight, ThumbsDown, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DemoSection() {
  const [showPerspective, setShowPerspective] = useState(false)

  const togglePerspective = () => {
    setShowPerspective(!showPerspective)
  }

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b">
            <CardTitle className="text-xl">Sample News Article</CardTitle>
            <CardDescription>As you would see it on a news website</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <article className="prose dark:prose-invert max-w-none">
              <h2>Economic Impact of New Tax Policy</h2>
              <p className="text-sm text-gray-500">Published: March 28, 2025</p>
              <p>
                The government's new tax policy is expected to boost economic growth by providing tax breaks to
                businesses. Economists predict that these measures will lead to increased investment and job creation
                across multiple sectors.
              </p>
              <p>
                "This policy represents a significant step forward for our economy," said Finance Minister Jane Smith.
                "By reducing the tax burden on businesses, we're enabling them to invest more in innovation and
                expansion."
              </p>
              <p>
                Industry leaders have welcomed the move, with many planning to announce new investment initiatives in
                the coming weeks. The stock market responded positively, with major indices rising following the
                announcement.
              </p>
              <p>
                The policy is set to take effect next quarter, with the government projecting a 2% increase in GDP
                growth as a direct result.
              </p>
            </article>
            <div className="mt-6 flex justify-center">
              <Button onClick={togglePerspective} className="flex items-center gap-2">
                {showPerspective ? "Hide Perspective" : "Show Perspective"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {showPerspective && (
          <Card className="border-primary">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-xl flex items-center gap-2">
                <span>Perspective</span>
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Alternative viewpoints on this article
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="counter" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="counter">Counter View</TabsTrigger>
                  <TabsTrigger value="facts">Facts Check</TabsTrigger>
                  <TabsTrigger value="sources">Sources</TabsTrigger>
                </TabsList>
                <TabsContent value="counter" className="p-4">
                  <div className="prose dark:prose-invert max-w-none text-sm">
                    <h4>Alternative Perspective</h4>
                    <p>
                      While the article presents the tax policy as universally beneficial, some economists argue that
                      tax breaks for businesses don't always translate to broader economic growth.
                    </p>
                    <p>
                      Critics point out that similar policies in the past have led to increased corporate profits
                      without proportional increases in wages or job creation. The benefits may primarily accrue to
                      shareholders rather than workers or the broader economy.
                    </p>
                    <p>
                      Additionally, the projected 2% GDP growth is considered optimistic by some economic analysts, who
                      suggest that external factors like global trade conditions will have a greater impact than
                      domestic tax policy.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ThumbsDown className="h-4 w-4" />
                      Not Helpful
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="facts" className="p-4">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium">Claim: Tax breaks always lead to job creation</h4>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">Partially Accurate</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Historical data shows mixed results. Some tax breaks have led to job creation, while others
                        primarily increased shareholder value or were used for stock buybacks.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Claim: 2% GDP growth projection</h4>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">Contested</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Independent economic forecasts range from 0.8% to 2.3%, suggesting the government's projection
                        may be optimistic.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Claim: Stock market responded positively</h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">Accurate</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Market indices did rise following the announcement, though this may reflect investor sentiment
                        rather than economic fundamentals.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="sources" className="p-4">
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">Economic Policy Institute</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Research on the relationship between corporate tax cuts and job creation
                      </p>
                      <a href="#" className="text-primary text-xs hover:underline">
                        View Source
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium">National Bureau of Economic Research</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Historical analysis of tax policy impacts on GDP growth
                      </p>
                      <a href="#" className="text-primary text-xs hover:underline">
                        View Source
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium">Center for Budget and Policy Priorities</h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Analysis of distributional effects of business tax cuts
                      </p>
                      <a href="#" className="text-primary text-xs hover:underline">
                        View Source
                      </a>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-gray-500">
                        Sources are rated for credibility and political leaning to ensure balanced perspectives.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">How Perspective Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">1</span>
            </div>
            <h4 className="font-medium mb-2">Content Analysis</h4>
            <p className="text-sm text-gray-500">
              Perspective analyzes the article you're reading to identify key claims and narratives.
            </p>
          </div>
          <div className="p-4">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">2</span>
            </div>
            <h4 className="font-medium mb-2">Source Aggregation</h4>
            <p className="text-sm text-gray-500">
              It searches for alternative viewpoints from credible sources across the political spectrum.
            </p>
          </div>
          <div className="p-4">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-primary">3</span>
            </div>
            <h4 className="font-medium mb-2">Balanced Presentation</h4>
            <p className="text-sm text-gray-500">
              You receive a balanced view with fact-checking and source credibility information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

