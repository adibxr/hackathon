'use server';

import { sendEmail } from '@/ai/flows/send-email-flow';
import type { EmailData } from '@/ai/schemas';
import * as z from 'zod';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  github: z.string().optional(),
  resume: z.string().optional(),
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

  try {
    const emailContent = `
      New Hackathon Registration:
      Name: ${result.data.name}
      Email: ${result.data.email}
      Mobile: ${result.data.mobile}
      City: ${result.data.city}
      GitHub: ${result.data.github || 'N/A'}
      Resume: ${result.data.resume || 'N/A'}
    `;

    await sendEmail({
      to: 'ccidcop@gmail.com',
      subject: `New Registration from ${result.data.name}`,
      text: emailContent,
      html: `<p>${emailContent.replace(/\n/g, '<br>')}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send registration email:', error);
    return { success: false, error: 'There was a problem submitting your registration.' };
  }
}
