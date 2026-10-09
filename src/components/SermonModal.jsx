import React from 'react';
import { X, Calendar, Share2 } from 'lucide-react';

export default function SermonModal({ sermon, onClose }) {
  if (!sermon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">

      {/* Modal */}
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-slate-200">

        {/* YouTube Video */}
        <div className="relative h-[180px] sm:h-[420px] bg-black">

          <iframe
            src={`https://www.youtube.com/embed/${sermon.video_id}?autoplay=1&rel=0`}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute top-3 right-3 z-10
              bg-black/50 hover:bg-black/80
              text-white
              p-2
              rounded-full
              transition-colors
            "
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6">

          {/* Title + Date */}
          <div className="
            flex flex-wrap
            items-center
            justify-between
            gap-2
            border-b
            border-slate-100
            pb-3
          ">

            <h3 className="
              font-serif
              text-xl
              font-bold
              text-navy-800
              line-clamp-2
            ">
              {sermon.title}
            </h3>

            <span className="
              flex
              items-center
              text-xs
              text-slate-500
              whitespace-nowrap
            ">
              <Calendar className="w-4 h-4 mr-1 text-churchBlue-500" />

              {sermon.published_at
                ? new Date(sermon.published_at).toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }
                )
                : ''}
            </span>

          </div>

          {/* Description */}
          <p className="
            mt-3
            text-slate-600
            text-sm
            leading-relaxed
            line-clamp-2
          ">
            {sermon.description ||
              'Watch this message on our YouTube channel.'}
          </p>

          {/* Buttons */}
          <div className="
            mt-4
            flex
            flex-col
            sm:flex-row
            justify-end
            gap-2
          ">

            <a
              href={sermon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                space-x-2
                border
                border-slate-300
                text-slate-700
                hover:bg-slate-50
                px-4
                py-2
                rounded-lg
                text-sm
                font-medium
              "
            >
              <Share2 className="w-4 h-4" />
              <span>Open on YouTube</span>
            </a>

            <button
              onClick={onClose}
              className="
                bg-navy-800
                text-white
                hover:bg-navy-900
                px-5
                py-2
                rounded-lg
                text-sm
                font-medium
              "
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}