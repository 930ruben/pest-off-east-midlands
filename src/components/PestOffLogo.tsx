import { useState } from 'react';
import logoSmallImg from '../assets/images/logo-small.png';

interface PestOffLogoProps {
  className?: string;
  imageClassName?: string;
  lightMode?: boolean;
}

export function PestOffLogo({
  className = '',
  imageClassName = '',
  lightMode = false,
}: PestOffLogoProps) {
  const [imageSrc, setImageSrc] = useState(logoSmallImg);

  // Proportional sizing matching the 572x115 aspect ratio
  // Compact on mobile/tablet to avoid overflow and fit floating bar, comfortable on desktop
  const defaultImageClasses =
    'h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9.5 2xl:h-10.5 w-auto max-w-[100px] sm:max-w-[125px] md:max-w-[155px] lg:max-w-[155px] xl:max-w-[190px] 2xl:max-w-[215px] object-contain transition-all';

  return (
    <div className={`flex items-center select-none flex-shrink-0 ${className}`}>
      <img
        src={imageSrc}
        alt="Pest Off East Midlands - Professional Nottingham Pest Control Contractor"
        width="160"
        height="32"
        loading="eager"
        fetchPriority="high"
        referrerPolicy="no-referrer"
        className={`${imageClassName || defaultImageClasses} ${lightMode ? 'brightness-0 invert opacity-95' : ''}`}
        onError={() => {
          if (imageSrc !== '/logo-small.png') {
            setImageSrc('/logo-small.png');
          }
        }}
      />
    </div>
  );
}
