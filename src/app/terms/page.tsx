
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const TermSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6">
        <h2 className="font-headline text-2xl font-semibold mb-3">{title}</h2>
        <div className="space-y-2 text-foreground/80">
            {children}
        </div>
    </div>
);

export default function TermsPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <FileText className="mx-auto h-16 w-16 text-primary" />
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">
                            Terms and Conditions
                        </h1>
                        <p className="mt-4 text-sm text-foreground/60">
                            Last updated: 04/08/2025
                        </p>
                    </div>

                    <Card className="bg-card/80 backdrop-blur-sm p-6 md:p-8">
                        <CardContent className="prose prose-invert max-w-none">
                            <p className="mb-6 text-foreground/80">
                                By registering for and participating in the Cyber Crackdown Hackathon ("Hackathon"), hosted by Networth Wars, you agree to be bound by these Terms and Conditions. Please read them carefully before registering.
                            </p>

                            <TermSection title="1. Registration and Payment">
                                <p>1.1. The Hackathon requires a <strong>registration fee of ₹49 INR</strong> per participant, which must be paid online through our website during registration.</p>
                                <p>1.2. Registration is only confirmed upon successful payment. No refunds will be issued once registration is completed, except in the event the hackathon is canceled by the organizers.</p>
                                <p>1.3. Participants must provide accurate and complete information during registration. False or misleading information may lead to disqualification.</p>
                            </TermSection>

                            <TermSection title="2. Eligibility">
                                <p>2.1. Participants must be at least <strong>13 years of age</strong> at the time of registration. Those under 18 must have permission from a parent or legal guardian.</p>
                                <p>2.2. The hackathon is open to individuals or teams as per event guidelines mentioned on the website.</p>
                                <p>2.3. The organizers reserve the right to refuse registration to any individual or team for any reason deemed appropriate.</p>
                            </TermSection>

                             <TermSection title="3. Event Details">
                                <p>3.1. The Hackathon will be conducted online. Participants must have access to a stable internet connection and necessary tools/software.</p>
                                <p>3.2. The theme, problem statement(s), submission deadlines, and judging criteria will be disclosed on the event platform and/or communicated via email.</p>
                            </TermSection>

                            <TermSection title="4. Prize and Certification">
                                <p>4.1. The <strong>winner(s)</strong> will receive a <strong>cash prize</strong> (amount as specified on the website) and a <strong>digital certificate of achievement</strong>.</p>
                                <p>4.2. All participants who make a valid submission will receive a <strong>credential participation certificate</strong>.</p>
                                <p>4.3. Prize money will be transferred electronically within 7–14 working days after the announcement of winners, subject to verification of identity and submission authenticity.</p>
                                <p>4.4. The organizers reserve the right to withhold the prize in case of any violation of these terms or suspected misconduct.</p>
                            </TermSection>

                            <TermSection title="5. Code of Conduct">
                                <p>5.1. Participants are expected to maintain professionalism and respect throughout the event.</p>
                                <p>5.2. Any form of cheating, plagiarism, use of copyrighted materials without permission, or violation of fair play will result in disqualification.</p>
                                <p>5.3. Any abusive, threatening, or inappropriate behavior may lead to immediate expulsion from the hackathon and a permanent ban from future events.</p>
                            </TermSection>

                            <TermSection title="6. Intellectual Property (IP)">
                                <p>6.1. Participants retain ownership of their submitted work.</p>
                                <p>6.2. However, by participating, you grant the organizers a non-exclusive, royalty-free license to use your project for promotional and educational purposes (e.g., showcasing on the website or social media).</p>
                                <p>6.3. You confirm that your submission does not infringe any third-party intellectual property rights.</p>
                            </TermSection>

                             <TermSection title="7. Limitation of Liability">
                                <p>7.1. The organizers are not responsible for any technical issues, data loss, internet failure, or unforeseen disruptions that may affect participation.</p>
                                <p>7.2. The organizers will not be liable for any indirect, incidental, or consequential damages arising from your participation in the Hackathon.</p>
                            </TermSection>

                            <TermSection title="8. Disqualification and Termination">
                                <p>8.1. The organizers reserve the right to disqualify any participant or team at any stage if found violating the Terms and Conditions or the spirit of the event.</p>
                                <p>8.2. The event may be canceled, suspended, or modified without prior notice due to unforeseen circumstances.</p>
                            </TermSection>

                            <TermSection title="9. Privacy Policy">
                                <p>9.1. We collect personal information solely for the purpose of managing the hackathon and issuing certificates/prizes.</p>
                                <p>9.2. Participant information will not be shared with third parties except as required by law or with explicit consent.</p>
                            </TermSection>

                            <TermSection title="10. Governing Law">
                                <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kapashera/Delhi.</p>
                            </TermSection>

                            <TermSection title="11. Contact Us">
                                <p>If you have any questions about these Terms, please contact us at:</p>
                                <ul className="list-none p-0">
                                    <li>📧 ccidcop@gmail.com</li>
                                    <li>📞 +918766207219</li>
                                    <li>🌐 https://networthwars.com</li>
                                </ul>
                            </TermSection>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
