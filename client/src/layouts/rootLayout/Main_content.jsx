import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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
    <div className="flex min-h-[100vh] flex-col w-full">
      <div className="flex-grow">
        <section id="features" className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4 items-start">
                <BoltIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Blazing Fast</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Gemini AI responds instantly, so you can get the information you need in real-time.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <SettingsIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Highly Customizable</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Tailor Gemini AI to your specific needs with a wide range of configuration options.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <LightbulbIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Innovative Features</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Gemini AI is constantly evolving, with new features and capabilities added regularly.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <CodeIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Developer Friendly</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Integrate Gemini AI seamlessly into your applications with our powerful API.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <ShieldIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Secure and Private</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Your data is safe with Gemini AI, with industry-leading security and privacy measures.
                </p>
              </div>
              <div className="grid gap-4 items-start">
                <HeadphonesIcon className="w-10 h-10 text-sky-500" />
                <h3 className="text-xl sm:text-2xl font-bold">Exceptional Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our dedicated support team is here to help you get the most out of Gemini AI.
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
                <p className="mt-4 text-sm sm:text-base text-gray-500">
                  Gemini AI offers flexible pricing plans to suit your needs. 
                  Choose the plan that works best for you and unlock the full potential of our AI assistant.
                </p>
                <div className="mt-8 grid gap-6">
                  <Card className="w-full after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:mt-8 flex flex-col items-center justify-center">
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <CardDescription className="font-mono font-semibold">Get started with Gemini AI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl sm:text-4xl font-bold">$0</span>
                        <span className="text-sm sm:text-base text-muted-foreground">/month</span>
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
                          <span className="line-through text-red-500">No advanced features</span>
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
                      <CardDescription className="font-mono font-semibold">Unlock the full potential of Gemini AI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl sm:text-4xl font-bold">$19</span>
                        <span className="text-sm sm:text-base text-black">/month</span>
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
                  <img src="/bot_love.png" alt="ailogo" className="w-full h-auto" />
                  <div className="card__content">
                    <p className="card__title font-semibold text-lg sm:text-xl">ABOUT Gemini AI</p>
                    <p className="card__description font-serif text-sm sm:text-base">
                      Gemini AI is a cutting-edge conversational AI assistant developed by a team of experts in natural language processing and machine learning. Our mission is to empower individuals and businesses with the tools they need to thrive in the digital age.
                      We believe that AI should be accessible, transparent, and beneficial to all. That's why we've built Gemini AI with a focus on user-friendliness, ethical principles, and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 sm:py-20 md:py-28 lg:py-36 xl:py-44 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl">
                  Have a question or want to learn more? Reach out to our team, and we'll get back to you as soon as possible.
                </p>
              </div>
              <form action="" className="grid gap-4 rounded border-collapse max-w-md mx-auto">
                <div className="grid gap-1.5 text-black">
                <label htmlFor="name" className="text-sm sm:text-base text-current">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-1.5 text-black">
                  <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                  <Input id="email" placeholder="Your email" />
                </div>
                <div className="grid gap-1.5 text-black">
                  <label htmlFor="message" className="text-sm sm:text-base">Message</label>
                  <Input id="name" placeholder="Your name" className="bg-background text-foreground" />
<Textarea id="message" placeholder="Your message" className="bg-background text-foreground" />
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
</div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer className="py-12 border-y-gray-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-xs sm:text-sm leading-loose text-muted-foreground">
              Built with ❤️ by <a href="https://github.com/Remy2404/Remy2404" className="font-semibold">Ramy</a>
            </p>
            <div className="justify-center flex gap-4">
              <a href="#" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm font-medium hover:underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100023470206503" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/rameee_are_mee/?fbclid=IwY2xjawFOfk1leHRuA2FlbQIxMAABHUqlEQQw4Z125cqDmsqv_E497g7hl_3uBKXgJGC5mpQ1hltikJZqCreLQg_aem_9_AFCcGGl1oQ34MuhwZpzA" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}