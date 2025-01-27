import { InformationCircleIcon } from '@heroicons/react/24/solid';

export default function About() {
    const iconTheme = `h-10 w-10 text-[#1f2d36]`;
    const titleTheme = `text-3xl md:text-5xl font-black text-white`;
  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center relative bg-[#d5b173]`}
    >
      <h1 className={`text-3xl md:text-5xl font-black text-[#1f2d36]`}>
        About the Conference
      </h1>
      <div className="w-1/2 flex flex-col gap-5 p-10">
        <div className={`bg-[#1f2d36]/30 rounded-xl p-5`}>
          <span className={`flex flex-row items-center justify-center gap-5`}>
            <InformationCircleIcon className={iconTheme} />
            <h1 className={titleTheme}>
              Conference Overview
            </h1>
          </span>

        </div>
        <div className={``}></div>
        <div className={``}></div>
      </div>
    </div>
  );
}
