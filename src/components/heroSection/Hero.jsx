import React from "react";

const Hero = () => {
    
  return (
    
    <div>
      <section className="bg-white p-3 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        <div className="place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Learn and grow with help from world-class mentors for free
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Book and meet over 18,986+ mentors for 1:1 mentorship in our
              global community.
            </p>
          </div>
          {/* <!-- Hero image --> */}
          <div className=" ms-8ml-25 place-self-center ">
            <img
            style={{marginLeft:"25%"}}
             className="w-1/2 h-auto  !important rounded-full"
              src="https://imgs.search.brave.com/GFMcgmEbEiMkkfkoH8_QXyA5wMOD2Jk-gg7_IhWvfLI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ucHIub3JnL2Fz/c2V0cy9pbWcvMjAy/MC8wOC8zMS9ucHJf/bWVudG9yX3Nwb3Qx/X3NxLWFmNDM1NGJj/ZWNhZmYzMWIwYzkw/ZGZiMWNlNTBhMzFh/Njg3NTk2MGYtczEx/MDAtYzUwLmpwZw"
              alt="imghero"
            />
          </div>
        </div>
      </section>
      <div style={{ width: "40%", marginTop: "-101px", marginLeft: "144px" }}>
        <form
          action="#"
          className="gap-2 flex p-2 mt-8 w-full bg-white rounded lg:gap-x-4 lg:grid-cols-9 lg:mt-12 dark:bg-gray-800"
        >
          <div className="lg:col-span-3">
            <label htmlFor="location-form" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="location-form"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="guests" className="sr-only">
              Select number of guests
            </label>
            <select
              id="Expertise"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Add guests</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="guests" className="sr-only">
              Select number of guests
            </label>
            <select
              id="guests"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Add guests</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <button
            type="submit"
            className="lg:col-span-2 justify-center md:w-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
