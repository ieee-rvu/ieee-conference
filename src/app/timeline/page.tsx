import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { RocketLaunchIcon, BeakerIcon, WrenchIcon, BellAlertIcon, BoltIcon } from "@heroicons/react/24/solid";
import { BirdIcon } from 'lucide-react';
import { ClockIcon } from '@heroicons/react/16/solid';

export default function TimelineDemo() {
  const timelineData = [
    {
      date: "5th May '25",
      icon: RocketLaunchIcon,
      content: ["Submission of Full-length Manuscript"],
    },
    {
      date: "5th July '25",
      icon: BeakerIcon,
      content: ["Last Date to Submit Full-length Manuscript"],
    },
    {
      date: "31st August '25",
      icon: BellAlertIcon,
      content: ["Notification of Acceptance"],
    },
    {
      date: "Before 15th September '25",
      icon: BoltIcon,
      content: ["Early Bird Registration"],
    },
  ];

  return (
    <div className="absolute inset-0 bg-[#d5b173] overflow-y-scroll h-full lg: overflow-x-scroll flex items-center justify-center">
      <div className="lg:w-full mx-auto">
        {/* Container that switches between horizontal and vertical layout */}
        <div className="relative">
          {/* Horizontal line for large screens */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Timeline entries container */}
          <div className="lg:flex lg:justify-between space-y-12 lg:space-y-0">
            {timelineData.map((item, index) => (
              <div key={index} className="relative lg:w-80">
                {/* Vertical line for mobile */}
                {index !== timelineData.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 lg:hidden" />
                )}

                <div className="flex lg:flex-col lg:items-center gap-4">
                  {/* Icon container */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      {React.createElement(item.icon, {
                        className: "w-6 h-6 text-blue-600 dark:text-blue-400",
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {item.date}
                    </h3>
                    <div className="space-y-2">
                      {item.content.map((text, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 text-sm"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
