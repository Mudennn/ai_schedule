"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export default function CreatePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [contentType, setContentType] = useState("post")
  const [platform, setPlatform] = useState("twitter")
  const [topic, setTopic] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [title, setTitle] = useState("")

  const handleGenerate = async () => {
    if (!topic) return

    setIsGenerating(true)
    try {
      // Generate content based on platform and topic
      const prompt = `Create a ${contentType} for ${platform} about "${topic}". 
      Make it engaging and appropriate for the platform.
      ${platform === "twitter" ? "Keep it under 280 characters." : ""}
      ${platform === "instagram" ? "Include relevant hashtags." : ""}
      ${platform === "linkedin" ? "Make it professional and insightful." : ""}`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt,
      })

      setGeneratedContent(text)

      // Generate a title suggestion
      const titlePrompt = `Create a short, catchy title for a ${contentType} about "${topic}"`
      const { text: titleText } = await generateText({
        model: openai("gpt-4o"),
        prompt: titlePrompt,
      })

      setTitle(titleText)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Create Content</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content Generator</CardTitle>
            <CardDescription>Use AI to generate content for your social media platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content-type">Content Type</Label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger id="content-type">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="post">Post</SelectItem>
                  <SelectItem value="thread">Thread</SelectItem>
                  <SelectItem value="caption">Caption</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger id="platform">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">Topic or Keywords</Label>
              <Textarea
                id="topic"
                placeholder="Enter a topic, keywords, or brief description of what you want to post about"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleGenerate} disabled={isGenerating || !topic} className="w-full">
              {isGenerating ? "Generating..." : "Generate Content"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>Edit and refine your AI-generated content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter a title for your content"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Your generated content will appear here"
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save Draft</Button>
            <Button>Schedule Post</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Content Preview</CardTitle>
          <CardDescription>See how your content will look on different platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="twitter">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
            </TabsList>
            <TabsContent value="twitter" className="mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Your Account</div>
                    <div className="text-sm text-gray-500">@youraccount</div>
                    <div className="mt-2">{generatedContent || "Your tweet will appear here"}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="instagram" className="mt-4">
              <div className="rounded-lg border p-4">
                <div className="aspect-square max-h-[300px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                  Image Preview
                </div>
                <div className="font-semibold">Your Account</div>
                <div className="mt-2 text-sm">{generatedContent || "Your caption will appear here"}</div>
              </div>
            </TabsContent>
            <TabsContent value="linkedin" className="mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Your Name</div>
                    <div className="text-sm text-gray-500">Your Title • Your Company</div>
                    <div className="mt-2">{generatedContent || "Your LinkedIn post will appear here"}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="facebook" className="mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="font-semibold">Your Name</div>
                    <div className="text-sm text-gray-500">Just now</div>
                    <div className="mt-2">{generatedContent || "Your Facebook post will appear here"}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

