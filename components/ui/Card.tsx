import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`bg-surface rounded-lg shadow-xl border border-surface-elevated ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardElevatedProps extends CardProps {}

export function CardElevated({ children, className = '', onClick }: CardElevatedProps) {
  return (
    <div 
      className={`bg-surface-elevated rounded-lg shadow-xl border border-surface-higher ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}