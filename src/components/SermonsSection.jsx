import React, { useState, useEffect } from 'react';
import SermonModal from './SermonModal';
import {
  Play,
  Video,
  Calendar,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function SermonsSection() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSermon, setSelectedSermon] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('/api/videos?max_results=6');

        if (!res.ok) {
          throw new Error(`Server error: ${res.status} `);
        }

        const data = await res.json();
        setSermons(data.videos || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  function formatDate(iso) {
    if (!iso) return '';

    const d = new Date(iso);

    return d.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  }

  return (
    <section
      id="sermons"
      className="py-12 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">

          <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
            <Video className="w-4 h-4 text-red-600" />
            <span>YouTube Sermon Channel</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-800">
            Latest Sermons & Messages
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Live from our YouTube channel — latest uploads appear here automatically.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-churchBlue-500" />
            <p className="text-sm font-medium">
              Loading latest sermons…
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-12 space-y-3 text-red-500">
            <AlertCircle className="w-8 h-8" />

            <p className="text-sm font-medium">
              Could not load sermons: {error}
            </p>

            <p className="text-xs text-slate-400">
              Make sure the backend is running on port 8000.
            </p>
          </div>
        )}

        {/* Sermon Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {sermons.map((sermon, idx) => (
              <div
                key={sermon.video_id}
                onClick={() => setSelectedSermon(sermon)}
                className="
                  bg-white
                  rounded-xl
                  overflow-hidden
                  border border-slate-200
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  flex flex-col
                  justify-between
                  group
                  cursor-pointer
                "
              >

                <div>

                  {/* Card Thumbnail */}
                  <div className="relative h-40 bg-gradient-to-br from-navy-800 to-churchBlue-600 overflow-hidden">

                    {sermon.thumbnail && (
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="
                          absolute inset-0
                          w-full h-full
                          object-cover
                          group-hover:scale-105
                          transition-transform
                          duration-500
                        "
                      />
                    )}

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="
                        w-12 h-12
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        border border-white/40
                        flex items-center justify-center
                        group-hover:scale-110
                        transition-transform
                        duration-300
                        shadow-lg
                      ">
                        <Play className="w-6 h-6 fill-white text-white" />
                      </div>
                    </div>

                    {idx === 0 && (
                      <span className="
                        absolute top-2.5 left-2.5
                        bg-navy-950/80
                        text-gold-300
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        px-2 py-1
                        rounded-md
                        border border-white/10
                      ">
                        Latest Sermon
                      </span>
                    )}

                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-1.5">

                    <h3 className="
                      font-serif
                      text-lg
                      font-bold
                      text-navy-800
                      group-hover:text-churchBlue-500
                      transition-colors
                      line-clamp-2
                    ">
                      {sermon.title}
                    </h3>

                    <p className="
                      text-slate-600
                      text-xs
                      line-clamp-2
                      leading-relaxed
                    ">
                      {sermon.description ||
                        'Watch this sermon on our YouTube channel.'}
                    </p>

                  </div>

                </div>

                {/* Card Footer */}
                <div className="
                  px-4
                  pb-4
                  pt-2
                  flex items-center justify-between
                  border-t border-slate-100
                  text-xs text-slate-500
                ">

                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {formatDate(sermon.published_at)}
                  </span>

                  <span className="
                    font-semibold
                    text-navy-800
                    group-hover:translate-x-1
                    transition-transform
                    inline-flex
                    items-center
                  ">
                    Watch Message
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* Sermon Video Modal */}
      {selectedSermon && (
        <SermonModal
          sermon={selectedSermon}
          onClose={() => setSelectedSermon(null)}
        />
      )}

    </section>
  );
}
