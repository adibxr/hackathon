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
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
  github: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  resume: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  city: z.string().min(2, { message: 'City is required.' }),
});

type FormValues = z.infer<typeof formSchema>;

declare const Razorpay: any;

export function RegisterForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      github: '',
      resume: '',
      city: '',
    },
  });

  const handlePaymentAndSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_2xmNfhEtDk3XKE',
      amount: 4900, // amount in the smallest currency unit (49 * 100)
      currency: "INR",
      name: "Cyber Crackdown",
      description: "Hackathon Registration Fee",
      image: "https://raw.githubusercontent.com/adibxr/public/refs/heads/main/schoollogo.png", // ASOSE Logo from collaborators
      handler: async function (response: any) {
        // This function is called after successful payment
        try {
          // Add payment ID to form values to send to formspree
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
            form.reset();
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
        color: "#2563EB" // Blue to match primary color
      },
      modal: {
        ondismiss: function() {
          setIsSubmitting(false); // Re-enable button if user closes payment modal
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
            <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isSubmitting ? 'Processing...' : 'Pay ₹49 and Register'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
