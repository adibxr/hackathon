'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FireboltIcon } from '@/components/icons';
import { Users, School, Award, Eye, Wifi, Target, Calendar, ClipboardCheck, Trophy, Briefcase, Code, LineChart, Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import CollaboratorsSection from '@/components/collaborators-section';
import TypingAnimation from '@/components/typing-animation';
import { useEffect, useState } from 'react';

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
        icon: <Github className="h-8 w-8 text-primary" />,
        href: 'https://github.com/adibxr',
        handle: 'Contribute on GitHub'
    },
    {
        name: 'Gmail',
        icon: <Mail className="h-8 w-8 text-primary" />,
        href: 'mailto:admin@immortaladi.live',
        handle: 'Email Us'
    },
    {
        name: 'Twitter',
        icon: <Twitter className="h-8 w-8 text-primary" />,
        href: 'https://x.com/cybercrack',
        handle: 'Follow on X'
    },
]

export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isStruck, setIsStruck] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = (event: React.AnimationEvent) => {
    if (event.animationName === 'strike') {
      setIsStruck(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to bottom, #111, #000)'}}>
          <div className="container mx-auto px-4 text-center">
            <FireboltIcon 
              className={`mx-auto h-20 w-20 text-primary ${startAnimation ? 'animate-strike' : 'animate-pulse'}`} 
              onAnimationEnd={handleAnimationEnd}
            />
            <h1 className={`font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4 text-white ${isStruck ? 'animate-fall' : ''}`}>
              Cyber Crackdown
            </h1>
            <TypingAnimation text="Hey! its time to code" />
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
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
            <div className="max-w-5xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Prizes & Recognition</h2>
              <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-foreground/70">
                Your hard work and innovation will be rewarded.
              </p>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                      Your mission, should you choose to accept it.
                  </p>
              </div>
              <Card className="mb-16 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-lg">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl flex items-center gap-4">
                          <Target className="h-8 w-8 text-primary" />
                          {taskDetails.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="mb-6 text-lg text-foreground/80">{taskDetails.description}</p>
                      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                         {taskDetails.features.map(feature => (
                             <div key={feature.name} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                                 <div>{feature.icon}</div>
                                 <div>
                                     <h3 className="font-semibold text-lg">{feature.name}</h3>
                                     <p className="text-foreground/70">{feature.detail}</p>
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
        <section id="timeline" className="py-20 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                  Event Timeline
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                  {timeline.map((item) => (
                      <Card key={item.title} className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/30">
                          <CardHeader className="flex flex-row items-center gap-4">
                              {item.icon}
                              <div>
                                  <CardTitle className="font-headline text-2xl font-semibold">{item.title}</CardTitle>
                                  <p className="text-sm font-medium text-primary">{item.period}</p>
                              </div>
                          </CardHeader>
                          <CardContent>
                              <p className="text-foreground/70">{item.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <CollaboratorsSection />
        
        {/* Stats Section */}
        <section id="engagement" className="py-20 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {socialLinks.map((link) => (
                        <Link href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                            <Card  className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 h-full">
                                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                                    {link.icon}
                                    <h3 className="mt-4 font-bold text-xl">{link.name}</h3>
                                    <p className="text-muted-foreground">{link.handle}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
