import profile from "../assets/celestin.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
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
            I build scalable and user-friendly web applications that solve real-world problems.</p>
            <motion.p
  className="text-gray-100 text-sm sm:text-xl mb-6 max-w-md"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  My goal is to become a top-level and innovative full-stack developer, building impactful digital
  solutions that improve people's lives and contribute to innovative tech ecosystems.
</motion.p>
            <span className="font-semibold block sm:inline">
              {" "}
              <motion.div
            className="bg-gray-900 text-gray-100 p-4 rounded-lg shadow-lg font-mono text-xl sm:text-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
          Full Stack Developer | React/Typescript Specialist | Node.js Engineer
          </motion.div>
            </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className=" font-semibold px-6 py-3 bg-black text-white rounded hover:bg-gray-800 text-center"
            >
              Explore My Work
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

        {/* RIGHT COLUMN - TYPING ANIMATION */}
<div className="flex items-center justify-center">

  <motion.div
    className="bg-gray-900 text-green-400 p-6 rounded-xl shadow-xl font-mono text-sm sm:text-base w-full max-w-md"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <TypeAnimation
      sequence={[
        `> Building scalable and user-friendly web apps...`,
        2000,
        `> React | TypeScript | Next.js | Node.js`,
        2000,
        `> Clean code. Modern UI. Real impact.`,
        2000,
        `> Let's build something amazing `,
        2000,
        `> const App = () => {
         return <h1>Hello React</h1>
        }
      type User = {
        name: string
        role: string
        } 
      export default function Home() {
        return <div>Next.js Page</div>
       } 
      const express = require("express")
       const app = express()
       app.listen(3000)`,
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={true}
    />
  </motion.div>

</div>

      </div>

    </section>
  );
};

export default Hero;