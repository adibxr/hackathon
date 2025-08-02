import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Calendar, ClipboardCheck, Trophy, Briefcase, Users, Code, LineChart } from 'lucide-react';

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

export default function TaskPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <Target className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">
                        Hackathon Task & Timeline
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                        Your mission, should you choose to accept it. Here's what you need to build and when.
                    </p>
                </div>

                {/* Task Details Section */}
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

                {/* Timeline Section */}
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                    Event Timeline
                </h2>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
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
    );
}
