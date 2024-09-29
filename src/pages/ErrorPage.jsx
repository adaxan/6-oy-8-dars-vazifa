import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="card w-96 bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoBack}
          className="btn btn-outline btn-error w-full mt-6 text-white"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
