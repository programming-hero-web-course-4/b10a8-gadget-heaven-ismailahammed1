import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-red-500 mb-4">OOPS</h1>
      <p className="text-lg text-red-500">Error Page 404</p>
    </div>
  );
};

export default ErrorPage;
