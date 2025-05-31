import React from "react";
import {
  RocketLaunchIcon,
  BeakerIcon,
  BellAlertIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const TimelineEntry = ({
  date,
  icon: Icon,
  content,
  isLast,
  color,
  nextColor,
}: {
  date: string;
  icon: React.ElementType;
  content: string[];
  isLast: boolean;
  color: string;
  nextColor: string;
}) => (
  <div className="relative lg:flex-1">
    {/* Connector line */}
    {!isLast && (
      <>
        {/* Vertical line for mobile */}
        <div
          className="absolute left-6 top-12 h-full w-0.5 lg:hidden"
          style={{
            background: `linear-gradient(to bottom, ${color}, ${nextColor})`,
          }}
        />
        {/* Horizontal line for desktop */}
        <div
          className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5"
          style={{
            background: `linear-gradient(to right, ${color}, ${nextColor})`,
          }}
        />
      </>
    )}

    <div className="flex lg:flex-col items-start lg:items-center gap-4">
      {/* Icon */}
      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${color}20`,
          }}
        >
          <Icon className="w-6 h-6" style={{ color: color }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1 lg:pt-4 lg:text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {date}
        </h3>
        <div className="space-y-2">
          {content.map((text, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-300">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Timeline() {
  const timelineData = [
    {
      date: "1st July '25",
      icon: RocketLaunchIcon,
      content: ["Submission of Full-length Manuscript"],
      color: "#96CEB4",
    },
    {
      date: "30th August '25",
      icon: BeakerIcon,
      content: ["Last Date to Submit Full-length Manuscript"],
      color: "#FF6B6B",
    },
    {
      date: "1st December '25",
      icon: BellAlertIcon,
      content: ["Notification of Acceptance"],
      color: "#FFD166",
    },
    {
      date: "Before 15th December '25",
      icon: BoltIcon,
      content: ["Early Bird Registration"],
      color: "#96CEB4",
    },
    {
      date: "31st December '25",
      icon: BoltIcon,
      content: [
        "Last Date for Registration",
      ],
      color: "#FF6B6B",
    },
    {
      date: "1st January '26",
      icon: BoltIcon,
      content: [
        "Submission of Camera-ready Manuscript and Copyright Form:",
      ],
      color: "#FF6B6B",
    },
    {
      date: "5th and 6th March '26",
      icon: BoltIcon,
      content: ["Conference Dates"],
      color: "#45B7D1",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full overflow-y-scroll absolute inset-0 bg-white dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto h-full sm:h-fit">
        {/* Timeline container */}
        <div className="lg:flex-row flex flex-col gap-8 lg:gap-4 overflow-x-auto">
          {timelineData.map((item, index) => (
            <TimelineEntry
              key={index}
              {...item}
              isLast={index === timelineData.length - 1}
              nextColor={
                index < timelineData.length - 1
                  ? timelineData[index + 1].color
                  : item.color
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
