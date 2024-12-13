import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./homepage.css";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="homepage">
      <motion.div 
        className="background-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div 
        className="left"
        {...fadeIn}
      >
        <h1 className="title">
          <span className="gradient-text">GEMINI</span> AI
        </h1>
        <h2 className="subtitle">
          Your AI-Powered Creative Companion
        </h2>
        <p className="description">
          Transform your ideas into reality with advanced AI technology.
          Create, analyze, and innovate faster than ever before.
        </p>
        
        <motion.div 
          className="cta-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/dashboard" 
            className="cta-button"
            onClick={() => setIsLoading(true)}
          >
            <span className="button-content">
              <span className="text">Get Started</span>
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

            <motion.div 
        className="right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="feature-card">
          <div className="card-content">
            <motion.img 
              src="/bot_Img.png"
              alt="Gemini AI Assistant"
              className="bot-image"
              loading="lazy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/bg.png';
              }}
            />
            <motion.div 
              className="chat-interface"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="chat-bubble">
                <TypeAnimation
                  sequence={[
                    "Hello! I'm Gemini AI.",
                    2000,
                    "I can help with data analysis",
                    2000,
                    "Create visualizations",
                    2000,
                    "And much more...",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;