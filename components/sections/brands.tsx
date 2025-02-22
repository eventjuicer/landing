import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export interface Testimony {
  text: string;
  company: string;
  logoUrl: string;
}

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';

export const testimonies: Testimony[] = [
  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },

  {
    text: 'Amazing experience working with them...',
    company: 'Company One',
    logoUrl:
      'https://res.cloudinary.com/eventjuicer/image/upload/v1738234430/Awards_zoi1n1.jpg',
  },
  // ... add more testimonies
];

export function Brands() {
  return (
    <ScrollArea className={cn('w-full max-w-[100vw] overflow-x-hidden bg-ebe')}>
      <div className="flex space-x-4 pb-4">
        <div
          className="flex pl-4 pr-4 min-w-fit">
          {testimonies.map((testimony, index) => (
            <figure
              key={index}
              className="shrink-0 w-[300px] h-[100px] flex items-center justify-center mr-4 last:mr-0 "
            >              
                <Image
                  src={testimony.logoUrl}
                  alt={testimony.company}
                  width={100}
                  height={20}
                  className="object-contain"
                />
             
            </figure>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
