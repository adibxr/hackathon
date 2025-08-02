import { RegisterForm } from './register-form';
import { FireboltIcon } from '@/components/icons';

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <FireboltIcon className="mx-auto h-16 w-16 text-primary" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-4">
            Register for Cyber Crackdown
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Secure your spot now. Register as an individual or as a team.
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
