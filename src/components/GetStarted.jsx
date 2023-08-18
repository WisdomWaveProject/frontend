import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Your next chapter, made possible with mentorship.
          </h2>

          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore 18,992+ mentors from 60+ countries, to help you achieve and
            overcome any challenges you face.
          </p>

          <button
            type="button"
            className=" mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 p-4 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Get Started!
          </button>

          <div className="flex space-between">
            <img
              className="rounded-full absolute w-20 bottom-10 right-14"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F5.webp&w=750&q=75"
              alt="mentor"
            />
            <img
              className="rounded-full absolute w-16 top-55 right-1/4"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F6.webp&w=750&q=75"
              alt="mentor"
            />
            <img
              className="rounded-full absolute w-24 top-10 left-16"
              src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
              alt="mentor"
            />

            <img
              className="rounded-full absolute w-24 top-20 right-10"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F4.webp&w=750&q=75"
              alt="mentor"
            />

            <img
              className="rounded-full absolute w-24 bottom-32 left-5"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F2.webp&w=750&q=75"
              alt="mentor"
            />

            <img
              className="rounded-full absolute w-24  bottom-10 left-2/5 transform -translate-y-1/2 -translate-x-1/2"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F8.webp&w=750&q=75"
              alt="mentor"
            />

            <img
              className="rounded-full absolute w-16 bottom-2 left-1/2 transform -translate-x-1/2"
              src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F7.webp&w=750&q=75"
              alt="mentor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
