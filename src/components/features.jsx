import React from "react";

const features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Leap 10x career growth with iconic mentors
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              If you’re looking for advice, jamming or networking - ADPList lets
              you freely schedule a 1:1 mentorship session in fun new ways and
              work with them directly.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              explore all mentors
            </button>
          </div>
          <img
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src="https://adplist.org/photos/features/1.webp"
            alt="office feature image"
          />
        </div>
        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src="https://adplist.org/photos/features/2.webp"
            alt="office feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Speed your way to new knowledge and network
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Designed for quick wins - experience a lineup of extraordinary
              mentors from all around the way in just a click with our super
              matching system.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Get a mutch today!
            </button>
          </div>
        </div>
        <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              More visible, get scouted as a talent
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Out of a job, not out of touch. ADPList lets you list yourself as
              a talent in the community and get vouched by mentors - boosting
              your credentials to get hired fast.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"            >
              sign up as a talent
            </button>
          </div>
          <img
            className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
            src="https://adplist.org/photos/features/3.webp"
            alt="office feature image"
          />
        </div>
      </div>
    </section>
  );
};

export default features;
