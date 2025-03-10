"use client"

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import useSWR from 'swr';
import { PresenterDTO } from '@/db/participant/transform-to-presenter';
import { fetcher } from '@/lib/fetcher';
import {Linkedin} from 'lucide-react';
import {Gradient} from '@/components/hero/gradient';

const gradientClassName =
  'from-[#FCE61D] via-[rgba(252,230,29,0.4)] to-[rgba(255,255,255,0.1)]';


export function Speakers() {
  const { data: presenters, isLoading, error } = useSWR<PresenterDTO[]>('/api/presenters', fetcher);


  if (!presenters || isLoading || error) {
    return <div>Loading...</div>;
  }

  return (
    <ScrollArea className={cn('my-5 w-full min-w-[100dvw] max-w-[100dvw] overflow-x-hidden')}>
      <div
        className={cn(
          'flex space-x-4 pb-4 bg-gradient-to-t',
         
        )}
      >
        <div
          className={cn(
            'flex pl-4 pr-4 min-w-fit',
            // gradientClassName,
          
          )}
        >
          {presenters.map((presenter, index) => {

            if(!presenter.a || !presenter.a.includes("https://")) {
              return null;
            }

            return (
                <figure
                  key={presenter.id}
                  className="shrink-0 w-[250px] h-[500px] flex flex-col mr-4 last:mr-0 bg-white group hover:cursor-pointer"
                >
                  <div className="aspect-[1/2] relative">
                    <Image 
                      src={presenter.a} 
                      alt={presenter.n} 
                      width={300} 
                      height={600} 
                      className="object-cover w-full h-full object-center grayscale group-hover:grayscale-0 transition-all duration-300"
                      quality={100}
                    />
                    {/* <div className="absolute top-0 left-0">
                      <Linkedin className="w-10 h-10 text-white  mix-blend-screen" />
                    </div> */}
                    <Gradient variation={index % 3} className="top-[250px] w-[100px] h-[150px] opacity-100 group-hover:opacity-50 transition-all duration-300" />


                      {/* Logo area - 10% height */}
                  <figcaption className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end pl-3 pb-5 pr-10 from-black/90 via-black/10 to-transparent bg-gradient-to-t">
                    <div className="text-white text-2xl font-light tracking-tighter">
                      {presenter.n}
                    </div>
                    <div className="text-white text-sm">
                      {presenter.p}
                    </div>
                    <div className="text-white text-sm">
                      {presenter.c}
                    </div>
                   </figcaption>


                  </div>
    
                
                </figure>
              )
          })}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
