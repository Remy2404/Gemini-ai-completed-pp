import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import "./main.css";
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
    <div className="flex min-h-[100vh] flex-col w-full">
      <div className="flex-grow">
        <section
          id="features"
          className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4 items-start">
                <BoltIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Blazing Fast</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Gemini AI responds instantly, so you can get the information
                  you need in real-time.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <SettingsIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Highly Customizable
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Tailor Gemini AI to your specific needs with a wide range of
                  configuration options.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <LightbulbIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Innovative Features
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Gemini AI is constantly evolving, with new features and
                  capabilities added regularly.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <CodeIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Developer Friendly
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Integrate Gemini AI seamlessly into your applications with our
                  powerful API.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <ShieldIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Secure and Private
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your data is safe with Gemini AI, with industry-leading
                  security and privacy measures.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <HeadphonesIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Exceptional Support
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our dedicated support team is here to help you get the most
                  out of Gemini AI.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 w-full">
          <img src="/orbital.png" alt="bg" className="bg-img" />
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
                  Pricing
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-500">
                  Gemini AI offers flexible pricing plans to suit your needs.
                  Choose the plan that works best for you and unlock the full
                  potential of our AI assistant.
                </p>
                <div className="mt-8 grid gap-6">
                  <Card className="w-full after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-8 flex flex-col items-center justify-center">
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <CardDescription className="font-mono font-semibold text-black">
                        Get started with Gemini AI
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl sm:text-4xl font-bold">
                          $0
                        </span>
                        <span className="text-sm sm:text-base text-muted-foreground">
                          /month
                        </span>
                      </div>
                      <ul className="mt-6 space-y-4 text-sm sm:text-base text-black">
                        <li className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>100 chat prompts per month</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Basic AI capabilities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <XIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                          <span className="line-through text-red-500">
                            No advanced features
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-sky-500">Sign Up</Button>
                    </CardFooter>
                  </Card>
                  <Card className="">
                    <CardHeader>
                      <CardTitle className="font-bold">Pro</CardTitle>
                      <CardDescription className="font-mono font-semibold text-black text-center">
                        Unlock the full potential of Gemini AI
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl sm:text-4xl font-bold">
                          $19
                        </span>
                        <span className="text-sm sm:text-base text-black">
                          /month
                        </span>
                      </div>
                      <ul className="mt-6 space-y-4 text-sm sm:text-base text-black">
                        <li className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Unlimited chat prompts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Advanced AI capabilities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
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
              <div className="flex items-center justify-center mt-12 lg:mt-0">
                <div className="card w-full max-w-md">
                  <img
                    src="/bot_love.png"
                    alt="ailogo"
                    className="w-full h-auto"
                  />
                  <div className="card__content">
                    <p className="card__title font-semibold text-lg sm:text-xl">
                      ABOUT Gemini AI
                    </p>
                    <p className="card__description font-serif text-sm sm:text-base">
                      Gemini AI is a cutting-edge conversational AI assistant
                      developed by a team of experts in natural language
                      processing and machine learning. Our mission is to empower
                      individuals and businesses with the tools they need to
                      thrive in the digital age. We believe that AI should be
                      accessible, transparent, and beneficial to all. That's why
                      we've built Gemini AI with a focus on user-friendliness,
                      ethical principles, and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl">
                  Have a question or want to learn more? Reach out to our team,
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto sm:h-44 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
                <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
                  <span className="font-extrabold text-xl sm:text-2xl text-violet-600">
                    Get more updates...
                  </span>
                  <p className="text-neutral-700 text-sm sm:text-base">
                    Sign up for our newsletter and you'll be the first to find
                    out about new features
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 mt-4 sm:mt-0">
                  <div className="relative rounded-lg w-full sm:w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                    <input
                      type="text"
                      className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                      placeholder="Mail..."
                    />
                  </div>
                  <button className="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400 w-full sm:w-auto mt-2 sm:mt-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
