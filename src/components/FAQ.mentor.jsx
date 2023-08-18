import React from "react";

const FAQMentor = () => {
  const FAQData = [
    {
      title: "What's the approval criteria to be a mentor?",
      content:
        "Relevant experience in the industry ( > 3 years) : Has past experience in a role involving mentoring/leading junior-mid level ;Passionate about mentoring and sharing ;Diversity and Inclusion practice",
    },
    {
      title: "I'm new, how does WisdomWave work for mentors?",
      content:
        "Welcome! First, feel free to explore the rest of the Mentor University here for all our frequently asked questions!",
    },
    {
      title: "Why reviews matter for mentors?",
      content:
        "Reviews build trust in the community and help drive quality engagement. Don’t wait for the review—write your mentee a note on ADPList and we include a message for them to write review for you too!",
    },
    {
      title: "Can mentors also be mentees?",
      content:
        "Yes, all mentors can meet and learn from fellow mentors too! :)",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Common questions
        </h2>
        <h6 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight  text-center text-gray-100 dark:text-gray-300">Some questions asked by the members of our community</h6>
        <div className="mx-auto max-w-screen-md">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {FAQData.map((item, index) => (
              <React.Fragment key={index}>
                <h2 id={`accordion-flush-heading-${index + 1}`}>
                  <button
                    type="button"
                    className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target={`#accordion-flush-body-${index + 1}`}
                    aria-expanded="true"
                    aria-controls={`accordion-flush-body-${index + 1}`}
                  >
                    <span>{item.title}</span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 1}`}
                  className=""
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQMentor;
