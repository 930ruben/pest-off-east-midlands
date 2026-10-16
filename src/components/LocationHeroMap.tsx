import { useEffect, useRef, useState } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { NottinghamLocation } from '../config/siteConfig';
import { MapPin, ShieldCheck, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LocationHeroMapProps {
  location: NottinghamLocation;
  className?: string;
}

export function LocationHeroMap({ location, className = '' }: LocationHeroMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

    if (!apiKey || !mapRef.current) {
      return;
    }

    try {
      setOptions({
        key: apiKey,
        v: 'weekly',
      });
    } catch {
      // Options already set in prior call
    }

    importLibrary('maps')
      .then((mapsLib) => {
        if (!isMounted || !mapRef.current) return;

        const center = location.coordinates;

        // Custom stylish map style complementing the natural dark green and slate theme
        const customMapStyles: google.maps.MapTypeStyle[] = [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ weight: '2.00' }],
          },
          {
            featureType: 'all',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#9c9c9c' }, { weight: '0.6' }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f5f7f2' }],
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#dcedd8' }, { visibility: 'simplified' }],
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#fde047' }, { lightness: 50 }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#cbe3eb' }, { visibility: 'on' }],
          },
        ];

        const { Map, InfoWindow } = mapsLib;

        const map = new Map(mapRef.current, {
          center,
          zoom: 13.5,
          mapTypeId: 'roadmap',
          disableDefaultUI: true,
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: customMapStyles,
          gestureHandling: 'cooperative',
        });

        // The compact header card itself acts as the pin, with its pointy bottom anchored directly at the coordinates
        const infoWindow = new InfoWindow({
          position: center,
          pixelOffset: new google.maps.Size(0, 0),
          disableAutoPan: false,
          content: `
            <div style="font-family: inherit; margin: 0; padding: 0 16px 0 0; color: #1c1917;">
              <div style="display: flex; align-items: center; gap: 5px; margin: 0 0 2px 0;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #65a30d; flex-shrink: 0;"></span>
                <strong style="font-size: 12px; font-weight: 800; color: #14351b; line-height: 1.2;">${location.name} Area</strong>
              </div>
              <p style="font-size: 10px; margin: 0 0 4px 0; color: #57534e; line-height: 1.25;">
                Local Mobile Service Area
              </p>
              <div style="font-size: 8.5px; font-weight: 700; color: #166534; background: #ecfccb; padding: 2px 5px; border-radius: 4px; display: inline-block;">
                Part of East Midlands Network
              </div>
            </div>
          `,
        });

        infoWindow.open(map);
        infoWindowRef.current = infoWindow;

        map.addListener('click', () => {
          infoWindow.setPosition(location.coordinates);
          infoWindow.open(map);
        });

        setMapInstance(map);
        setMapLoaded(true);
      })
      .catch((err: unknown) => {
        console.error('Google Maps load error:', err);
        if (isMounted) setLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [location]);

  const handleZoomIn = () => {
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() || 13) + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() || 13) - 1);
    }
  };

  const handleResetCenter = () => {
    if (mapInstance && location.coordinates) {
      mapInstance.panTo(location.coordinates);
      mapInstance.setZoom(13.5);
      if (infoWindowRef.current) {
        infoWindowRef.current.setPosition(location.coordinates);
        infoWindowRef.current.open(mapInstance);
      }
    }
  };

  return (
    <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-white/40 bg-stone-100 ${className}`}>
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[380px]"
        aria-label={`Google Map showing Pest Off service in ${location.name}`}
      />

      {/* Fallback / Loading Skeleton if Maps is loading */}
      {!mapLoaded && !loadError && (
        <div className="absolute inset-0 bg-stone-100/90 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-8 h-8 rounded-full border-3 border-[var(--color-primary)] border-t-transparent animate-spin mb-3" />
          <span className="text-xs font-bold text-stone-700">Loading {location.name} Area Map...</span>
        </div>
      )}

      {/* Static Fallback if Maps Key fails */}
      {loadError && (
        <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center p-6 text-center">
          <MapPin className="w-8 h-8 text-[var(--color-primary)] mb-2 animate-bounce" />
          <span className="text-sm font-black text-[var(--color-primary)]">{location.name} Area</span>
          <p className="text-xs text-stone-600 mt-1">Full Pest Off mobile coverage across {location.name} & all surrounding East Midlands districts.</p>
        </div>
      )}

      {/* Floating Top Pill Badge: Area & Network Note */}
      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10 pointer-events-none">
        <div className="backdrop-blur-md bg-white/92 border border-white/80 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-xs flex items-center gap-2 pointer-events-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-black text-[var(--color-primary)] leading-tight">
              {location.name} Area
            </span>
            <span className="text-[8.5px] sm:text-[10px] text-stone-600 font-semibold leading-tight">
              Mobile Units Covering All East Midlands
            </span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Action / Map Controls */}
      <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 z-10 flex flex-col gap-1.5">
        <button
          onClick={handleZoomIn}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/90 hover:bg-white text-stone-800 hover:text-[var(--color-primary)] shadow-xs flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-stone-200/60"
          title="Zoom In"
          aria-label="Zoom in on map"
        >
          <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/90 hover:bg-white text-stone-800 hover:text-[var(--color-primary)] shadow-xs flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-stone-200/60"
          title="Zoom Out"
          aria-label="Zoom out on map"
        >
          <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={handleResetCenter}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/90 hover:bg-white text-stone-800 hover:text-[var(--color-primary)] shadow-xs flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-stone-200/60"
          title="Center on Location"
          aria-label="Center on location"
        >
          <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Floating Bottom Left Legend */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 hidden sm:flex items-center gap-1.5 backdrop-blur-md bg-stone-900/80 text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold">
        <ShieldCheck className="w-3 h-3 text-[var(--color-accent)]" />
        <span>Mobile Vans Stationed Across Region</span>
      </div>
    </div>
  );
}
