import React from "react";
import { Construction } from "lucide-react";

const ConferenceConstruction = () => {
  return (
    <div className="absolute inset-0 overflow-y-auto bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8 text-center my-4">
        {/* Icon */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <Construction className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 dark:text-blue-400" />
        </div>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4">
          Website Under Construction
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
          International Conference on Advanced Research
        </h2>

        {/* Message */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
          We are currently updating our website with conference details,
          submission guidelines, and registration information. The complete
          website will be available soon.
        </p>

        {/* Key dates preview */}
        <div className="text-left max-w-md mx-auto mb-6 sm:mb-8 px-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
            Key Dates
          </h3>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <p>Full Paper Submission: May 5, 2025</p>
            <p>Notification of Acceptance: August 31, 2025</p>
            <p>Early Bird Registration: September 15, 2025</p>
          </div>
        </div>

        {/* Contact information */}
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          For urgent inquiries, please contact:
          <br />
          conference@university.edu
        </div>
      </div>
    </div>
  );
};

export default ConferenceConstruction;
