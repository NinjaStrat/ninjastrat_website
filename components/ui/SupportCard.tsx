import { ReactNode } from 'react';
import Link from 'next/link';

interface SupportCardProps {
  icon: ReactNode;
  iconBgColor?: string;
  title: string;
  description: string;
  actionText: string;
  actionHref?: string;
  actionOnClick?: () => void;
  isExternal?: boolean;
  buttonVariant?: 'primary' | 'secondary';
}

export function SupportCard({ 
  icon, 
  iconBgColor = 'bg-primary/10',
  title, 
  description, 
  actionText,
  actionHref,
  actionOnClick,
  isExternal = false,
  buttonVariant = 'secondary'
}: SupportCardProps) {
  const buttonClass = buttonVariant === 'primary' 
    ? 'btn-primary inline-block' 
    : 'bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block';

  return (
    <div className="bg-surface rounded-lg shadow-lg p-6 text-center border border-primary/20 hover:border-primary/40 transition-colors">
      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="card-text mb-4">{description}</p>
      
      {actionHref ? (
        <Link 
          href={actionHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={buttonClass}
        >
          {actionText}
        </Link>
      ) : (
        <button onClick={actionOnClick} className={buttonClass}>
          {actionText}
        </button>
      )}
    </div>
  );
}