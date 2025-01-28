import { CommitteeGrid } from '@/components/committee-grid';

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
