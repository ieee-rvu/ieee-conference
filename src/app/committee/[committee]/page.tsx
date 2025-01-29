import { roles, CommitteeMembers } from "@/lib/committee-types";
import { CommitteeMemberCard } from "./_components/member-card";
import { notFound } from "next/navigation";
import { roleUrlMap } from "@/lib/utils";

export default async function CommitteePage({ params }: { params: Promise<{ committee: string }> }) {
  // Convert URL parameter to proper enum key
  const committee = (await params).committee;
  const committeeKey = roleUrlMap[committee];

  // Handle invalid URLs
  if (!committeeKey) {
    notFound();
  }

  return (
    <div className="absolute inset-0 w-full bg-[#d5b173] py-8 overflow-y-scroll">
      <div className="max-w-8xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-black text-[#1f2d36] text-center mb-8">
          {roles[committeeKey]}
        </h1>

        <div className="w-fit flex flex-col xl:flex-row justify-center gap-6">
          {CommitteeMembers.filter((member) =>
            member.role.includes(committeeKey)
          ).map((member) => (
            <CommitteeMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Generate static params for all possible committees
export async function generateStaticParams() {
  return Object.keys(roleUrlMap).map((committee) => ({
    committee,
  }));
}

// Validate segment config
export const dynamicParams = false; // Only allow defined committee URLs
