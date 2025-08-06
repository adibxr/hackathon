
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogoIcon } from '@/components/icons';
import { Users, School, Zap, Eye, Wifi, Target, Calendar, ClipboardCheck, Trophy, Briefcase, Code, LineChart, Github, Twitter, Mail, UserPlus, Loader2 } from 'lucide-react';
import Link from 'next/link';
import CollaboratorsSection from '@/components/collaborators-section';
import TypingAnimation from '@/components/typing-animation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from '@/hooks/use-toast';

const stats = [
    { icon: <Users className="h-10 w-10 text-primary" />, value: '1,200+', label: 'Registered Users' },
    { icon: <Eye className="h-10 w-10 text-primary" />, value: '15,000+', label: 'Total Visitors' },
    { icon: <Wifi className="h-10 w-10 text-primary" />, value: '250+', label: 'Live Users' },
]

const timeline = [
    {
        icon: <Calendar className="h-8 w-8 text-primary" />,
        title: 'Registration',
        period: 'August 1st - August 31st',
        description: 'The registration portal is open for the entire month of August. Form your teams and sign up!',
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: 'Preparation Time',
        period: 'September 1st - October 7th',
        description: 'One full month dedicated to brainstorming, planning your architecture, and sharpening your skills.',
    },
    {
        icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
        title: 'Submission Window',
        period: 'October 8th - October 15th',
        description: 'Submit your completed projects, including a link to your public code repository and a video demo.',
    },
    {
        icon: <Trophy className="h-8 w-8 text-primary" />,
        title: 'Winner Announcement',
        period: 'October 21st',
        description: 'The winning teams will be announced and prizes will be awarded.',
    },
];

const taskDetails = {
    title: 'Investment Learning Platform',
    description: 'The core challenge of this hackathon is to build an innovative web application that teaches users about investment in a fun and engaging way, inspired by the learning style of platforms like Duolingo.',
    features: [
        {
            icon: <LineChart className="h-6 w-6 text-accent" />,
            name: 'Gamified Learning',
            detail: 'Create bite-sized lessons, quizzes, and challenges to make learning about stocks, bonds, and crypto fun.',
        },
        {
            icon: <Users className="h-6 w-6 text-accent" />,
            name: 'User Authentication & Profiles',
            detail: 'Implement a secure login and registration system. Users should have profiles to track their progress and achievements.',
        },
        {
            icon: <Code className="h-6 w-6 text-accent" />,
            name: 'Daily Tasks & Streaks',
            detail: 'Incorporate a system for daily tasks and rewards to keep users engaged and encourage consistent learning.',
        },
    ]
}

const socialLinks = [
    {
        name: 'GitHub',
        icon: <Github className="h-6 w-6 text-primary" />,
        href: 'https://github.com/adibxr',
        handle: 'Contribute on GitHub'
    },
    {
        name: 'Gmail',
        icon: <Mail className="h-6 w-6 text-primary" />,
        href: 'mailto:admin@immortaladi.live',
        handle: 'Email Us'
    },
    {
        name: 'Twitter',
        icon: <Twitter className="h-6 w-6 text-primary" />,
        href: 'https://x.com/cybercrack',
        handle: 'Follow on X'
    },
]

