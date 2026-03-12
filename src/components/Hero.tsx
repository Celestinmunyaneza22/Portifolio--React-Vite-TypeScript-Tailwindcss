import profile from "../assets/celestin.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 pt-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT COLUMN */}
        <div className="text-center md:text-left">

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="profile"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-6 mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Title */}
          <motion.h1
            className="text-gray-100 text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Celestin
          </motion.h1>

          {/* Description */}
          <p className="text-gray-100 text-lg sm:text-xl mb-6">
            I build modern web applications using
            <span className="font-semibold block sm:inline">
              {" "}React | Node.js | Next.js | TypeScript
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className=" font-semibold px-6 py-3 bg-black text-white rounded hover:bg-gray-800 text-center"
            >
              View Projects
            </a>

            <a
              href="/CelestinCV.pdf"
              download
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white text-center"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* RIGHT COLUMN - ANIMATED CODE */}
        <div className="relative space-y-4">

          {/* React Code */}
          <motion.div
            className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
{`const App = () => {
  return <h1>Hello React</h1>
}`}
          </motion.div>

          {/* TypeScript Code */}
          <motion.div
            className="bg-gray-900 text-blue-400 p-4 rounded-lg shadow-lg font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
{`type User = {
  name: string
  role: string
}`}
          </motion.div>

          {/* Next.js Code */}
          <motion.div
            className="bg-gray-900 text-yellow-400 p-4 rounded-lg shadow-lg font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
{`export default function Home() {
  return <div>Next.js Page</div>
}`}
          </motion.div>

          {/* Node.js Code */}
          <motion.div
            className="bg-gray-900 text-green-300 p-4 rounded-lg shadow-lg font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
{`const express = require("express")
const app = express()
app.listen(3000)`}
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;