import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        {/* Copyright */}
        <p className="text-sm sm:text-base">
          © 2026 Celestin. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5 text-lg">

          <a
            href="https://github.com/Celestinmunyaneza22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/munyaneza-celestin-7b34b5123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:munezacelestin@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;