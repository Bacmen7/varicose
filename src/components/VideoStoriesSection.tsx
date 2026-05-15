"use client";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const YouTubeIcon = () => (
  <svg viewBox="0 0 28 20" className="w-5 h-3.5">
    <rect width="28" height="20" rx="4" fill="#FF0000" />
    <polygon points="11,4 11,16 20,10" fill="#FFFFFF" />
  </svg>
);

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Understanding Varicose Veins: Causes, Symptoms and Modern Treatment Options",
    doctor: "Dr. Vein Specialist",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "EVLT vs Surgery: What every varicose vein patient needs to know",
    doctor: "Dr. Vascular Surgeon",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Early signs of venous insufficiency most people ignore",
    doctor: "Dr. Phlebologist",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How to prevent varicose veins from getting worse with lifestyle changes",
    doctor: "Dr. Vein Specialist",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Patient story: From painful varicose veins to pain-free life in 48 hours",
    doctor: "Patient Testimonial",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "RFA treatment explained: What happens during the procedure",
    doctor: "Dr. Vascular Surgeon",
  },
];

const ITEMS_PER_PAGE = 3;

interface Video { id: string; title: string; doctor: string; }

export default function VideoStoriesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const visibleVideos = videos.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <section className="py-20 md:py-28 bg-surface relative pb-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-2">
              Vericose Vein Video Library
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-secondary font-normal">
              Hear From Our Expert Specialists
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] text-white transition-all hover:opacity-90 self-start md:self-auto cursor-pointer bg-primary px-6 py-3">
            View All Stories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Video Cards */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible mb-10" style={{ scrollbarWidth: "none" } as React.CSSProperties}>
          {visibleVideos.map((video, i) => (
            <div
              key={`${currentPage}-${i}`}
              onClick={() => setActiveVideo(video)}
              className="w-[280px] min-w-[280px] sm:w-[300px] sm:min-w-[300px] md:w-auto md:min-w-0 flex-shrink-0 md:flex-shrink flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="p-3 pb-0">
                <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-xl">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white ml-0.5" fill="currentColor">
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-3 flex flex-col flex-grow">
                <p className="text-sm text-gray-800 leading-relaxed mb-3 flex-grow">
                  {video.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">{video.doctor}</p>
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${i === currentPage ? "bg-primary" : "bg-gray-200"}`}
            />
          ))}
        </div>
      </div>

      {/* Wave */}
      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 30C240 62 480 62 720 30C960 -2 1200 -2 1440 30V60H0V30Z" fill="#FFFFFF" />
      </svg>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4">
              <p className="text-white text-base font-semibold leading-snug">{activeVideo.title}</p>
              <p className="text-white/50 text-sm mt-1">{activeVideo.doctor}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
