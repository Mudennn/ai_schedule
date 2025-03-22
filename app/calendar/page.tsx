"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("March")
  const [currentYear, setCurrentYear] = useState("2025")

  // Mock data for scheduled posts
  const scheduledPosts = [
    { id: 1, date: "2025-03-15", platform: "twitter", title: "Product Launch" },
    { id: 2, date: "2025-03-18", platform: "instagram", title: "Behind the Scenes" },
    { id: 3, date: "2025-03-22", platform: "linkedin", title: "Industry Insights" },
    { id: 4, date: "2025-03-25", platform: "facebook", title: "Customer Spotlight" },
    { id: 5, date: "2025-03-28", platform: "twitter", title: "Weekly Tips" },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    // This is a simplified calendar generation for demo purposes
    const days = []
    const daysInMonth = 31 // Simplified for March

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2025-03-${i.toString().padStart(2, "0")}`
      const postsForDay = scheduledPosts.filter((post) => post.date === date)

      days.push({
        day: i,
        date,
        posts: postsForDay,
      })
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  // Platform badge colors
  const getPlatformColor = (platform) => {
    switch (platform) {
      case "twitter":
        return "bg-blue-100 text-blue-800"
      case "instagram":
        return "bg-pink-100 text-pink-800"
      case "linkedin":
        return "bg-sky-100 text-sky-800"
      case "facebook":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Content Calendar</h2>
        <div className="flex items-center gap-2">
          <Select value={currentMonth} onValueChange={setCurrentMonth}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="January">January</SelectItem>
              <SelectItem value="February">February</SelectItem>
              <SelectItem value="March">March</SelectItem>
              <SelectItem value="April">April</SelectItem>
              <SelectItem value="May">May</SelectItem>
              <SelectItem value="June">June</SelectItem>
              <SelectItem value="July">July</SelectItem>
              <SelectItem value="August">August</SelectItem>
              <SelectItem value="September">September</SelectItem>
              <SelectItem value="October">October</SelectItem>
              <SelectItem value="November">November</SelectItem>
              <SelectItem value="December">December</SelectItem>
            </SelectContent>
          </Select>
          <Select value={currentYear} onValueChange={setCurrentYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
            </SelectContent>
          </Select>
          <Button>Today</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>March 2025</CardTitle>
          <CardDescription>View and manage your scheduled content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 text-center font-medium mb-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before March 1st (assuming March 1 is a Saturday) */}
            {[...Array(5)].map((_, index) => (
              <div key={`empty-${index}`} className="h-32 border rounded-lg bg-gray-50"></div>
            ))}

            {calendarDays.map((day) => (
              <div key={day.day} className="h-32 border rounded-lg p-2 hover:bg-gray-50 transition-colors">
                <div className="font-medium">{day.day}</div>
                <div className="mt-1 space-y-1">
                  {day.posts.map((post) => (
                    <div key={post.id} className="text-xs p-1 rounded cursor-pointer hover:bg-gray-100">
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className={`${getPlatformColor(post.platform)} text-[10px] px-1 py-0`}>
                          {post.platform}
                        </Badge>
                        <span className="truncate">{post.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upcoming Posts</CardTitle>
          <CardDescription>Your scheduled content for the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {post.platform === "twitter" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    )}
                    {post.platform === "instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                    {post.platform === "linkedin" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                    {post.platform === "facebook" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{post.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Scheduled for {post.date} • {post.platform}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

