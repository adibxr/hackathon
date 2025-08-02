import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Gavel, Users, Trophy, ShieldCheck } from 'lucide-react';

const rules = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Team Formation',
        points: [
            'Teams can consist of 1 to 4 members.',
            'All team members must be registered for the hackathon.',
            'You can find teammates on our Discord channel.',
        ],
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Code of Conduct',
        points: [
            'All participants must treat each other with respect.',
            'Harassment, discrimination, or any form of abuse will not be tolerated.',
            'Report any violations to the organizers immediately.',
        ],
    },
    {
        icon: <Gavel className="h-8 w-8 text-primary" />,
        title: 'Project Submission',
        points: [
            'All projects must be submitted by the deadline.',
            'Submissions must include a link to a public code repository (e.g., GitHub).',
            'A short video demo (max 3 minutes) is required.',
            'Projects must be built during the hackathon. Pre-existing projects are not allowed.',
        ],
    },
    {
        icon: <Trophy className="h-8 w-8 text-primary" />,
        title: 'Judging Criteria',
        points: [
            'Innovation & Creativity: How unique is the idea?',
            'Technical Implementation: How well is the project built?',
            'Design & User Experience: Is the project easy and enjoyable to use?',
            'Presentation: How well did the team present their project?',
        ],
    },
];

export default function RulesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12">
                    <Scale className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">
                        Hackathon Rules & Guidelines
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Please read the following rules carefully to ensure a fair and enjoyable experience for everyone.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {rules.map((rule) => (
                        <Card key={rule.title} className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/30">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {rule.icon}
                                <CardTitle className="font-headline text-2xl font-semibold">{rule.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                                    {rule.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}