import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">


            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Explore the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Build Your Ideal
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-400 text-base md:text-lg leading-7">
              Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">

              <button className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform duration-300">
                Explore Technologies
              </button>

              <button className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                Learn More
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />

              <img
                src={bannerImage}
                alt="Technology banner"
                className="relative w-full object-contain animate-[float_4s_ease-in-out_infinite]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;