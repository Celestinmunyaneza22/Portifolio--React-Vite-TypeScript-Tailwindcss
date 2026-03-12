const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 96 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 93 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 70 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 88 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "PHP", level: 86 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 90 },
      { name: "PostgreSQL", level: 71 },
      { name: "Machine Learning", level: 73 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-md"
            >

              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              {category.skills.map((skill) => (

                <div key={skill.name} className="mb-5">

                  <div className="flex justify-between text-sm sm:text-base mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-300 h-3 rounded">

                    <div
                      className="bg-green-500 h-3 rounded"
                      style={{ width: `${skill.level}%` }}
                    />

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

        {/* Experience & Education */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Experience
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Software Developer | Projects & Training
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Education
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Computer Science
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;