import {GitHubCalendar} from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <section id="github-calendar" className="py-16 md:py-20 bg-gray-900">

      <div className=" text-gray-100 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          GitHub Contributions
        </h2>

        {/* Calendar Container */}
        <div className="w-full overflow-x-auto flex justify-center">

          <div className="min-w-[700px]">

            <GitHubCalendar
              username="Celestinmunyaneza22"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default GithubCalendar;