
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
  github: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  resume: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  city: z.string().min(2, { message: 'City is required.' }),
  terms: z.boolean().default(false).refine(val => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

declare const Razorpay: any;

export function RegisterForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{ id: string, values: FormValues } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      github: '',
      resume: '',
      city: '',
      terms: false,
    },
  });

  const handleDownloadReceipt = () => {
    if (!paymentDetails) return;
    
    const receiptContent = `
Cyber Crackdown Hackathon - Payment Receipt
------------------------------------------

Registration Details:
Name: ${paymentDetails.values.name}
Email: ${paymentDetails.values.email}
Mobile: ${paymentDetails.values.mobile}
City: ${paymentDetails.values.city}
GitHub: ${paymentDetails.values.github || 'N/A'}
Resume: ${paymentDetails.values.resume || 'N/A'}

Payment Details:
Razorpay Payment ID: ${paymentDetails.id}
Amount: ₹49.00
Status: Successful

Thank you for registering!
    `;
    const blob = new Blob([receiptContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CyberCrackdown_Receipt_${paymentDetails.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRegisterAnother = () => {
    setIsSuccess(false);
    setPaymentDetails(null);
    form.reset();
  };

  const handlePaymentAndSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    const razorpayKey = 'rzp_live_2xmNfhEtDk3XKE';

    const options = {
      key: razorpayKey,
      amount: 4900,
      currency: "INR",
      name: "Cyber Crackdown",
      description: "Hackathon Registration Fee",
      image: "https://raw.githubusercontent.com/adibxr/public/refs/heads/main/schoollogo.png",
      handler: async function (response: any) {
        try {
          const submissionValues = {
            ...values,
            razorpay_payment_id: response.razorpay_payment_id,
          };
          
          const formspreeResponse = await fetch('https://formspree.io/f/xrblabjk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionValues),
          });

          if (formspreeResponse.ok) {
            toast({
              title: "Registration Successful!",
              description: "We've received your details and payment. Welcome to the crackdown!",
            });
            setPaymentDetails({ id: response.razorpay_payment_id, values });
            setIsSuccess(true);
          } else {
            throw new Error('Form submission failed after payment. Please contact support.');
          }
        } catch (error: any) {
          toast({
            variant: 'destructive',
            title: 'Submission Failed',
            description: error.message,
          });
        } finally {
          setIsSubmitting(false);
        }
      },
      prefill: {
        name: values.name,
        email: values.email,
        contact: values.mobile,
      },
      notes: {
        address: "Cyber Crackdown Hackathon"
      },
      theme: {
        color: "#2563EB"
      },
      modal: {
        ondismiss: function() {
          setIsSubmitting(false);
        }
      }
    };

    const rzp = new Razorpay(options);

    rzp.on('payment.failed', function (response: any) {
      toast({
        variant: 'destructive',
        title: 'Payment Failed',
        description: `Error: ${response.error.description}`,
      });
      setIsSubmitting(false);
    });

    rzp.open();
  }

  if (isSuccess) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm shadow-lg border">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-20 w-20 text-green-500 mb-4" />
          <h2 className="font-headline text-3xl font-bold text-white mb-2">Congratulations!</h2>
          <p className="text-foreground/80 mb-8">
            Your registration is complete. We're excited to have you on board!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleDownloadReceipt} size="lg" className="text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Receipt
            </Button>
            <Button onClick={handleRegisterAnother} variant="outline" size="lg" className="text-lg">
              Register Another
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg border">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handlePaymentAndSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., New Delhi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Profile (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume URL (Optional)</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://your-resume-url.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide a link to your resume (e.g., Google Drive, LinkedIn).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the 
                      <Link href="/terms" target="_blank" className="text-primary hover:underline ml-1">
                        Terms and Conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting || !form.watch('terms')}>
              {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isSubmitting ? 'Processing...' : 'Pay ₹49 and Register'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
