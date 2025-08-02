'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const collaborators = [
  { 
    name: 'ASOSE School', 
    logo: 'https://raw.githubusercontent.com/adibxr/public/refs/heads/main/schoollogo.png', 
    hint: 'university building',
    description: 'Dr. B.R. Ambedkar Schools of Specialised Excellence (ASOSEs) are choice-based schools for grades 9 to 12 that allow students to specialise in their chosen fields of study. The Government of NCT of Delhi has established Dr. B.R. Ambedkar Schools of Specialised Excellence in order to cater to students who have a demonstrated interest and aptitude in specific domains.'
  },
  { 
    name: 'IHFC', 
    logo: 'https://raw.githubusercontent.com/adibxr/public/refs/heads/main/ihfc.png', 
    hint: 'technology logo',
    description: 'In the past few years, the world and especially India has rapidly seen advancement in sensing, computing, algorithm research, and development. This has further ushered in the growth of robotics research and its adaptation in the real world. Today, it’s very obvious that robots are being used and every sector, let it be in the life of a simple farmer planting and harvesting his crops, to the wholesaler who needs to manage his inventory in his vast warehouse of all agricultural produce. The usage of drones in agriculture, defense, and industry has taken a turn only for the better. The use of robots in collaboration with doctors is being used in long intensive surgeries. All over the world and this kind of collaborative work with robots will just increase with time'
  },
];

export default function CollaboratorsSection() {
    return (
        <section id="collaborators" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Our Collaborators</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-foreground/70">
              Proudly supported by leading institutions in education and technology.
            </p>
            <TooltipProvider>
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {collaborators.map((c) => (
                  <Tooltip key={c.name}>
                    <TooltipTrigger>
                      <div className="flex flex-col items-center gap-2">
                        <Image 
                          src={c.logo} 
                          alt={`${c.name} logo`} 
                          width={160} 
                          height={80} 
                          className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                          data-ai-hint={c.hint}
                        />
                        <p className="font-semibold text-foreground/80">{c.name}</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm bg-card border-primary text-foreground rounded-lg p-4 shadow-lg">
                      <p>{c.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </section>
    );
}
