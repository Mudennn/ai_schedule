import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Analytics</h2>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45.2K</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M15 15V9" />
                  <path d="M9 15v-3" />
                  <path d="M15 9h-6" />
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <path d="M22 7H2" />
                  <path d="M22 11H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,203</div>
                <p className="text-xs text-muted-foreground">+14.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Followers Growth</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+245</div>
                <p className="text-xs text-muted-foreground">+18.7% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your social media performance across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Performance Chart
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Platform Breakdown</CardTitle>
                <CardDescription>Performance by social media platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Twitter", impressions: "18.5K", engagement: "2.8%" },
                    { name: "Instagram", impressions: "15.2K", engagement: "4.1%" },
                    { name: "LinkedIn", impressions: "11.5K", engagement: "2.7%" },
                  ].map((platform) => (
                    <div key={platform.name} className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {platform.name === "Twitter" && (
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
                        {platform.name === "Instagram" && (
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
                        {platform.name === "LinkedIn" && (
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
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{platform.name}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm text-muted-foreground">Impressions: {platform.impressions}</span>
                          <span className="text-sm text-muted-foreground">Engagement: {platform.engagement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
              <CardDescription>Detailed breakdown of your engagement across platforms</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Engagement Chart
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Likes</CardTitle>
                <CardDescription>Total likes across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Likes Chart
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
                <CardDescription>Total comments across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Comments Chart
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shares</CardTitle>
                <CardDescription>Total shares across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Shares Chart
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Insights about your audience across platforms</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Demographics Chart
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Age breakdown of your audience</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Age Chart
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your audience is located</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  Geography Chart
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your best performing content across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="text-2xl font-bold text-muted-foreground w-8 text-center">{i}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">Top Performing Post {i}</h4>
                      <p className="text-sm text-muted-foreground">
                        Posted on {["Twitter", "Instagram", "LinkedIn", "Twitter", "Instagram"][i - 1]} • {i * 2 + 3}{" "}
                        days ago
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{(6 - i) * 1000 + 500} impressions</div>
                      <div className="text-sm text-muted-foreground">{(6 - i) * 0.5 + 1.5}% engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Type Performance</CardTitle>
              <CardDescription>How different types of content perform</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Content Type Chart
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

