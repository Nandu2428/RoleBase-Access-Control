import React from "react";

const Err = ({ statusCode }) => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-6xl text-red-600 font-bold">{statusCode}</h1>
        <h2 className="mt-4 text-xl text-gray-700">
          {statusCode === 404
            ? "Oops! The page you are looking for does not exist."
            : statusCode === 500
            ? "Oops! Something went wrong on our side."
            : "An unexpected error occurred."}
        </h2>
       
      </div>
    </div>
  );
};

export default Err;
