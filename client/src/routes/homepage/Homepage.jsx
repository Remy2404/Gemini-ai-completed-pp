import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation, useInView } from "framer-motion";
import "./homepage.css";

const TypingIndicator = () => (
  <span className="typing-indicator"></span>
);

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="homepage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="background-gradient" />

      <motion.div 
        className="left"
        variants={itemVariants}
      >
        <motion.h1 
          className="title"
          variants={itemVariants}
        >
          <span className="gradient-text">GEMINI</span> AI
        </motion.h1>
        <motion.h2 
          className="subtitle"
          variants={itemVariants}
        >
          Your AI-Powered Creative Companion
        </motion.h2>
        <motion.p 
          className="description"
          variants={itemVariants}
        >
          Transform your ideas into reality with advanced AI technology.
          Create, analyze, and innovate faster than ever before.
        </motion.p>
        
        <motion.div 
          className="cta-container"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/dashboard" 
            className="cta-button"
            onClick={() => setIsLoading(true)}
          >
            <motion.span 
              className="button-content"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <span className="text">Get Started</span>
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="right"
        variants={itemVariants}
        ref={ref}
      >
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="card-content">
            <motion.img 
              src="/bot_Img.png"
              alt="Gemini AI Assistant"
              className="bot-image"
              loading="lazy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
              }}
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
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1, transition: { delay: 0.3 } }
              }}
            >
              <div className="chat-bubble">
                <TypeAnimation
                  sequence={[
                    "Hello! I'm Gemini AI.",
                    1000,
                    () => setShowTypingIndicator(true),
                    "I can help with data analysis",
                    1000,
                    "Create visualizations",
                    1000,
                    "And much more...",
                    1000,
                    () => setShowTypingIndicator(false),
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
                {showTypingIndicator && <TypingIndicator />}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
