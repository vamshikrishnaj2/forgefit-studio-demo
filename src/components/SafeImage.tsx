import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackContent?: React.ReactNode;
}

export const SafeImage: React.FC<SafeImageProps> = ({ src, alt, className, fallbackContent }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex items-center justify-center bg-zinc-800 text-zinc-500 ${className}`}>
        {fallbackContent || <UserCheck className="w-12 h-12" />}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  );
};
