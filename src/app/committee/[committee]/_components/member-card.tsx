"use client"
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CommitteeMember } from '@/lib/committee-types';
import Image from 'next/image';

// Helper function to convert camelCase to Capital Case
const formatRole = (role: string) => {
  const result = role.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export function CommitteeMemberCard ({ member }: { member: CommitteeMember }) {
  const initials = member.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

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
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Qualifications</h4>
            <div className="flex flex-wrap gap-2">
              {member.qualifications.map((qual, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {qual}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="">
            <h4 className="text-sm font-semibold">Roles</h4>
            <div className="flex flex-wrap gap-2">
              {member.role.map((role, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {formatRole(role)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
