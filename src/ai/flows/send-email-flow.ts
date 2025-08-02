'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const EmailSchema = z.object({
  to: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
});

export type EmailData = z.infer<typeof EmailSchema>;

// IMPORTANT: You must configure your email provider credentials in your environment.
// For example, using Gmail, you would set GMAIL_USER and GMAIL_PASS.
// You may also need to configure "less secure app access" in your Google account.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email provider
  auth: {
    user: process.env.GMAIL_USER, // Your email
    pass: process.env.GMAIL_PASS, // Your email password or app password
  },
});

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: EmailSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (emailData) => {
    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        ...emailData,
      });
      console.log('Email sent successfully');
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      // It's better to throw the error to be caught by the caller
      throw new Error('Failed to send email.');
    }
  }
);

export async function sendEmail(data: EmailData): Promise<{ success: boolean }> {
  return await sendEmailFlow(data);
}
