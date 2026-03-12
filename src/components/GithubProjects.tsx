import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  language: string;
}

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Celestinmunyaneza22/repos?sort=updated")
      .then((res) => {
        setRepos(res.data);
      });
  }, []);

  return (
    <section id="GitHub" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          GitHub Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {repos.slice(0, 6).map((repo) => (
            <div
              key={repo.id}
              className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* Repo Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
                {repo.description}
              </p>

              {/* Language Badge */}
              {repo.language && (
                <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium w-fit mb-4">
                  {repo.language}
                </span>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto">

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-black text-sm"
                >
                  <FaGithub />
                  Code
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GithubProjects;