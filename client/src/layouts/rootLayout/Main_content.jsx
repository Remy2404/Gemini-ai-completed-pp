import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import "./main.css";
import { motion, useAnimation } from "framer-motion";
import { BrainCircuit, Zap, Sliders, Lightbulb, Code2, ShieldCheck, ChevronRight, Check, X } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="feature-card bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, description, price, features, buttonText }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="text-3xl font-bold mb-4">{price}</div>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          {feature.included ? (
            <Check className="w-5 h-5 text-green-500 mr-2" />
          ) : (
            <X className="w-5 h-5 text-red-500 mr-2" />
          )}
          <span className={feature.included ? '' : 'line-through text-gray-400'}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
    <Button>
      {buttonText}
    </Button>
  </motion.div>
);
export default function MainContent() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [controls]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className={`flex min-h-[100vh] flex-col w-full ${isHighContrast ? 'high-contrast' : ''}`}>
      <div className="flex-grow">
        <motion.section
          id="features"
          className="w-full py-16 md:py-24 bg-gray-50"
          initial="hidden"
          animate={visibleSections.includes('features') ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Our Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BrainCircuit, title: "AI-Powered Insights", description: "Leverage advanced machine learning for deep, actionable insights." },
                { icon: Zap, title: "Lightning Fast", description: "Get instant responses and process data at unprecedented speeds." },
                { icon: Sliders, title: "Highly Customizable", description: "Tailor Gemini AI to your specific needs with flexible configuration options." },
                { icon: Lightbulb, title: "Innovative Solutions", description: "Stay ahead with cutting-edge AI features and capabilities." },
                { icon: Code2, title: "Developer Friendly", description: "Seamlessly integrate Gemini AI into your applications with our robust API." },
                { icon: ShieldCheck, title: "Secure and Private", description: "Rest easy with our industry-leading security and privacy measures." },
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section 
          id="pricing" 
          className="w-full py-16 md:py-24 bg-white"
          initial="hidden"
          animate={visibleSections.includes('pricing') ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <img src="/orbital.png" alt="" className="bg-img max-w-full h-auto" aria-hidden="true" />
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Flexible Pricing for Every Need
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Starter",
                  description: "Perfect for individuals and small projects",
                  price: "$0 / month",
                  features: [
                    { text: "100 AI queries per month", included: true },
                    { text: "Basic AI capabilities", included: true },
                    { text: "Community support", included: true },
                    { text: "Advanced features", included: false },
                  ],
                  buttonText: "Get Started",
                },
                {
                  title: "Pro",
                  description: "Ideal for growing businesses and teams",
                  price: "$49 / month",
                  features: [
                    { text: "Unlimited AI queries", included: true },
                    { text: "Advanced AI capabilities", included: true },
                    { text: "Priority support", included: true },
                    { text: "API access", included: true },
                  ],
                  buttonText: "Upgrade to Pro",
                },
                {
                  title: "Enterprise",
                  description: "Custom solutions for large organizations",
                  price: "Custom",
                  features: [
                    { text: "Unlimited AI queries", included: true },
                    { text: "Full suite of AI tools", included: true },
                    { text: "Dedicated support team", included: true },
                    { text: "Custom integrations", included: true },
                  ],
                  buttonText: "Contact Sales",
                },
              ].map((plan, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className="w-full py-16 md:py-24 bg-gray-50"
          initial="hidden"
          animate={visibleSections.includes('contact') ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-md mx-auto text-center"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to get started? Our team is here to help you harness the power of AI.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <Button 
                  type="submit" 
                  className="w-full button-animation bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Send Message <ChevronRight className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

