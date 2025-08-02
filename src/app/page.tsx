import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FireboltIcon } from '@/components/icons';
import { ShieldCheck, DatabaseZap, Network, Code2, Users, School, Award } from 'lucide-react';
import Link from 'next/link';
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(255, 242, 230, 0.9), rgba(255, 242, 230, 1)), url(https://placehold.co/1920x1080.png)'}} data-ai-hint="abstract cyber background">
          <div className="container mx-auto px-4 text-center">
            <FireboltIcon className="mx-auto h-20 w-20 text-primary animate-pulse" />
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4">
              Cyber Crackdown
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
              Join the brightest minds to innovate, build, and deploy the next generation of cybersecurity solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold text-lg transition-transform duration-300 hover:scale-105">
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Prizes & Recognition</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-foreground/70">
              Your hard work and innovation will be rewarded.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              <Card className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-10 w-10 text-accent" />
                  <CardTitle className="font-headline text-2xl font-semibold">Dynamic Cash Prizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    The prize pool grows as more participants register! The top teams will share a significant cash prize, rewarding the most impactful and innovative solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent/50">
                <CardHeader className="flex flex-row items-center gap-4">
                   <School className="h-10 w-10 text-accent" />
                  <CardTitle className="font-headline text-2xl font-semibold">Credential Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    All participants will receive a verifiable digital certificate of completion, in collaboration with ASOSE School and IHFC, recognizing your skills and participation in this premier event.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
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
      </main>
    </div>
  );
}
