'use server';

import * as z from 'zod';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  github: z.string().optional(),
  city: z.string(),
});

type RegistrationData = z.infer<typeof registerSchema>;

export async function registerUser(data: RegistrationData): Promise<{ success: boolean; error?: string }> {
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors.map((e) => e.message).join(', ');
    console.error('Validation failed:', errorMessages);
    return { success: false, error: 'Invalid data provided. Please check the form.' };
  }

  // In a real application, you would use a service like Nodemailer, Resend, or SendGrid
  // to send an email. This requires setting up API keys and transport configurations.
  // For this example, we will simulate the action by logging the data to the console.
  
  console.log('--- New Hackathon Registration ---');
  console.log(`Name: ${result.data.name}`);
  console.log(`Email: ${result.data.email}`);
  console.log(`Mobile: ${result.data.mobile}`);
  console.log(`City: ${result.data.city}`);
  console.log(`GitHub: ${result.data.github || 'Not provided'}`);
  console.log('--- Registration Data Sent to ccidcop@gmail.com (Simulated) ---');

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for this simulation
  return { success: true };
}
