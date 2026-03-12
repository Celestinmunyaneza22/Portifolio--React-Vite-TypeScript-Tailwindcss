import p1 from "../assets/Bmi.png";
import p2 from "../assets/ML.png";
import p3 from "../assets/people.png";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Better health through BMI",
    description:
      "Calculating BMI, providing advice, food categories information and prediction based on the current situation.",
    image: p1,
    github: "https://github.com/Celestinmunyaneza22/BMI2",
    demo: "https://BMI2.vercel.app",
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "React",
      "MongoDB",
      "TailwindCSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Multiple Disease Prediction System",
    description:
      "Machine learning disease prediction system with FastAPI backend and React frontend.",
    image: p2,
    github:
      "https://github.com/Celestinmunyaneza22/multiple-disease-prediction-in-Machine-Learning-fastapi-and-react.js-frontend",
    demo: "https://multiple_disease-demo.com",
    technologies: [
      "Python",
      "Machine Learning",
      "MongoDB",
      "FastAPI",
      "React",
      "TailwindCSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "In-Out People Management System",
    description: "Full MERN stack people in/out management system.",
    image: p3,
    github:
      "https://github.com/Celestinmunyaneza22/full-stack-Application-project-with-MERN",
    demo: "https://village-demo.com",
    technologies: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Vite",
      "Node.js",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black text-sm"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;