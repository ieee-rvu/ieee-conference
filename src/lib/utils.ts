import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { roles } from './committee-types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const roleUrlMap = Object.fromEntries(
  Object.keys( roles ).map( ( key ) => [
    key.toLowerCase(),
    key as keyof typeof roles,
  ] )
);
