/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GTCzz7BiWil
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  const [typingStatus, setTypingStatus] = useState("human1")
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-4 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2" href="#" prefetch={false}>
            <XIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Gimini AI</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              to="/chat"
              className="rounded-md px-4 py-2 transition-colors hover:bg-primary/80"
              href="#"
              prefetch={false}
            >
              Chat
            </Link>
            <Link
              to="/about"
              className="rounded-md px-4 py-2 transition-colors hover:bg-primary/80"
              href="#"
              prefetch={false}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="rounded-md px-4 py-2 transition-colors hover:bg-primary/80"
              href="#"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              to="/docs"
              className="rounded-md px-4 py-2 transition-colors hover:bg-primary/80"
              href="#"
              prefetch={false}
            >
              Docs
            </Link>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex">
            Try Gimini
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col gap-4 p-4">
                <Link
                  to="/chat"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-muted"
                  href="#"
                  prefetch={false}
                >
                  Chat
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-muted"
                  href="#"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-muted"
                  href="#"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  to="/docs"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-muted"
                  href="#"
                  prefetch={false}
                >
                  Docs
                </Link>
                <Button variant="secondary" className="w-full">
                  Try Gimini
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="container flex flex-col items-center justify-center gap-6 py-12 px-4 md:py-24 md:px-6">
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Unleash the Power of Conversational AI
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Gimini AI is a cutting-edge conversational assistant that helps you tackle any task with ease.
                Experience the future of AI-powered productivity.
              </p>
            </div>
            <Link to="/dashboard" className="a" href="#" prefetch={false}>
              <Button variant="secondary" className="mt-4">
                <div />
              </Button>
            </Link>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
              <p className="mt-4 text-muted-foreground">
                Gimini AI offers a range of powerful features to help you achieve your goals.
              </p>
              <ul className="mt-8 grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <PencilIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Intelligent Content Generation</h3>
                    <p className="text-muted-foreground">
                      Gimini AI can help you generate high-quality content for a variety of use cases, from blog posts
                      to marketing copy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CodeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Code Assistance</h3>
                    <p className="text-muted-foreground">
                      Get help with programming tasks, from debugging to algorithm design, with Gimini AI's coding
                      expertise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <LightbulbIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ideation and Problem-Solving</h3>
                    <p className="text-muted-foreground">
                      Unlock your creativity and find innovative solutions to complex problems with Gimini AI's ideation
                      capabilities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width={500}
                height={500}
                alt="Gimini AI"
                className="max-w-full rounded-xl"
                style={{ aspectRatio: "500/500", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width={500}
                height={500}
                alt="Gimini AI"
                className="max-w-full rounded-xl"
                style={{ aspectRatio: "500/500", objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Gimini AI</h2>
              <p className="mt-4 text-muted-foreground">
                Gimini AI is a cutting-edge conversational AI assistant developed by a team of experts in natural
                language processing and machine learning. Our mission is to empower individuals and businesses with the
                tools they need to thrive in the digital age.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe that AI should be accessible, transparent, and beneficial to all. That's why we've built
                Gimini AI with a focus on user-friendliness, ethical principles, and continuous improvement.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/80"
                href="#"
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
              <p className="mt-4 text-muted-foreground">
                Gimini AI offers flexible pricing plans to suit your needs. Choose the plan that works best for you and
                unlock the full potential of our AI assistant.
              </p>
              <div className="mt-8 grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription>Get started with Gimini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>100 chat prompts per month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Basic AI capabilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XIcon className="h-5 w-5 text-red-500" />
                        <span>No advanced features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Sign Up</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Unlock the full potential of Gimini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Unlimited chat prompts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Advanced AI capabilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width={500}
                height={500}
                alt="Gimini AI Pricing"
                className="max-w-full rounded-xl"
                style={{ aspectRatio: "500/500", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Documentation</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our comprehensive documentation to learn how to effectively use Gimini AI and unlock its full
                potential.
              </p>
              <div className="mt-8 grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Learn how to set up and start using Gimini AI.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Create your Gimini AI account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Explore the chat interface</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Customize your AI preferences</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/docs/getting-started"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/80"
                      href="#"
                      prefetch={false}
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Usage</CardTitle>
                    <CardDescription>Discover the full capabilities of Gimini AI.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Leverage AI-powered content generation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Integrate Gimini AI with your workflows</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}