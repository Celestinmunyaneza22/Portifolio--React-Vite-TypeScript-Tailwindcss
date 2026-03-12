const GithubLanguages = () => {
  return (
    <section id="github-languages" className="py-16 md:py-20 bg-gray-900">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Most Used Languages
        </h2>

        {/* Image Container */}
        <div className="flex justify-center w-full overflow-x-auto">

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Celestinmunyaneza22&layout=compact&theme=default"
            alt="Top Languages"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto"
          />

        </div>

      </div>

    </section>
  );
};

export default GithubLanguages;