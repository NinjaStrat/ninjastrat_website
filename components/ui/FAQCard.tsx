import { ReactNode } from 'react';

interface FAQCardProps {
  question: string;
  answer: ReactNode;
  accentColor?: string;
}

export function FAQCard({ question, answer, accentColor = 'border-primary' }: FAQCardProps) {
  return (
    <div className={`bg-surface rounded-lg shadow-lg p-6 border-l-4 ${accentColor}`}>
      <h3 className="text-xl font-semibold text-white mb-3">{question}</h3>
      <div className="card-text">{answer}</div>
    </div>
  );
}