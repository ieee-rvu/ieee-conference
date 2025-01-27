import { roles } from '@/lib/committee-types';
import { CommitteeMembers } from '@/lib/committee-types';
import { CommitteeMemberCard } from './_components/member-card';

export default async function CommitteePage ({ params }:{ params: { committee: keyof typeof roles } }) {
  const { committee } = await params;
  return (
    <div
      className={`h-screen w-screen flex flex-col items-center justify-center`}
    >
      <h1>{roles[committee]}</h1>
      <div className={`w-full flex flex-col lg:flex-row items-center justify-center gap-5 p-5`}>
        {CommitteeMembers.filter((member) =>
          member.role.some((role) => role === committee)
        ).map((member) => (
          <CommitteeMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
