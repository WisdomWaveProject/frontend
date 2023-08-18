import React from "react";

const UserCard = () => {
  return (
      <div className="max-w-xs ml-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <a href="#">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxDTS2p0v4fKgRv-SboSithG6-xdEenr-zw&usqp=CAU"
            alt=""
          />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jane Doe
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            Head of Product Design at Huckleberry Labs
          </p>
        </div>
        <div className="flex flex-col p-4 text-gray-700 dark:text-gray-400 ">
          <span>Experience</span>
          <span>19 years</span>
        </div>
      </div>
  );
};

export default UserCard;
