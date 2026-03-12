import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          Celestin
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">

          <li><a href="#about" className="hover:text-blue-400 font-bold">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 font-bold">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 font-bold">Projects</a></li>
          <li><a href="#GitHub" className="hover:text-blue-400 font-bold">GitHubWork</a></li>
          <li><a href="#contact" className="hover:text-blue-400 font-bold">Contact</a></li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 mt-4 flex flex-col items-center gap-6 py-6">

          <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 font-bold">About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 font-bold">Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 font-bold">Projects</a></li>
          <li><a href="#GitHub" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 font-bold">GitHubWork</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 font-bold">Contact</a></li>

        </ul>
      )}

    </nav>
  );
};

export default Navbar;