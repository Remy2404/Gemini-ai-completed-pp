import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import './main.css';

import {
  BoltIcon,
  CheckIcon,
  CodeIcon,
  HeadphonesIcon,
  LightbulbIcon,
  SettingsIcon,
  ShieldIcon,
  XIcon,
} from "lucide-react";
export default function Component() {
  return (
    <div>
      <main className="flex-1">
        <section id="features" className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4 items-start">
                <BoltIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-2xl font-bold">Blazing Fast</h3>
                <p className="text-muted-foreground">
                  Gemini AI responds instantly, so you can get the information you need in real-time.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <SettingsIcon className="w-10 h-10 text-sky-500 " />
                <h3 className="text-2xl font-bold">Highly Customizable</h3>
                <p className="text-muted-foreground">
                  Tailor Gemini AI to your specific needs with a wide range of configuration options.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <LightbulbIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-2xl font-bold">Innovative Features</h3>
                <p className="text-muted-foreground">
                  Gemini AI is constantly evolving, with new features and capabilities added regularly.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <CodeIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-2xl font-bold">Developer Friendly</h3>
                <p className="text-muted-foreground">
                  Integrate Gemini AI seamlessly into your applications with our powerful API.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <ShieldIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-2xl font-bold">Secure and Private</h3>
                <p className="text-muted-foreground">
                  Your data is safe with Gemini AI, with industry-leading security and privacy measures.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <HeadphonesIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-2xl font-bold">Exceptional Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated support team is here to help you get the most out of Gemini AI.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Procing */}
        <section className="bg-[#0f0d14] py-12 md:py-24">
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
              <p className="mt-4 text-white">
                Gemini AI offers flexible pricing plans to suit your needs. Choose the plan that works best for you and
                unlock the full potential of our AI assistant.
              </p>
              <div className="mt-8 grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription className="font-mono font-semibold">Get started with Gemini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-black">
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
                        <span className="underline">No advanced features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-sky-500">Sign Up</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-bold">Pro</CardTitle>
                    <CardDescription className="font-mono font-semibold" >Unlock the full potential of Gemini AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="text-black">/month</span>
                    </div>
                    <ul className="mt-6 space-y-4 text-black">
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
                    <Button className="w-full bg-sky-500">Subscribe</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center">
            <div class="card">
 <img src="/bot_love.png" alt="ailogo" />
  <div className="card__content">
    <p className="card__title font-semibold">ABOUT Gemini AI</p>
    <p className="card__description font-serif ">
Gemini AI is a cutting-edge conversational AI assistant developed by a team of experts in natural language processing and machine learning. Our mission is to empower individuals and businesses with the tools they need to thrive in the digital age.
We believe that AI should be accessible, transparent, and beneficial to all. That's why we've built Gemini AI with a focus on user-friendliness, ethical principles, and continuous improvement.</p>
  </div>
</div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-muted bg-[#0E0C16]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Gemini AI Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of AI experts and engineers are dedicated to pushing the boundaries of what's
                  possible with conversational AI.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/Ramy.jpg" alt="Team Member 1" />
                  <AvatarFallback>TM1</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-center rounded-md hover:border-white">
                  <h3 className="text-xl font-bold">Phon Ramy</h3>
                  <p className="text-muted-foreground">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20 rounded border-10px hue-rotate-15 hover:border-gray-200 border-x-white">
                  <AvatarImage src="/Heng.png" alt="Team Member 2" />
                  <AvatarFallback>TM2</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold">Milichay Heng</h3>
                  <p className="text-muted-foreground">Co-Founder & CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/Smey.png" alt="Team Member 3" />
                  <AvatarFallback>TM3</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-center">
                  <h3 className="text-xl font-bold">Phan ReakSmey</h3>
                  <p className="text-muted-foreground">Lead AI Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Have a question or want to learn more? Reach out to our team, and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form action="#" className="grid gap-4 rounded border-collapse">
                <div className="grid gap-1.5 text-black">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-1.5 text-black">
                  <label htmlFor="email">Email</label>
                  <Input id="email" placeholder="Your email" />
                </div>
                <div className="grid gap-1.5 text-black">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button className="bg-blue-500 hover:bg-sky-400">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 border-y-gray-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm leading-loose text-muted-foreground">
              Built with ❤ by <a href="" className="font-semibold">Ramy</a>
            </p>
            <div className=" justify-center flex gap-4">
              <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
