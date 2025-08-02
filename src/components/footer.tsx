import { FireboltIcon } from './icons';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <FireboltIcon className="h-6 w-6 text-primary" />
          <p className="text-sm font-semibold">Cyber Crackdown</p>
        </div>
        <p className="text-sm text-foreground/60 mt-4 sm:mt-0">
          © {new Date().getFullYear()} Cyber Crackdown. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