export default function Home() {
  const { toast } = useToast();
  const [isSubmittingTeam, setIsSubmittingTeam] = useState(false);
  const [isTeamDialogOpen, setIsTeamDialogOpen] = useState(false);

  const handleJoinTeamSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittingTeam(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ccidcop@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        toast({
          title: 'Request Received!',
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        setIsTeamDialogOpen(false);
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: error.message,
      });
    } finally {
      setIsSubmittingTeam(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-background text-foreground">
          <div className="container mx-auto px-4 text-center">
            <LogoIcon
              className="mx-auto h-20 w-20 text-primary"
            />
            <h1 
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4"
            >
              Cyber Crackdown
            </h1>
            <TypingAnimation text="Ready. Set. Code!" />
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
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
        <section id="prizes" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Prizes & Recognition</h2>
              <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
                Your hard work and innovation will be rewarded.
              </p>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <Card className="bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Zap className="h-10 w-10 text-accent" />
                    <CardTitle className="font-headline text-2xl font-semibold">Dynamic Prize Pool</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The prize pool grows with every participant! The more people who register, the bigger the cash prize for the top teams. Your innovation will be rewarded.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                     <School className="h-10 w-10 text-accent" />
                    <CardTitle className="font-headline text-2xl font-semibold">Credential Certificates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All participants will receive a verifiable digital certificate of completion, in collaboration with ASOSE School and IHFC, recognizing your skills and participation in this premier event.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Task Details Section */}
        <section id="task" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                  <Target className="mx-auto h-16 w-16 text-primary" />
                  <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mt-4">
                      Hackathon Task
                  </h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      Your mission, should you choose to accept it.
                  </p>
              </div>
              <Card className="mb-16 bg-card backdrop-blur-sm border-2 border-primary/30 shadow-lg">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl flex items-center gap-4">
                          <Target className="h-8 w-8 text-primary" />
                          {taskDetails.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="mb-6 text-lg text-muted-foreground">{taskDetails.description}</p>
                      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                         {taskDetails.features.map(feature => (
                             <div key={feature.name} className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                                 <div>{feature.icon}</div>
                                 <div>
                                     <h3 className="font-semibold text-lg">{feature.name}</h3>
                                     <p className="text-muted-foreground">{feature.detail}</p>
                                 </div>
                             </div>
                         ))}
                      </div>
                  </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                  Event Timeline
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                  {timeline.map((item) => (
                      <Card key={item.title} className="bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/30">
                          <CardHeader className="flex flex-row items-center gap-4">
                              {item.icon}
                              <div>
                                  <CardTitle className="font-headline text-2xl font-semibold">{item.title}</CardTitle>
                                  <p className="text-sm font-medium text-primary">{item.period}</p>
                              </div>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <CollaboratorsSection />
        
        {/* Stats Section */}
        <section id="engagement" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {stat.icon}
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Us Section */}
        <section id="connect" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                    Connect With Us
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {socialLinks.map((link) => (
                        <Link href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                            <Card  className="bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 h-full">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                    {link.icon}
                                    <h3 className="mt-2 font-bold text-md">{link.name}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                     <Dialog open={isTeamDialogOpen} onOpenChange={setIsTeamDialogOpen}>
                      <DialogTrigger asChild>
                         <Card className="cursor-pointer bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 h-full">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                <UserPlus className="h-6 w-6 text-primary" />
                                <h3 className="mt-2 font-bold text-md">Join Our Team</h3>
                            </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[525px]">
                        <DialogHeader>
                          <DialogTitle className="font-headline text-2xl">Join Our Team</DialogTitle>
                          <DialogDescription>
                            We're looking for passionate individuals. Fill out the form below to apply.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleJoinTeamSubmit} className="space-y-4">
                           <input type="hidden" name="_captcha" value="false" />
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="number" className="text-sm font-medium">Number</label>
                            <Input id="number" name="number" placeholder="9876543210" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="location" className="text-sm font-medium">Location</label>
                            <Input id="location" name="location" placeholder="New Delhi, India" required />
                          </div>
                           <div className="space-y-2">
                              <label htmlFor="github-join" className="text-sm font-medium">GitHub Profile (Optional)</label>
                              <Input id="github-join" name="github" placeholder="https://github.com/username" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="resume-url" className="text-sm font-medium">Resume URL (Optional)</label>
                              <Input id="resume-url" name="resume_url" placeholder="https://your-resume-link.com" />
                            </div>
                          <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmittingTeam}>
                            {isSubmittingTeam && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                            {isSubmittingTeam ? 'Submitting...' : 'Submit Application'}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
