import { ReactNode } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  features?: string[];
  actionText?: string;
  onAction?: () => void;
  className?: string;
  titleClassName?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  features, 
  actionText = 'Download',
  onAction,
  className = '',
  titleClassName = ''
}: FeatureCardProps) {
  return (
    <div className={`bg-surface rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors ${className}`}>
      <h3 className={`text-xl font-semibold text-white mb-3 ${titleClassName}`}>{title}</h3>
      <div className="card-text mb-4">{description}</div>
      
      {features && features.length > 0 && (
        <ul className="card-text mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="w-4 h-4 text-success mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {onAction && (
        <button onClick={onAction} className="btn-primary w-full">
          {actionText}
        </button>
      )}
    </div>
  );
}