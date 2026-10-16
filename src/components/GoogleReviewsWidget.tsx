import { Star, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function GoogleReviewsWidget() {
  const { businessName, reviewUrl, score, totalReviews } = siteConfig.googleRating;
  const isFiveStars = score === 5 || score === 5.0;

  return (
    <section
      className="w-full bg-[#f0f4f1] py-8 sm:py-12 scroll-mt-24 shadow-xs rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden"
      id="reviews"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#14351b] tracking-tight font-heading">
            Google Reviews
          </h2>
        </div>

        {/* Standard Google Reviews Widget */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm border border-stone-200/90">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            {/* Business Brand & Rating */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center flex-shrink-0">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg leading-tight font-heading">
                  {businessName}
                </h3>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mt-1">
                  {isFiveStars ? (
                    <>
                      <span className="font-extrabold text-stone-900 text-sm">5.0</span>
                      <div className="flex text-[#FBBC05] gap-0.5" role="img" aria-label="5.0 out of 5 stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" aria-hidden="true" />
                        ))}
                      </div>
                    </>
                  ) : score && score > 0 ? (
                    <>
                      <span className="font-extrabold text-stone-900 text-sm">{score.toFixed(1)}</span>
                      <div className="flex text-[#FBBC05] gap-0.5" role="img" aria-label={`${score.toFixed(1)} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            aria-hidden="true"
                            className={`w-4 h-4 ${
                              i < Math.floor(score)
                                ? 'fill-[#FBBC05] text-[#FBBC05]'
                                : 'fill-stone-200 text-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex text-[#FBBC05] gap-0.5" role="img" aria-label="Google rating 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" aria-hidden="true" />
                      ))}
                    </div>
                  )}
                  {totalReviews && totalReviews > 0 && (
                    <span className="text-xs text-stone-600 font-medium">
                      ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
                    </span>
                  )}
                  <span className="text-xs text-stone-500 font-medium">• Google</span>
                </div>
              </div>
            </div>

            {/* Standard Google Write a Review Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow"
              >
                <span>Write a review</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}
