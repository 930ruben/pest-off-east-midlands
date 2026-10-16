/**
 * Partner Companies Marquee
 * Displays genuine client business logos from assets folder with a seamless infinite scroll loop.
 */

import molsonLogo from '../assets/business logos/Molson-Logo.png';
import rbcLogo from '../assets/business logos/RBC-Logo-Wide-1.png';
import tjHallLogo from '../assets/business logos/TJj-Hall.png';
import thomasJamesLogo from '../assets/business logos/ThomasJames_logo_Block_Pink_Small.png';
import hcrgLogo from '../assets/business logos/hrcg-logo.png';
import rushcliffeCareLogo from '../assets/business logos/rushcliffe-care-group-logo.png';

interface LogoItem {
  id: string;
  name: string;
  src: string;
  imgClassName: string;
}

const businessLogos: LogoItem[] = [
  {
    id: 'molson-coors',
    name: 'Molson Coors Beverage Company',
    src: molsonLogo,
    imgClassName: 'h-7 sm:h-9 w-auto max-w-[140px] sm:max-w-[170px] object-contain',
  },
  {
    id: 'rushcliffe-borough-council',
    name: 'Rushcliffe Borough Council',
    src: rbcLogo,
    imgClassName: 'h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-[185px] object-contain',
  },
  {
    id: 'tj-hall',
    name: 'TJ Hall Construction',
    src: tjHallLogo,
    imgClassName: 'h-7 sm:h-9 w-auto max-w-[130px] sm:max-w-[160px] object-contain',
  },
  {
    id: 'thomas-james',
    name: 'Thomas James Estate Agents',
    src: thomasJamesLogo,
    imgClassName: 'h-8 sm:h-10 w-auto max-w-[145px] sm:max-w-[175px] object-contain',
  },
  {
    id: 'hcrg-care-group',
    name: 'HCRG Care Group',
    src: hcrgLogo,
    imgClassName: 'h-9 sm:h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain',
  },
  {
    id: 'rushcliffe-care-group',
    name: 'Rushcliffe Care Group',
    src: rushcliffeCareLogo,
    imgClassName: 'h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-[180px] object-contain',
  },
];

export function PartnerMarquee({ title = 'Trusted by Nottinghamshire Organisations' }: { title?: string }) {
  return (
    <div className="w-full py-1 overflow-hidden">
      {title && (
        <div className="mb-2 sm:mb-2.5 text-center sm:text-left">
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-stone-400 uppercase">
            {title}
          </span>
        </div>
      )}

      {/* Infinite scrolling track of pure company logos */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll py-2">
          {[0, 1, 2, 3].map((trackIdx) => (
            <div
              key={`track-${trackIdx}`}
              className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 flex-shrink-0"
              aria-hidden={trackIdx > 0 ? 'true' : undefined}
            >
              {businessLogos.map((logo) => (
                <div
                  key={`track-${trackIdx}-${logo.id}`}
                  className="flex items-center justify-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={trackIdx === 0 ? `${logo.name} commercial partner logo` : ''}
                    loading="lazy"
                    decoding="async"
                    className={logo.imgClassName}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
