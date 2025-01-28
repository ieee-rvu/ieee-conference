import { BentoCard } from '@/components/bento-card';


// app/about/page.tsx
import {
  InformationCircleIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  const cards = [
    {
      title: "Conference Overview",
      Icon: InformationCircleIcon,
      content:
        "The International Conference on Sustainable Technologies focuses on advancements in computing technologies that drive innovation and sustainability. This global event provides a platform for researchers, academicians, industry professionals, and technology enthusiasts to explore the transformative role of computing in addressing modern challenges and shaping a sustainable future.",
      className: "lg:col-span-3",
    },
    {
      title: "Academic Impact",
      Icon: AcademicCapIcon,
      content: [
        "Strive for excellence in teaching, research, capacity building, community engagement, and to build a reputation in the academic world as a thought leader in various disciplines; benchmark against top universities of the world.",
        "Use digital and other technologies relevant to the teaching-learning process and to conduct advanced research.",
        "Creation of a vibrant and diverse community with faculty members and students hailing from different parts of the country and the world.",
        "Forge a large number of national and international collaborations to create learning opportunities and mobility for the students and faculty members.",
        "Make higher education accessible to all. Offer a multidisciplinary learning environment in a diversity of knowledge streams and skills catering to the existing and emerging needs from a learners context.",
        "Create a research-rewarding environment that seeks and encourages interdisciplinary expertise and institution-building enterprise among faculty members, while consistently forging cooperation between global and Indian institutions of eminence.",
        "Expose students to the best of theory and practice.",
        "Evolve a diverse talent pool of informed, self-driven, empathetic, and inclusive problem solvers.",
      ],
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Industry Collaboration",
      Icon: UserGroupIcon,
      content:
        "We foster strong connections between academia and industry, providing a platform for networking and collaboration. Industry professionals share real-world applications and challenges, while researchers present innovative solutions. This synergy leads to meaningful partnerships and practical implementations of sustainable technologies.",
      className: "lg:col-span-1 lg:row-span-2",
    },
  ];

  return (
    <div className="absolute inset-0 h-full bg-[#d5b173] overflow-hidden">
      <div className="h-full w-full flex flex-col">
        {/* Header section with fixed height */}
        <div className="p-4 md:p-4">
          <h1 className="text-3xl md:text-4xl font-black text-[#1f2d36] text-center">
            About the Conference
          </h1>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {cards.map((card, index) => (
                <BentoCard
                  key={index}
                  title={card.title}
                  Icon={card.Icon}
                  content={card.content}
                  className={card.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
