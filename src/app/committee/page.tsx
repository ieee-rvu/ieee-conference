// components/CommitteeGrid.tsx
import Link from "next/link";
import { roles } from '@/lib/committee-types';

export function CommitteeGrid() {
  // Convert enum to array of objects with key and value
  const committees = Object.entries(roles).map(([key, value]) => ({
    title: value,
    href: `/committee/${key.toLowerCase()}`,
  }));

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {committees.map(({ title, href }) => (
          <Link
            key={href}
            href={href}
            className="group bg-[#928260] hover:bg-[#1f2d36] rounded-lg p-4 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-medium text-sm md:text-base">
                {title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
// Usage in page:
export default function CommitteePage() {
  return (
    <div className="absolute inset-0 bg-[#d5b173] overflow-y-scroll">
      <div className="py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-black text-[#1f2d36] text-center mb-8">
          Committee Members
        </h1>
        <CommitteeGrid />
      </div>
    </div>
  );
}
