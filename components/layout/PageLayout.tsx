import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className={`flex-grow container mx-auto px-8 py-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}