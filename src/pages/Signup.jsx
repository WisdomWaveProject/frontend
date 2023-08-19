import React from "react";

const Signup = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
          <form
            className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl"
            action="#"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Your Best Work Starts Here
            </h2>
           
            <div>
              <label
                for="full-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                What should we call you?
              </label>
              <input
                type="text"
                name="full-name"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="e.g. Bonnie Green"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
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
                required=""
              />
            </div>
            <div>
              <label
                for="password"
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
                required=""
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    By signing up, you are creating a WisdomWave account, and you
                    agree to WisdomWave’s{" "}
                    <a
                      className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      href="#"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="newsletter"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    Email me about product updates and resources.
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
               className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
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
              Explore the world’s leading design portfolios.
            </h1>
            <p className="mb-4 font-light text-primary-200 lg:mb-8 dark:text-white">
              Millions of designers and agencies around the world showcase their
              portfolio work on WisdomWave - the home to the world’s best design
              and creative professionals.
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
                  Happy Customers
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
