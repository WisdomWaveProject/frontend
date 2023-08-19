import React, { useState } from "react";
import DatePicker from "react-datepicker";
const Profile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSection, setSelectedSection] = useState("overview");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
      };

      setComments([...comments, newComment]);
      setComment("");
    }
  };
  return (
    <div className=" p-6 bg-white dark:bg-gray-900">
      <div className=" flex gap-6 items-center bg-white dark:bg-gray-900 pl-24">
        <img
          className="rounded-full w-24  "
          src="https://adplist.org/_next/image?url=%2Fphotos%2Fmentors%2F7.webp&w=750&q=75"
          alt="mentor"
        />
        <div>
          <div className="flex flex-col font-bold text-gray-500 dark:text-gray-400 sm:text-xl">
            <span>Apoorva Bitton</span>
            <span>Senior User Experience Design at SAP Concur</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-1 border-b border-gray-200 mt-8 bg-white dark:bg-gray-900">
        <ul className=" flex gap-6 text-gray-900 dark:text-gray-200 sm:text-xl">
          <li onClick={() => setSelectedSection("overview")}>Overview</li>
          <li onClick={() => setSelectedSection("reviews")}>Reviews</li>
        </ul>
      </div>
      {selectedSection === "overview" && (
        <section id="overview" className="mt-12 flex">
          <div className=" w-1/2  bg-white dark:bg-gray-900">
            <p className=" text-gray-900 dark:text-gray-200 sm:text-l">
              I’m a UX Designer. My passion is ingrained in problem-solving and
              research which manifests itself in delivering end-to-end inclusive
              + data-driven design. My favorite part about being a designer is
              the magic that comes from
            </p>
            <h1 className="text-gray-900 dark:text-gray-200 sm:text-xl">
              Background
            </h1>
            <div className=" mt-8 border border-gray-200 rounded-lg px-6">
              <div className="border-b border-gray-200 grid grid-cols-2 gap-4 py-6 items-center justify-between">
                <p className="text-base leading-relaxed text-gray-900 dark:text-gray-200 sm:text-xl">
                  Expertise
                </p>
                <div className=" w-1/2 flex gap-2 justify-end">
                  <div className="h-[38px] cursor-pointer relative rounded-lg py-2.5 px-5 text-[#F88634]">
                    <p>Design</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 grid grid-cols-2 gap-4 py-6 items-center justify-between">
                <p className="text-base leading-relaxed text-gray-900 dark:text-gray-200 sm:text-xl">
                  Disciplines
                </p>
                <div className=" w-1/2 flex gap-2 justify-end">
                  <div className="h-[38px] cursor-pointer relative rounded-lg py-2.5 px-5 text-[#F88634]">
                    <p>UX/UI</p>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-4 py-6 items-center justify-between">
                <p className="text-base leading-relaxed text-gray-900 dark:text-gray-200 sm:text-xl">
                  Fluent in
                </p>
                <div className=" w-1/2 flex gap-2 justify-end">
                  <div className="h-[38px] cursor-pointer relative rounded-lg py-2.5 px-5 text-[#F88634]">
                    <p>English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-white dark:bg-gray-900 flex flex-col items-center">
            <button className="text-gray-900 dark:text-gray-200 sm:text-xl">
              book a session
            </button>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </section>
      )}
      {selectedSection === "reviews" && (
        <section id="review">
          <div className="mt-6">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="p-2 border rounded w-2/5"
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-500 text-white p-2 rounded"
            >
              Submit Comment
            </button>
          </div>

          {/* Display the comments */}
          {comments.map((commentObj, index) => (
            <div key={index} className=" flex  mt-6">
              <div className="bg-white rounded-2xl px-10 py-3 w-2/5 overflow-hidden whitespace-normal break-words shadow-lg hover:shadow-2xl transition duration-500">
                <div className="flex flex-row items-center space-x-4">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white"></div>
                  <span>Jane Doe</span>
                </div>
                <div className="mt-4">
                  <p className="mt-4 text-md text-gray-600">
                    {commentObj.text}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="mt-4 flex items-center space-x-4 py-6">
                      <div className="text-sm font-semibold">
                        <span className="font-normal">
                          {commentObj.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Profile;
