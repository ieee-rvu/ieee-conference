import { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react';

interface BentoCardProps {
  title: string;
  content: string | string[];
  Icon?: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function BentoCard({
  title,
  content,
  Icon,
  className = "",
}: BentoCardProps) {
  return (
    <div className={`bg-[#928260] rounded-xl p-8 h-full ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="h-6 w-6 text-white shrink-0" />}
        <h2 className="text-2xl text-white font-bold">{title}</h2>
      </div>
      {Array.isArray(content) ? (
        <ul className="text-white leading-relaxed list-disc pl-5 space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white leading-relaxed text-sm md:text-base">
          {content}
        </p>
      )}
    </div>
  );
}
