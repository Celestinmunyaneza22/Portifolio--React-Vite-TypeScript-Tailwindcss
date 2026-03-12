import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-100 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          I am a passionate software developer who enjoys building modern,
          scalable and efficient web applications using
          <span className="font-semibold">
            {" "}React, Next.js, Node.js, TypeScript
          </span>
          {" "}and other modern technologies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl">

          <a
            href="https://github.com/Celestinmunyaneza22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/munyaneza-celestin-7b34b5123/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;