import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import GithubCalendar from "./components/GithubCalendar";
import GithubLanguages from "./components/GithubLanguages";
import GithubProjects from "./components/GithubProjects";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubProjects />
      <GithubCalendar />
      <GithubLanguages />
      <Contact />
      <Footer />
    </>
  )
}

export default App