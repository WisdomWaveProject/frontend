import React from "react";
import FAQMentor from "../components/FAQ.mentor";

const Mentor = () => {
  const articles = [
    {
      imgSrc: "https://adplist.org/images/Rectangle-207-1-p-500.jpeg",
      imgAlt: "office laptop working",
      title: "Tools to Mentor",
      excerpt:
        "Our tools like Send notes, Group session hosting, Calendar Management and more — helps you be successful in mentoring.",
    },
    {
      imgSrc: "https://adplist.org/images/Rectangle-207-2-p-500.jpeg",
      imgAlt: "office laptop working",
      title: "A diverse community",
      excerpt:
        "From over 40+ countries globally, it’s time to scale your impact beyond the local community.",
    },
    {
      imgSrc: "https://adplist.org/images/Rectangle-207-3-p-500.jpeg",
      imgAlt: "office laptop working",
      title: "Opportunities to impact",
      excerpt:
        "Our mentors get featured in news and press; we provide speaker opportunities for all mentors.",
    },
    {
      imgSrc: "https://adplist.org/images/Rectangle-207-p-500.jpeg",
      imgAlt: "office laptop working",
      title: "Feel empowered",
      excerpt:
        "Be part of a community of mentors globally that supports each other to inspire conversations; supported 24/7.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            It’s easier than you think. Join us. We’ll help you every step of
            the way.
          </h1>
          <button
            type="button"
            className="mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 p-4 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Become a mentor!
          </button>
        </div>
      </div>
      <div
        aria-label="Related articles"
        className="py-8 bg-white dark:bg-gray-900 lg:py-16"
      >
        <div className="px-4 mx-auto w-full max-w-screen-xl">
          <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
            {articles.map((article) => (
              <article
                key={article.title}
                className="p-4 max-w-sm bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:border-gray-700 flex-shrink-0"
              >
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src={article.imgSrc}
                    alt={article.imgAlt}
                  />
                </a>

                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <FAQMentor/>
    </section>
  );
};

export default Mentor;
