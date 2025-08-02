import { z } from 'zod';

export const EmailSchema = z.object({
  to: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
});

export type EmailData = z.infer<typeof EmailSchema>;
