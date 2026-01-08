"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface InstagramStats {
  followers: number
  avgLikes: number
  avgComments: number
  engagementRate: number
  monthlyReach: number
  monthlyImpressions: number
  lastUpdated: string
}

interface RecentPost {
  id: string
  imageUrl: string
  likes: number
  comments: number
}

const defaultStats: InstagramStats = {
  followers: 856000,
  avgLikes: 42500,
  avgComments: 1850,
  engagementRate: 5.2,
  monthlyReach: 2400000,
  monthlyImpressions: 4800000,
  lastUpdated: new Date().toISOString(),
}

export default function AdminPage() {
  const [stats, setStats] = useState<InstagramStats>(defaultStats)
  const [posts, setPosts] = useState<RecentPost[]>([])
  const [jsonInput, setJsonInput] = useState("")
  const [csvInput, setCsvInput] = useState("")
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const savedStats = localStorage.getItem("instagram-stats")
    const savedPosts = localStorage.getItem("instagram-posts")

    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats))
      } catch {
        // Use defaults
      }
    }

    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts))
      } catch {
        // Use defaults
      }
    }
  }, [])

  const handleManualSave = () => {
    try {
      const updatedStats = {
        ...stats,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem("instagram-stats", JSON.stringify(updatedStats))
      setStats(updatedStats)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch {
      setSaveStatus("error")
      setErrorMessage("Failed to save stats")
    }
  }

  const handleJsonImport = () => {
    try {
      const parsed = JSON.parse(jsonInput)

      // Validate required fields
      const requiredFields = ["followers", "avgLikes", "avgComments", "engagementRate"]
      for (const field of requiredFields) {
        if (typeof parsed[field] !== "number") {
          throw new Error(`Missing or invalid field: ${field}`)
        }
      }

      const updatedStats: InstagramStats = {
        followers: parsed.followers,
        avgLikes: parsed.avgLikes,
        avgComments: parsed.avgComments,
        engagementRate: parsed.engagementRate,
        monthlyReach: parsed.monthlyReach || 0,
        monthlyImpressions: parsed.monthlyImpressions || 0,
        lastUpdated: new Date().toISOString(),
      }

      localStorage.setItem("instagram-stats", JSON.stringify(updatedStats))
      setStats(updatedStats)
      setJsonInput("")
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      setSaveStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Invalid JSON format")
      setTimeout(() => setSaveStatus("idle"), 5000)
    }
  }

  const handleCsvImport = () => {
    try {
      const lines = csvInput.trim().split("\n")
      if (lines.length < 2) {
        throw new Error("CSV must have a header row and at least one data row")
      }

      const headers = lines[0].split(",").map((h) => h.trim().toLowerCase())
      const values = lines[1].split(",").map((v) => v.trim())

      const getValue = (key: string): number => {
        const index = headers.indexOf(key)
        if (index === -1) throw new Error(`Missing column: ${key}`)
        const val = Number.parseFloat(values[index])
        if (isNaN(val)) throw new Error(`Invalid number for ${key}`)
        return val
      }

      const updatedStats: InstagramStats = {
        followers: getValue("followers"),
        avgLikes: getValue("avglikes"),
        avgComments: getValue("avgcomments"),
        engagementRate: getValue("engagementrate"),
        monthlyReach: headers.includes("monthlyreach") ? getValue("monthlyreach") : 0,
        monthlyImpressions: headers.includes("monthlyimpressions") ? getValue("monthlyimpressions") : 0,
        lastUpdated: new Date().toISOString(),
      }

      localStorage.setItem("instagram-stats", JSON.stringify(updatedStats))
      setStats(updatedStats)
      setCsvInput("")
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      setSaveStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Invalid CSV format")
      setTimeout(() => setSaveStatus("idle"), 5000)
    }
  }

  const handlePostsJsonImport = () => {
    try {
      const parsed = JSON.parse(jsonInput)

      if (!Array.isArray(parsed)) {
        throw new Error("Posts data must be an array")
      }

      const validatedPosts: RecentPost[] = parsed.map((post, index) => {
        if (!post.imageUrl || typeof post.likes !== "number" || typeof post.comments !== "number") {
          throw new Error(`Invalid post at index ${index}`)
        }
        return {
          id: post.id || String(index + 1),
          imageUrl: post.imageUrl,
          likes: post.likes,
          comments: post.comments,
        }
      })

      localStorage.setItem("instagram-posts", JSON.stringify(validatedPosts))
      setPosts(validatedPosts)
      setJsonInput("")
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      setSaveStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Invalid posts JSON format")
      setTimeout(() => setSaveStatus("idle"), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-muted py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Site
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">Manage your Instagram statistics</p>
          </div>
        </div>

        {saveStatus === "success" && (
          <Alert className="mb-6 border-green-500 bg-green-50 text-green-800">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
        )}

        {saveStatus === "error" && (
          <Alert className="mb-6 border-destructive bg-destructive/10 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="manual" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="manual">Manual Entry</TabsTrigger>
            <TabsTrigger value="json">JSON Import</TabsTrigger>
            <TabsTrigger value="csv">CSV Import</TabsTrigger>
          </TabsList>

          <TabsContent value="manual">
            <Card>
              <CardHeader>
                <CardTitle>Manual Entry</CardTitle>
                <CardDescription>Enter your Instagram statistics manually using the form below.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="followers">Followers</Label>
                    <Input
                      id="followers"
                      type="number"
                      value={stats.followers}
                      onChange={(e) => setStats({ ...stats, followers: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avgLikes">Average Likes</Label>
                    <Input
                      id="avgLikes"
                      type="number"
                      value={stats.avgLikes}
                      onChange={(e) => setStats({ ...stats, avgLikes: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avgComments">Average Comments</Label>
                    <Input
                      id="avgComments"
                      type="number"
                      value={stats.avgComments}
                      onChange={(e) => setStats({ ...stats, avgComments: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="engagementRate">Engagement Rate (%)</Label>
                    <Input
                      id="engagementRate"
                      type="number"
                      step="0.1"
                      value={stats.engagementRate}
                      onChange={(e) => setStats({ ...stats, engagementRate: Number.parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyReach">Monthly Reach</Label>
                    <Input
                      id="monthlyReach"
                      type="number"
                      value={stats.monthlyReach}
                      onChange={(e) => setStats({ ...stats, monthlyReach: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyImpressions">Monthly Impressions</Label>
                    <Input
                      id="monthlyImpressions"
                      type="number"
                      value={stats.monthlyImpressions}
                      onChange={(e) => setStats({ ...stats, monthlyImpressions: Number.parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <Button onClick={handleManualSave} className="w-full sm:w-auto">
                  <Upload className="w-4 h-4 mr-2" />
                  Save Statistics
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="json">
            <Card>
              <CardHeader>
                <CardTitle>JSON Import</CardTitle>
                <CardDescription>Paste your Instagram statistics or posts data in JSON format.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jsonInput">JSON Data</Label>
                  <Textarea
                    id="jsonInput"
                    placeholder={`Stats example:
{
  "followers": 856000,
  "avgLikes": 42500,
  "avgComments": 1850,
  "engagementRate": 5.2,
  "monthlyReach": 2400000,
  "monthlyImpressions": 4800000
}

Posts example:
[
  {"id": "1", "imageUrl": "https://...", "likes": 45000, "comments": 1200}
]`}
                    className="min-h-[200px] font-mono text-sm"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleJsonImport}>
                    <Upload className="w-4 h-4 mr-2" />
                    Import Stats
                  </Button>
                  <Button variant="outline" onClick={handlePostsJsonImport}>
                    Import Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="csv">
            <Card>
              <CardHeader>
                <CardTitle>CSV Import</CardTitle>
                <CardDescription>Paste your Instagram statistics in CSV format with headers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="csvInput">CSV Data</Label>
                  <Textarea
                    id="csvInput"
                    placeholder={`followers,avgLikes,avgComments,engagementRate,monthlyReach,monthlyImpressions
856000,42500,1850,5.2,2400000,4800000`}
                    className="min-h-[150px] font-mono text-sm"
                    value={csvInput}
                    onChange={(e) => setCsvInput(e.target.value)}
                  />
                </div>
                <Button onClick={handleCsvImport}>
                  <Upload className="w-4 h-4 mr-2" />
                  Import CSV
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Current Stats Preview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Current Statistics</CardTitle>
            <CardDescription>Last updated: {new Date(stats.lastUpdated).toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Followers</p>
                <p className="font-semibold">{stats.followers.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Avg. Likes</p>
                <p className="font-semibold">{stats.avgLikes.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Avg. Comments</p>
                <p className="font-semibold">{stats.avgComments.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Engagement Rate</p>
                <p className="font-semibold">{stats.engagementRate}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Monthly Reach</p>
                <p className="font-semibold">{stats.monthlyReach.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Monthly Impressions</p>
                <p className="font-semibold">{stats.monthlyImpressions.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
