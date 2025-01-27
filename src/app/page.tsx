import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative">
      <Image
        src="/background/rvu_banner.webp"
        alt=""
        layout="fill"
        objectFit="cover"
        className={`-z-10 h-full w-full`}
      />
      <div
        className={`w-[calc(100vw-96px)] m-12 mt-20 lg:mt-20 h-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 flex flex-col items-center justify-center`}
      >
        <div
          className={`w-full h-full p-10 flex flex-col lg:flex-row justify-between gap-5 md:text-lg lg:text-xl font-bold`}
        >
          <div className={`basis-3/4`}>
            <h1 className={`text-3xl md:text-5xl font-black`}>
              About the Conference
            </h1>
            <div className={`md:text-justify`}>
              <br />
              The International Conference on Sustainable Technologies focuses
              on advancements in computing technologies that drive innovation
              and sustainability. This global event provides a platform for
              researchers, academicians, industry professionals, and technology
              enthusiasts to explore the transformative role of computing in
              addressing modern challenges and shaping a sustainable future.
              <br />
              <br />
              The conference emphasizes areas such as green computing,
              artificial intelligence, cloud and edge computing, quantum
              computing, cybersecurity, and sustainable software engineering. It
              aims to foster collaboration, encourage knowledge sharing, and
              inspire research that aligns with global sustainability goals.
              <br />
              <br />
              Through keynote speeches from leading experts, technical paper
              presentations, and interactive sessions, participants will have
              the opportunity to engage in discussions on cutting-edge research
              and emerging trends in computing. Join us to explore how
              futuristic computing technologies can lead us toward a sustainable
              and innovative tomorrow.
            </div>
          </div>
          <div
            className={`basis-1/4 flex flex-col items-center justify-center`}
          >
            <div
              className={`w-full h-full flex flex-col items-center justify-center gap-10 p-10`}
            >
              <Button
                className={`w-full text-black hover:text-white hover:bg-[#1f2d36] bg-[#d5b173] ring-2 ring-[#1f2d36] py-5 `}
              >
                Submit Paper
              </Button>
              <Button
                className={`w-full text-black hover:text-white hover:bg-[#1f2d36] bg-[#d5b173] ring-2 ring-[#1f2d36] py-5 `}
              >
                Download Brouchere
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
