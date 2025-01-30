"use client"
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CommitteeMember } from '@/lib/committee-types';
import Image from 'next/image';

// Helper function to convert camelCase to Capital Case
const formataffiliation = (affiliation: string) => {
  const result = affiliation.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export function CommitteeMemberCard ({ member }: { member: CommitteeMember }) {

  return (
    <Card className="w-full max-w-md h-full p-6 flex flex-col gap-3 justify-between">
      {/* Avatar Section - 2/3 of card width */}
      <div className="w-full flex justify-center">
        <div className="w-48 h-48">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
              priority
              quality={90}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="py-1">
          <h2 className="text-2xl font-bold">
            {member.designation}{" "}
            {member.subDesignation && `(${member.subDesignation})`}{" "}
            {member.name}
          </h2>
        </div>

        <div className="space-y-4">
          <Separator />

          <div className="pb-3 pt-0">
            <h4 className="text-sm font-semibold">Affiliations</h4>
            <div className="flex flex-wrap gap-2">
              {member.affiliations.map((affiliation, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {affiliation}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
