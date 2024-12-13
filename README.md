

---

# Chat Bot Application

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

#### **Project Overview**
You've just cloned a minimal setup template for creating a React 18 chat bot application. This project leverages Vite for development, ensuring fast code updates with Hot Module Replacement (HMR). It also includes ESLint rules to maintain code quality and consistency.
- **Gemini ai website:** [Gemini AI Chat](https://gemini-ai-930l.onrender.com/)
- **Youtube demo:** [The full-stack nature of the project (MERN stack)](https://www.youtube.com/watch?v=dv9UR1WHQX8)


### Figma Design Prototype
This application has been prototyped in Figma. The design provides a blueprint for the chat bot's UI, offering insights into user interactions, UI layout, and styling. You can explore the design and prototype below:

- **Figma Design:** [Figma Design Link](https://www.figma.com/design/MBqLRGrEx3zp6kyz3E2oqK/Gemini-Ai-chat?node-id=0-1&t=PnnmAGjQf6gDskRx-1)
- **Figma Prototype:** [Figma Prototype Link](https://www.figma.com/proto/MBqLRGrEx3zp6kyz3E2oqK/Gemini-Ai-chat?node-id=5-246&node-type=canvas&t=qLfA7JUrR4IeW58s-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A246)

The Figma design provides:
- A **modern UI** layout.
- **User flow** interactions for the chat bot.
- Detailed **component styles** for seamless frontend integration.

The prototype allows you to **click through** and simulate the user experience, giving you a better understanding of the UI structure and user flow.

## Table of Contents
1. Project Overview
2. Figma Design Prototype
3. Getting Started
4. Key Components
5. Important Scripts
6. Project Structure
7. Notable Aspects
8. Next Steps
9. Contributing
10. License

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm or yarn

### Installation
To get your development environment up and running, follow these steps:

1. **Navigate to the project folder:**
   ```sh
   cd Gemini-ai-completed-pp/client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

## Key Components
- **Client Dependencies:**
  - UI: `@chakra-ui/react`, `@emotion/react`, `@emotion/styled`, `tailwindcss`
  - Authentication: `@clerk/clerk-react`
  - Icons: `@heroicons/react`
  - Data Fetching: `@tanstack/react-query`
  - Core Libraries: `react`, `react-dom`, `react-router-dom`
  - AI Integration: `@google/generative-ai`

- **Server Dependencies:**
  - Framework: `express`
  - Authentication: `@clerk/clerk-sdk-node`
  - Database: `mongoose`
  - Utilities: `cors`, `dotenv`, `imagekit`, `nodemon`

## Important Scripts
- **Client:**
  - `dev`: Start the development server with Vite.
  - `build`: Build the application for production.
  - `lint`: Run ESLint to check for code issues.
  - `preview`: Preview the built application.

- **Server:**
  - `start`: Start the server with Nodemon for automatic restarts.
  - `test`: Run tests (if any are defined).

## Project Structure
- **Client Directory:**
  - Core files: `index.html`, `jsconfig.json`, `package.json`, `vite.config.js`
  - Source code: `src` directory with `App.jsx`, `index.css`, `main.jsx`
  - Components: Organized in `components` directory
  - Utilities: `lib` directory with helper files
  - Routing: `routes` directory with `index.jsx`

- **Public Directory:**
  - Static assets like `favicon.ico`

- **Server Directory:**
  - Main server file: `index.js`
  - Models: `models` directory with `chat.js` and `userChats.js`

## Notable Aspects
- **Vite**: Fast and modern frontend build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Component Organization**: Structured and reusable components.
- **Clear Separation**: Distinct client-side and server-side code.

## Next Steps
Start exploring the codebase, make some changes, and see them live instantly with Vite's HMR. Also, use the **Figma prototype** to refine the UI and improve user experience. 

Happy coding, and welcome to the project! If you need more details, check out the project's GitHub repository for updates and additional information.

## Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
