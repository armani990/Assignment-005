import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-500 text-base md:text-lg leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <a
                href="#technologies"
                className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition"
              >
                Explore Technologies
              </a>

              <button className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold border border-gray-300 text-gray-700 hover:border-pink-400 hover:text-pink-500 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerImage}
              alt="Technology banner"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;