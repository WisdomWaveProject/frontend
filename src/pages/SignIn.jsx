import React from "react";

const Signin = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
          <form
            className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl"
            action="#"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Welcome Back to WisdomWave
            </h2>
           
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Sign In
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Signup here
              </a>
            </p>
          </form>
        </div>
        <div className="flex justify-center items-center py-6 px-4 bg-primary-600 lg:py-0 sm:px-0">
          <div className="max-w-md xl:max-w-xl">
            <h1 className="mb-4  font-bold  text-white xl:text-4xl">
              WisdomWave
            </h1>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white xl:text-5xl">
              The home to the world’s best design.
            </h1>
            <p className="mb-4 font-light text-primary-200 lg:mb-8 dark:text-white">
              Connect with top designers and agencies worldwide. Join us and be a part of WisdomWave.
            </p>
            <div className="flex items-center divide-x divide-primary-500">
              <div className="flex pr-3 -space-x-4 sm:pr-5">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="bonnie avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="jese avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="roberta avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                  alt="thomas avatar"
                />
              </div>
              <a href="#" className="pl-3 text-white sm:pl-5 dark:text-white">
                <span className="text-sm text-primary-200">
                  Over <span className="font-medium text-white">15.7k</span>{" "}
                  Happy Members
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
